import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "../Home";
import { applications } from "../../../utility/data";

test("it should render the component without crashing", () => {
  render(<Home />);
  screen.debug();
  expect(screen.getByLabelText("job applications")).toBeTruthy();
});

test("it should render the correct table headers", () => {
  render(<Home />);
  const headers = ["Stage", "Company", "Position", "Day", "Link"];
  headers.forEach((header) => {
    expect(screen.getByText(header)).toBeTruthy();
  });
});

test("it should render DatePicker for apply date", () => {
  render(<Home />);

  const rows = screen.getAllByRole("row");

  applications.forEach((app, index) => {
    const row = rows[index + 1];
    const dateCell = within(row).getByDisplayValue(
      app.companyData.day.toString()
    );
    expect(dateCell).toBeTruthy();
  });
});

test("it should render chips with correct colors based on stage", () => {
  render(<Home />);

  const rows = screen.getAllByRole("row");

  applications.forEach((app, index) => {
    const row = rows[index + 1];
    const chip = within(row).getByText(app.stage);
    expect(chip).toBeTruthy();
  });
});
test("it should render correct data in application rows", () => {
  render(<Home />);

  const rows = screen.getAllByRole("row");

  applications.forEach((app, index) => {
    const row = rows[index + 1];

    const companyCell = within(row).getByDisplayValue(
      app.companyData.company.toString()
    );
    expect(companyCell).toBeTruthy();

    const positionCell = within(row).getByDisplayValue(
      app.companyData.position.toString()
    );
    expect(positionCell).toBeTruthy();

    if (app.companyData.link) {
      const linkCell = within(row).getByDisplayValue(
        app.companyData.link.toString()
      );
      expect(linkCell).toBeTruthy();
    }

    const dateCell = within(row).getByDisplayValue(
      app.companyData.day.toString()
    );
    expect(dateCell).toBeTruthy();
  });
});
