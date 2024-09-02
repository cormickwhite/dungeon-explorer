import { sql } from "@vercel/postgres";

import { revalidatePath } from "next/cache";

import { Spell } from "./definitions";

export async function fetchSpells() {
  try {
    const data = await sql<Spell>`SELECT * FROM spells`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  } finally {
    revalidatePath("/main/spells");
  }
}
