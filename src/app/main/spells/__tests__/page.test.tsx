import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import Spells from "../page";

test("spells page", () => {
  render(<Spells />);
  screen.getByText("spells");
});
