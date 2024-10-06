import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import Test from "../Test";
test("it should render the component", () => {
  render(<Test />);
  screen.debug();
});
