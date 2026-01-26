import { NextResponse } from "next/server";

export type Mood = {
  id: number;
  name: string;
  emoji: string;
};

const moods: Mood[] = [
  {
    id: 1,
    name: "Happy",
    emoji: "😊",
  },
  {
    id: 2,
    name: "Sad",
    emoji: "😢",
  },
  {
    id: 3,
    name: "Angry",
    emoji: "😠",
  },
  {
    id: 4,
    name: "Stressed",
    emoji: "😫",
  },
  {
    id: 5,
    name: "Anxious",
    emoji: "😰",
  },
  {
    id: 6,
    name: "Depressed",
    emoji: "😞",
  },
  {
    id: 7,
    name: "Exhausted",
    emoji: "😫",
  },
  {
    id: 8,
    name: "Relaxed",
    emoji: "🤗",
  },
  {
    id: 9,
    name: "Energetic",
    emoji: "😄",
  },
  {
    id: 10,
    name: "Productive",
    emoji: "💪",
  },
];

export async function GET(request: Request) {
  return NextResponse.json(moods);
}
