import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, PawPrint, ShieldAlert, Sparkles, AlertCircle } from "lucide-react";
import { ChatTurn } from "../types";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<ChatTurn[]>([
    {
      role: "model",
      text: "Hello! 🐾 I am Nancy Nenad's digital Sanctuary Assistant for **Little Orphan Animals**. How can I help you today? I can answer questions about our rescues, donation impact, volunteering, or our lifelong sanctuary vision!",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever history or typing state changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isLoading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    setError(null);
    setInput("");
    
    // Append user message
    const userTurn: ChatTurn = { role: "user", text: textToSend };
    setHistory((prev) => [...prev, userTurn]);
    setIsLoading(true);

    try {
      // Send request securely to our backend Express proxy
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          // Exclude first greeting message to keep history clean for API
          history: history.slice(1),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to receive response from our secure server.");
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      // Append assistant response
      const modelTurn: ChatTurn = { role: "model", text: data.reply };
      setHistory((prev) => [...prev, modelTurn]);
    } catch (err: any) {
      console.error(err);
      setError("Unable to connect to Nancy's Assistant. Please verify server connection.");
      // Append a helpful offline turn
      setHistory((prev) => [
        ...prev,
        {
          role: "model",
          text: "⚠️ **Offline Mode:** I couldn't connect with the secure server. Here are some basic details: Little Orphan Animals is a nonprofit sanctuary founded by Nancy Nenad. You can contact us at info@littleorphananimals.org or support us with a secure donation!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestionChips = [
    "About Founder Nancy Nenad",
    "Where is the sanctuary located?",
    "How does a $50 donation help?",
    "Are these animals adoptable?",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="w-[90vw] sm:w-[380px] h-[520px] max-h-[calc(100vh-180px)] bg-white dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col overflow-hidden mb-4 transition-all duration-300 ease-out animate-in slide-in-from-bottom-5"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 dark:from-emerald-950 dark:to-emerald-900 text-white px-5 py-4 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 dark:bg-emerald-900 rounded-2xl flex items-center justify-center border border-white/20">
                <PawPrint className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold leading-none tracking-wide flex items-center">
                  Nancy's Assistant
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300 ml-1.5 animate-pulse" />
                </h4>
                <p className="text-[11px] text-emerald-200 mt-1 flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block mr-1.5 animate-ping" />
                  LOA Secure AI Guide
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              id="btn-close-chatbot"
              className="text-emerald-100 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fbfaf8] dark:bg-stone-950/40">
            {history.map((turn, idx) => (
              <div
                key={idx}
                className={`flex ${turn.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    turn.role === "user"
                      ? "bg-emerald-800 text-white rounded-br-none font-medium shadow-md shadow-emerald-900/10"
                      : "bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 rounded-bl-none border border-stone-200/60 dark:border-stone-800/80 shadow-sm"
                  }`}
                >
                  {/* Basic markdown parsing for bullet points, bold and line breaks */}
                  {turn.text.split("\n").map((line, lIdx) => {
                    let formatted = line;
                    // Bold support
                    const boldRegex = /\*\*(.*?)\*\*/g;
                    const matches = [...formatted.matchAll(boldRegex)];
                    
                    if (matches.length > 0) {
                      return (
                        <p key={lIdx} className="mb-1">
                          {line.split("**").map((part, pIdx) => 
                            pIdx % 2 === 1 ? <strong key={pIdx} className="font-bold text-emerald-950 dark:text-emerald-400">{part}</strong> : part
                          )}
                        </p>
                      );
                    }
                    
                    if (formatted.trim().startsWith("- ") || formatted.trim().startsWith("* ")) {
                      return (
                        <li key={lIdx} className="ml-3 list-disc mb-1">
                          {formatted.substring(2)}
                        </li>
                      );
                    }
                    return <p key={lIdx} className="mb-1">{formatted}</p>;
                  })}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-stone-800 rounded-2xl rounded-bl-none px-4 py-3 border border-stone-200/60 dark:border-stone-800/80 flex items-center space-x-1.5 shadow-sm">
                  <div className="w-2 h-2 bg-stone-400 dark:bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 bg-stone-400 dark:bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 bg-stone-400 dark:bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-300 p-3 rounded-xl border border-red-100 dark:border-red-900/30 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Suggestions List */}
          {history.length === 1 && !isLoading && (
            <div className="px-4 py-2 bg-[#fcfbf9] dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 flex flex-wrap gap-1.5 justify-start">
              {suggestionChips.map((sug, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => handleSend(sug)}
                  id={`btn-chat-sug-${sIdx}`}
                  className="text-[11px] bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-2.5 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-emerald-50/20 dark:hover:bg-emerald-950/20 hover:text-emerald-800 dark:hover:text-emerald-300 transition-all cursor-pointer text-left font-medium"
                >
                  {sug}
                </button>
              ))}
            </div>
          )}

          {/* Chat Footer Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-3 bg-white dark:bg-stone-900 border-t border-stone-200/80 dark:border-stone-800 flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Nancy's Assistant..."
              disabled={isLoading}
              className="flex-1 bg-stone-100 dark:bg-stone-800/80 border border-transparent focus:border-stone-300 dark:focus:border-stone-700 text-stone-800 dark:text-white rounded-full px-4 py-2.5 text-sm outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              id="btn-chatbot-send"
              className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-md shadow-emerald-800/15 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="btn-chatbot-toggle"
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 scale-100 hover:scale-105 active:scale-95 cursor-pointer hover:shadow-emerald-800/20 ${
          isOpen
            ? "bg-stone-800 hover:bg-stone-700 shadow-stone-800/20"
            : "bg-emerald-800 hover:bg-emerald-700 hover:rotate-6"
        }`}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="w-6 h-6 animate-in spin-in-12" /> : <MessageSquare className="w-6 h-6 animate-in zoom-in-50" />}
      </button>
    </div>
  );
}
