export type Personality =
  | "Bold Adventurer"
  | "Cozy Classic"
  | "Sweet Enthusiast"
  | "Night Owl"
  | "Artisan Snob";

export interface AnswerOption {
  emoji: string;
  text: string;
  personality: Personality;
}

export interface Question {
  question: string;
  options: AnswerOption[];
}

export interface CoffeeResult {
  personality: Personality;
  coffee: string;
  tagline: string;
}

export const questions: Question[] = [
  {
    question: "You find a mysterious door. What color is it?",
    options: [
      { emoji: "🔴", text: "Fiery red — obviously", personality: "Bold Adventurer" },
      { emoji: "🔵", text: "Deep ocean blue", personality: "Cozy Classic" },
      { emoji: "🟡", text: "Warm golden yellow", personality: "Sweet Enthusiast" },
      { emoji: "🌙", text: "Midnight purple", personality: "Night Owl" },
      { emoji: "⚫", text: "Matte black, no handle", personality: "Artisan Snob" },
    ],
  },
  {
    question: "You're given a superpower for one day. You pick:",
    options: [
      { emoji: "⚡", text: "Super speed — go go go", personality: "Bold Adventurer" },
      { emoji: "🛋️", text: "Time freeze — finally some peace", personality: "Cozy Classic" },
      { emoji: "🍭", text: "Everything you touch tastes amazing", personality: "Sweet Enthusiast" },
      { emoji: "👁️", text: "Night vision — own the darkness", personality: "Night Owl" },
      { emoji: "🎯", text: "Perfect taste — you know what's best instantly", personality: "Artisan Snob" },
    ],
  },
  {
    question: "Pick a hypothetical pet:",
    options: [
      { emoji: "🐉", text: "A tiny dragon", personality: "Bold Adventurer" },
      { emoji: "🐻", text: "A sleepy bear cub", personality: "Cozy Classic" },
      { emoji: "🦋", text: "A glowing butterfly", personality: "Sweet Enthusiast" },
      { emoji: "🦉", text: "An owl that only wakes at midnight", personality: "Night Owl" },
      { emoji: "🐈‍⬛", text: "A cat that judges everyone", personality: "Artisan Snob" },
    ],
  },
  {
    question: "You're stranded on a desert island. You grab one thing:",
    options: [
      { emoji: "🔥", text: "A flare gun — time to signal for rescue", personality: "Bold Adventurer" },
      { emoji: "📖", text: "A thick novel — might as well relax", personality: "Cozy Classic" },
      { emoji: "🍫", text: "An endless box of chocolates", personality: "Sweet Enthusiast" },
      { emoji: "🔦", text: "A lantern — the nights are long", personality: "Night Owl" },
      { emoji: "🎸", text: "A hand-crafted guitar — if you're stuck, make art", personality: "Artisan Snob" },
    ],
  },
  {
    question: "What's your ideal weather?",
    options: [
      { emoji: "⛈️", text: "Thunderstorm — electric energy", personality: "Bold Adventurer" },
      { emoji: "🌧️", text: "Gentle rain on a tin roof", personality: "Cozy Classic" },
      { emoji: "🌈", text: "Sunshine after a spring shower", personality: "Sweet Enthusiast" },
      { emoji: "🌑", text: "Clear night, full moon", personality: "Night Owl" },
      { emoji: "🌫️", text: "Misty morning, perfectly still", personality: "Artisan Snob" },
    ],
  },
  {
    question: "Pick a random object that speaks to you:",
    options: [
      { emoji: "🧭", text: "A vintage compass", personality: "Bold Adventurer" },
      { emoji: "🕯️", text: "A half-melted candle", personality: "Cozy Classic" },
      { emoji: "🎪", text: "A jar of sprinkles", personality: "Sweet Enthusiast" },
      { emoji: "🔮", text: "A crystal ball", personality: "Night Owl" },
      { emoji: "🖋️", text: "A fountain pen", personality: "Artisan Snob" },
    ],
  },
  {
    question: "You walk into a room. What do you notice first?",
    options: [
      { emoji: "🚪", text: "The exits — always know your way out", personality: "Bold Adventurer" },
      { emoji: "🛋️", text: "The coziest seat", personality: "Cozy Classic" },
      { emoji: "🎂", text: "The snack table", personality: "Sweet Enthusiast" },
      { emoji: "💡", text: "The lighting — too bright, dim it", personality: "Night Owl" },
      { emoji: "🖼️", text: "The art on the walls", personality: "Artisan Snob" },
    ],
  },
];

export const coffeeResults: CoffeeResult[] = [
  {
    personality: "Bold Adventurer",
    coffee: "Double Espresso",
    tagline: "You live for intensity",
  },
  {
    personality: "Cozy Classic",
    coffee: "Medium Roast Drip",
    tagline: "Comfort in every cup",
  },
  {
    personality: "Sweet Enthusiast",
    coffee: "Caramel Latte",
    tagline: "Life's too short for bitter",
  },
  {
    personality: "Night Owl",
    coffee: "Red Eye",
    tagline: "Sleep is optional",
  },
  {
    personality: "Artisan Snob",
    coffee: "Pour-Over, Single Origin",
    tagline: "You know what you like",
  },
];
