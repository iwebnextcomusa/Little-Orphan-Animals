import { Animal, RescueStory, TimelineMilestone, GalleryItem, NewsEvent, FAQItem } from "./types";

export const ANIMALS_DATA: Animal[] = [
  {
    id: "barnaby",
    name: "Barnaby",
    species: "dog",
    speciesLabel: "Dog (Senior Golden Mix)",
    age: "11 years",
    rescueStory: "Found abandoned in an orchard, severely malnourished and suffering from advanced joint issues. Nancy Nenad and our rescue team brought him to the sanctuary, where he has since received orthopedic care and premium nutrition.",
    currentStatus: "Permanent Resident",
    personality: "Incredibly gentle, quiet, and deeply affectionate.",
    favoriteActivities: "Napping under the big shade trees and greeting visitors with slow, happy tail wags.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
    sponsorCost: 25,
  },
  {
    id: "clover",
    name: "Clover",
    species: "farm",
    speciesLabel: "Miniature Donkey",
    age: "5 years",
    rescueStory: "Rescued from a neglect case where she was kept in a tiny paddock with no shelter. Clover was nervous and distrustful, but has blossomed at the sanctuary.",
    currentStatus: "Permanent Resident",
    personality: "Curious, cheeky, and loves standing close to volunteers.",
    favoriteActivities: "Chasing dry leaves, eating apple slices, and braying loudly at breakfast time.",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=800",
    sponsorCost: 35,
  },
  {
    id: "mirabelle",
    name: "Mirabelle",
    species: "cat",
    speciesLabel: "Cat (Special Needs)",
    age: "3 years",
    rescueStory: "Brought to us after a vehicle accident which left her with a partially paralyzed hind leg. After physical therapy and regular hydrotherapy, she has regained excellent mobility.",
    currentStatus: "Available for Sponsor / Permanent Sanctuary",
    personality: "Extremely playful, vocal, and stubborn.",
    favoriteActivities: "Batting at laser pointers and sunbathing on high window ledges in the cat cottage.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
    sponsorCost: 15,
  },
  {
    id: "pippin",
    name: "Pippin",
    species: "bird",
    speciesLabel: "Rescued Cockatoo",
    age: "18 years",
    rescueStory: "Surrendered due to feather-plucking from extreme anxiety and isolation. With dedicated socialization, routine, and a spacious aviary, Pippin's plumage has grown back beautifully.",
    currentStatus: "Permanent Resident",
    personality: "Dramatic, intelligent, and highly expressive.",
    favoriteActivities: "Mimicking Nancy's laugh, dancing to soft acoustic music, and tearing up wooden toys.",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=800",
    sponsorCost: 20,
  },
  {
    id: "rupert",
    name: "Rupert",
    species: "farm",
    speciesLabel: "Pig",
    age: "4 years",
    rescueStory: "Rescued from an overcrowded feedlot where he suffered from skin infections. Rupert enjoys a daily mud bath and skin oil massage, which keeps his skin healthy.",
    currentStatus: "Permanent Resident",
    personality: "Friendly, outgoing, and very food-motivated.",
    favoriteActivities: "Rooting in the dirt for truffles, taking mud baths, and getting belly rubs.",
    image: "https://images.unsplash.com/photo-1604848698030-c434ba08ece1?auto=format&fit=crop&q=80&w=800",
    sponsorCost: 30,
  },
  {
    id: "penny",
    name: "Penny",
    species: "other",
    speciesLabel: "Rescued Pygmy Goat",
    age: "2 years",
    rescueStory: "Found wandering near a major highway. No owner was ever located. Penny was welcomed into our farmyard herd and instantly bonded with the other goats.",
    currentStatus: "Permanent Resident",
    personality: "Spunky, bouncy, and highly energetic.",
    favoriteActivities: "Climbing on top of wooden structures, headbutting soft toy balls, and begging for treats.",
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80&w=800",
    sponsorCost: 15,
  },
  {
    id: "willow",
    name: "Willow",
    species: "dog",
    speciesLabel: "Dog (Three-Legged Great Dane Mix)",
    age: "4 years",
    rescueStory: "Suffered a severe leg injury before rescue, requiring amputation. Her three-legged status has never slowed her down; she runs and plays joyfully with all her sanctuary friends.",
    currentStatus: "Permanent Resident / Co-sponsor Welcomed",
    personality: "Gentle giant, highly empathetic, and quiet.",
    favoriteActivities: "Leaning against people's legs for warmth, chewing on giant rubber rings, and napping on double-sized mattresses.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
    sponsorCost: 40,
  }
];

export const RESCUE_STORIES: RescueStory[] = [
  {
    id: "scout-journey",
    title: "From Fear to Joy: Scout's Long Road to Peace",
    animalName: "Scout (Rescued Border Collie)",
    heroImage: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800",
    beforeImage: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400",
    afterImage: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400",
    challenge: "Scout was found tied up in an abandoned industrial park. He had severe fear aggression, extreme food guarding issues, and would shake when approached by humans.",
    recoveryJourney: "Nancy Nenad spent months working with Scout on positive-reinforcement rehabilitation. Over two years at the sanctuary, Scout realized he would never have to starve or defend himself again.",
    currentLife: "Today, Scout is one of our happiest permanent residents. He serves as an emotional guide dog, welcoming nervous new canine arrivals and showing them that the sanctuary is a safe, loving haven.",
    date: "October 14, 2025"
  },
  {
    id: "gertie-journey",
    title: "Gertie the Lamb: A Miraculous Survival",
    animalName: "Gertie (Rescued Lamb)",
    heroImage: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&q=80&w=800",
    beforeImage: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=400",
    afterImage: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&q=80&w=400",
    challenge: "Gertie was born prematurely during a severe freezing storm on a commercial farm, and was rejected by her mother. Left in the frost, her ears and hooves were frostbitten.",
    recoveryJourney: "Our sanctuary took her in at just two days old. Nancy bottle-fed her every two hours through the night in her own kitchen, wrapped in warm blankets with special warming lamps.",
    currentLife: "Gertie is now a playful, thriving adult ewe. She wears protective custom wool booties in the winter and spends her days leading the pasture herd, proving that love can heal even the frailest souls.",
    date: "March 22, 2026"
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2015",
    title: "The Vision Begins",
    description: "Nancy Nenad bought 15 acres of pasture land to start a safe haven after witnessing the lack of lifelong care options for senior, injured, and highly traumatized animals."
  },
  {
    year: "2018",
    title: "Official NGO Status",
    description: "Little Orphan Animals received official 501(c)(3) status. Completed construction on our main veterinary station and dog-care cottage."
  },
  {
    year: "2020",
    title: "Expansion of Farm Haven",
    description: "Built the miniature equine and pig paddocks, welcoming our first rescues Clover and Rupert. Designed custom shelter structures to handle winter cold."
  },
  {
    year: "2022",
    title: "The Cat Cottage & Aviary",
    description: "Inaugurated a dedicated indoor-outdoor sanctuary for special-needs cats and a massive, enriched aviary for rescued exotic birds."
  },
  {
    year: "2025",
    title: "A Decade of Sanctuary",
    description: "Celebrated 10 years. Nancy and our volunteer crew have saved over 450 lives, providing permanent, dignified sanctuary for those who have nowhere else to turn."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
    category: "happy",
    caption: "Two rescued puppies playing in the pasture."
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600",
    category: "sanctuary",
    caption: "Quiet nap time inside our heated Cat Cottage."
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&q=80&w=600",
    category: "happy",
    caption: "Gertie the sheep relaxing in the green clover meadow."
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=600",
    category: "sanctuary",
    caption: "Clover the miniature donkey getting her morning head scratches."
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1604848698030-c434ba08ece1?auto=format&fit=crop&q=80&w=600",
    category: "volunteers",
    caption: "A volunteer feeding fresh vegetable treats to Rupert."
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80&w=600",
    category: "events",
    caption: "Annual Sanctuary Autumn Open Day fundraiser event."
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600",
    category: "happy",
    caption: "Willow enjoying a run on our obstacle lawn."
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=600",
    category: "sanctuary",
    caption: "Pippin showing off his beautifully healed plumage."
  }
];

export const NEWS_EVENTS: NewsEvent[] = [
  {
    id: "news-1",
    title: "Sanctuary Autumn Open Day 2026",
    date: "September 12, 2026",
    category: "event",
    summary: "Join founder Nancy Nenad and our volunteers for our largest annual fundraiser. Meet the animals, enjoy vegan baked goods, and participate in our charity auction.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "news-2",
    title: "Emergency Medical Fund Drive",
    date: "July 2, 2026",
    category: "fundraiser",
    summary: "We have recently welcomed three senior rescues requiring intensive veterinary surgeries. Read about how you can support our emergency medical fund.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "news-3",
    title: "Cat Cottage Solar Heating Upgrade Completed",
    date: "June 18, 2026",
    category: "update",
    summary: "Thanks to a generous grant, our feline residents will now enjoy energy-efficient solar floor heating to keep their joints flexible and warm all year long.",
    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&q=80&w=800"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "Do you adopt out animals?",
    answer: "Yes, when appropriate, we facilitate careful foster-to-adopt matches for animals that are fully rehabilitated. However, a significant portion of our residents remain as lifelong sanctuary residents due to severe trauma, old age, advanced physical disabilities, or chronic medical conditions that require specialized daily care. Little Orphan Animals is their final, permanent home of safety and love."
  },
  {
    question: "How are donations spent?",
    answer: "Every single dollar donated directly supports animal welfare: 85% goes directly to veterinary medicines, premium nutritious food, bedding, and heated shelters. 10% goes to utility operations for the heated barn structures, and 5% covers administrative licensing and community fundraising efforts. Founder Nancy Nenad and our core coordinators operate primarily on a volunteer basis."
  },
  {
    question: "Can I visit the sanctuary?",
    answer: "To ensure a peaceful and stress-free environment for our recovering and elderly residents, our sanctuary is not open to the general public for daily drop-ins. However, we hold curated public events such as our Autumn Open Day, as well as scheduled tours for active monthly sponsors and volunteers."
  },
  {
    question: "What is monthly sponsorship?",
    answer: "Monthly sponsorship allows you to support a specific animal's feed, supplements, and veterinary costs. As a sponsor, you'll receive quarterly personalized photographic updates about your sponsored animal, and invitations to visit them during our private sponsor afternoons."
  },
  {
    question: "How can I apply to volunteer?",
    answer: "We are always looking for compassionate individuals! You can volunteer for direct animal care, fence maintenance, transportation to vet appointments, event support, photography, or administration. Fill out our volunteer application form on this website to get started."
  }
];
