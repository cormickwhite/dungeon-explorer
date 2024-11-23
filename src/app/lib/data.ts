import { sql } from "@vercel/postgres";

import { revalidatePath } from "next/cache";

import { Character, Spell } from "./definitions";

export async function fetchSpells(query: any) {
  const { characterClass, spellLevel } = query;

  if (characterClass && spellLevel) {
    try {
      const data = await sql<Spell>`
      SELECT *
      FROM spells
      WHERE
        level = ${spellLevel} AND
        ${characterClass} = ANY(spells.class);
      `;

      return data.rows;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch spell data.");
    } finally {
      revalidatePath("/main/spells");
    }
  } else if (characterClass) {
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
  } else if (spellLevel) {
    try {
      const data = await sql<Spell>`
      SELECT *
      FROM spells
      WHERE level = ${spellLevel}
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
