import { sql } from "@vercel/postgres";

import { revalidatePath } from "next/cache";

import { Character, Spell } from "./definitions";

export async function fetchSpells(query: any) {
  const { characterClass } = query;

  if (characterClass) {
    try {
      const data = await sql<Spell>`
      SELECT *
      FROM spells
      WHERE ${characterClass} = ANY(spells.class);
      `;

      return data.rows;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch spell data.");
    } finally {
      revalidatePath("/main/spells");
    }
  } else {
    try {
      const data = await sql<Spell>`
      SELECT *
      FROM spells
      `;

      return data.rows;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch spell data.");
    } finally {
      revalidatePath("/main/spells");
    }
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

// WHERE ${characterClass} = ANY(spells.class)
