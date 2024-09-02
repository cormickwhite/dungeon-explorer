import { sql } from "@vercel/postgres";

import { revalidatePath } from "next/cache";

import { Character, Spell } from "./definitions";

export async function fetchSpells() {
  try {
    const data = await sql<Spell>`SELECT * FROM spells`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch spell data.");
  } finally {
    revalidatePath("/main/spells");
  }
}

export async function fetchCharacters() {
  try {
    const data = await sql<Character>`SELECT * FROM characters`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch character data.");
  } finally {
    revalidatePath("/main/characters");
  }
}
