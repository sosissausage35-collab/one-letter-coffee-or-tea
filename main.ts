// One Letter: Coffee or Tea — the entry answers "A" (coffee).
//
// Why coffee: the morning cup is the day's first real decision, and it
// lands louder than tea — dark, hot, and already working before the
// kettle has even boiled. That is the fuller, more alive answer.

import { mkdirSync, writeFileSync } from "node:fs";

type Drink = "coffee" | "tea";

// How loudly each drink wakes the day: jolt plus aroma, out of 5.
function morningScore(drink: Drink): number {
  const jolt: Record<Drink, number> = { coffee: 3, tea: 1 };
  const aroma: Record<Drink, number> = { coffee: 2, tea: 1 };
  return jolt[drink] + aroma[drink];
}

// The louder drink takes the letter: A for coffee, B for tea.
function chooseLetter(): "A" | "B" {
  const coffeeWins = morningScore("coffee") > morningScore("tea");
  return coffeeWins ? "A" : "B";
}

const letter = chooseLetter();
if (letter.length !== 1) {
  throw new Error("entry must be exactly one letter");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
