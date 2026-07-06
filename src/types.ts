export interface Animal {
  id: string;
  name: string;
  species: "dog" | "cat" | "farm" | "bird" | "other";
  speciesLabel: string;
  age: string;
  rescueStory: string;
  currentStatus: string;
  personality: string;
  favoriteActivities: string;
  image: string;
  sponsorCost: number;
}

export interface RescueStory {
  id: string;
  title: string;
  animalName: string;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  challenge: string;
  recoveryJourney: string;
  currentLife: string;
  date: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: "happy" | "before_after" | "volunteers" | "sanctuary" | "events";
  caption: string;
}

export interface NewsEvent {
  id: string;
  title: string;
  date: string;
  category: "event" | "fundraiser" | "update" | "outreach";
  summary: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChatTurn {
  role: "user" | "model";
  text: string;
}
