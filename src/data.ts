import { Animal, RescueStory, TimelineMilestone, GalleryItem, NewsEvent, FAQItem } from "./types";

// @ts-ignore
import shiva1 from "./assets/images/shiva_1_1783440573220.jpg";
// @ts-ignore
import shiva2 from "./assets/images/shiva_2_1783440593395.jpg";
// @ts-ignore
import bucephalusVoting from "./assets/images/bucephalus_voting_1783786545702.jpg";
// @ts-ignore
import draftHorsesHerd from "./assets/images/draft_horses_herd_1783786560472.jpg";
// @ts-ignore
import horsesLonghornPasture from "./assets/images/horses_longhorn_pasture_1783786575523.jpg";
// @ts-ignore
import longhornSunset from "./assets/images/longhorn_sunset_1783786588824.jpg";

export const ANIMALS_DATA: Animal[] = [
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
    id: "shiva",
    name: "Shiva",
    species: "farm",
    speciesLabel: "Draft Horse (Clydesdale Mix)",
    age: "8 years",
    rescueStory: "Worked hard hauling logging trailers until worn down. Facing auctions and uncertainty, Shiva was rescued by Nancy Nenad and brought to our warm therapeutic horse paddock.",
    currentStatus: "Permanent Resident",
    personality: "Extremely gentle, quiet, protective, and loves human touch.",
    favoriteActivities: "Standing near volunteers, eating apples, and guiding new pasture mates.",
    image: shiva1,
    sponsorCost: 50,
  },
  {
    id: "bucephalus",
    name: "Bucephalus",
    species: "farm",
    speciesLabel: "Texas Longhorn",
    age: "6 years",
    rescueStory: "Brought to us after being saved from a dry stockyard auction. Bucephalus was dehydrated, weak, and fear-stricken, but has fully regained his majestic strength.",
    currentStatus: "Permanent Resident",
    personality: "Surprisingly sweet-natured, peaceful, and an exceptional ambassador.",
    favoriteActivities: "Standing for photos, chewing sweet clover grass, and getting horn brushings.",
    image: bucephalusVoting,
    sponsorCost: 45,
  },
  {
    id: "ares",
    name: "Ares",
    species: "farm",
    speciesLabel: "One-Horned Longhorn",
    age: "7 years",
    rescueStory: "Rescued after escaping a commercial transport truck. Ares had a severely fractured left horn and was in deep pain until our sanctuary performed a life-saving care procedure.",
    currentStatus: "Permanent Resident",
    personality: "Proud, resilient, yet incredibly calm around our animal coordinators.",
    favoriteActivities: "Standing at the peak of the hill during golden sunset, watching over the herd.",
    image: longhornSunset,
    sponsorCost: 45,
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
  },
  {
    id: "shiva-journey",
    title: "A New Dawn: Shiva's Path to Peace",
    animalName: "Shiva (Rescued Draft Horse)",
    heroImage: shiva1,
    beforeImage: shiva2,
    afterImage: shiva1,
    challenge: "For years, Shiva hauled heavy logging trailers with unwavering obedience. As his joints wore down, he was deemed surplus and faced an auction where his future was bleak and filled with fear.",
    recoveryJourney: "Nancy Nenad was tipped off about Shiva's situation by a compassionate neighbor. Little Orphan Animals intervened, securing Shiva's release and bringing him to the sanctuary's therapeutic horse paddock where he received specialized joint injections and a soft stall.",
    currentLife: "Today Shiva lives a peaceful retirement, free from the heavy harness. He is the guardian of the horse pasture, known for his thick, feathered legs and his gentle disposition toward smaller animals.",
    date: "August 15, 2025"
  },
  {
    id: "bucephalus-journey",
    title: "A Voice for the Voiceless: Bucephalus the Ambassador",
    animalName: "Bucephalus (Texas Longhorn)",
    heroImage: bucephalusVoting,
    beforeImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400",
    afterImage: bucephalusVoting,
    challenge: "Found dehydrated and severely stressed at an auction house, Bucephalus was considered too old and weak for ranching, facing immediate slaughter.",
    recoveryJourney: "Nancy Nenad welcomed him to the sanctuary. With a balanced, high-protein feed regimen and constant gentle handling, he regained his strength and grew to trust humans completely.",
    currentLife: "Bucephalus is now a sanctuary legend. Because of his remarkably calm, gentle demeanor, he regularly participates in public educational workshops, standing peacefully alongside interactive booths to advocate for compassionate livestock treatment (#VoteHumane).",
    date: "November 12, 2025"
  },
  {
    id: "meadow-herd-journey",
    title: "Stronger Together: The Healing of the Meadow Herd",
    animalName: "The Meadow Herd (Rescued Draft Horses)",
    heroImage: draftHorsesHerd,
    beforeImage: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400",
    afterImage: draftHorsesHerd,
    challenge: "A group of six beautiful chestnut draft horses were rescued together from a severe seizure case, having spent months standing in deep mud with no dry shelter, suffering from severe hoof rot and neglect.",
    recoveryJourney: "Nancy Nenad coordinated a multi-trailer transport. At the sanctuary, their hooves were trimmed, cleaned, and wrapped daily, while veterinarians provided specialized nutritional therapy to restore their depleted coat oils.",
    currentLife: "Today, they are a majestic sight. They roam together as a tight-knit family in our largest pasture, eating sweet hay and running with incredible grace under the warm sun, a true testament to collective healing.",
    date: "December 3, 2025"
  },
  {
    id: "high-pasture-companions",
    title: "Interspecies Harmony: The High Pasture Companions",
    animalName: "The High Pasture Companions",
    heroImage: horsesLonghornPasture,
    beforeImage: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=400",
    afterImage: horsesLonghornPasture,
    challenge: "A black-and-white longhorn bull and three rescued draft horses arrived at the sanctuary from different traumatic backgrounds, each showing extreme signs of isolation, fear, and territorial anxiety.",
    recoveryJourney: "Nancy and her coordinators utilized gentle, fence-line introductions over several weeks. Once ready, they were turned out into the high pasture together, where they immediately formed a unique bond.",
    currentLife: "The companions are now inseparable. The longhorn protects the group while the draft horses graze alongside him, demonstrating that safety and friendship can break down all species barriers.",
    date: "January 20, 2026"
  },
  {
    id: "ares-journey",
    title: "A Monument of Grace: Ares the Golden Sunset Longhorn",
    animalName: "Ares (Rescued One-Horned Longhorn)",
    heroImage: longhornSunset,
    beforeImage: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=400",
    afterImage: longhornSunset,
    challenge: "Ares was found wandering with a deep fracture in his left horn after escaping a transport truck. He was terrified, defensive, and suffering from a severe infection.",
    recoveryJourney: "Our veterinary team performed a life-saving, specialized amputation of the fractured horn under general anesthesia. Nancy Nenad hand-treated the wound twice daily with antimicrobial salves, earning his trust.",
    currentLife: "With his single majestic horn, Ares looks like a mythical creature. He is a stunning resident who stands proudly on our hilltops at sunset, a beloved symbol of resilience and survivor's grace.",
    date: "February 14, 2026"
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
