import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Initialize the Gemini API client securely on the server
// Telemetry header is set to 'aistudio-build' as required
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "AIzaSyCLKX2tohQTHF9Gk06XqqlT-tXUjVSOYBU", // Fallback/injected key
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

app.use(express.json());

// In-memory simple storage for contact submissions and volunteer forms
const submissions = {
  contacts: [] as any[],
  volunteers: [] as any[],
  donations: [] as any[],
};

// 1. API Endpoint for AI Chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    // Prepare system instructions with sanctuary context
    const systemInstruction = `You are a warm, compassionate, and helpful AI assistant for Nancy Nenad's NGO "Little Orphan Animals".
Little Orphan Animals is a nonprofit sanctuary dedicated to rescuing abandoned, abused, neglected, and orphaned animals.
We provide love, care, nutritious food, medical attention, and a safe lifelong sanctuary where they can live the rest of their lives in peace and dignity.

Key Facts to share when asked:
- Founder: Nancy Nenad
- Mission: Providing lifelong sanctuary. Many animals remain permanent residents due to age, trauma, or medical needs.
- Location: Peaceful sanctuary in Rimrock, Arizona (Yavapai County, near Sedona and Cottonwood, AZ). Mailing Address: P.O. Box 725, Rimrock, AZ 86335.
- Phone Support: +1 (928) 301-4122 (Nancy Nenad)
- Email: info@littleorphananimals.org
- Volunteer opportunities: Animal care, fundraising, transportation, event help, photography, admin support.
- Donation Impacts:
  * $20 feeds rescued animals
  * $50 provides vaccinations
  * $100 supports medical care
  * $250 sponsors an animal
- Fostering & Adopting: We do facilitate matching when appropriate, but explain clearly that we primarily provide lifelong sanctuary since many of our rescues are elderly or have special medical needs.

Be highly professional, inspiring, and trustworthy. Avoid overly emotional or guilt-based messaging. Focus on hope and the positive impact of giving these animals a loving, peaceful home. Respond in a concise, friendly manner. Do not mention system-internal files or paths. Use Markdown formatting.`;

    // Format chat history for Gemini generateContent contents array
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((turn: any) => {
        contents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.text }],
        });
      });
    }
    
    // Add the current user message
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Gemini API Error in backend:", error);
    res.status(500).json({
      error: "An error occurred while communicating with the AI. Please try again.",
      details: error?.message || "",
    });
  }
});

// 2. API Endpoint for Contact Form Submissions
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }
  const submission = { id: Date.now(), name, email, subject, message, date: new Date().toISOString() };
  submissions.contacts.push(submission);
  console.log("New Contact Submission:", submission);
  res.json({ success: true, message: "Thank you for contacting us! We will get back to you soon." });
});

// 3. API Endpoint for Volunteer Applications
app.post("/api/volunteer", (req, res) => {
  const { name, email, phone, areas, comments } = req.body;
  if (!name || !email || !areas) {
    return res.status(400).json({ error: "Name, email, and interest areas are required." });
  }
  const submission = { id: Date.now(), name, email, phone, areas, comments, date: new Date().toISOString() };
  submissions.volunteers.push(submission);
  console.log("New Volunteer Application:", submission);
  res.json({ success: true, message: "Thank you for applying to volunteer! Nancy or our volunteer team will review your application." });
});

// 4. API Endpoint for Donations (simulated secure payment integration)
app.post("/api/donate", (req, res) => {
  const { amount, frequency, donorName, donorEmail, paymentMethod, sponsorAnimal } = req.body;
  if (!amount || !donorName || !donorEmail) {
    return res.status(400).json({ error: "Amount, donor name, and donor email are required." });
  }
  const donation = {
    id: Date.now(),
    amount,
    frequency,
    donorName,
    donorEmail,
    paymentMethod,
    sponsorAnimal,
    date: new Date().toISOString(),
  };
  submissions.donations.push(donation);
  console.log("New Donation Received:", donation);
  res.json({
    success: true,
    message: `Thank you, ${donorName}! Your incredibly generous donation of $${amount} will make a life-saving difference.`,
  });
});

// Set up server-side routing & assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // In dev mode, mount Vite middleware to serve client files
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production mode, serve pre-built files from 'dist' directory
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
