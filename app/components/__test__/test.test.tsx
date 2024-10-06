import { render, screen } from "@testing-library/react";
import { expect, test, it } from "vitest";
import Test from "../Test";
test("it should render the component", () => {
  render(<Test />);
  screen.debug();
});
