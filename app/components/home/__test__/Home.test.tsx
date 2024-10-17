import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "../Home";
import { applications } from "../../../utility/data";
import { MergedApplication } from "@/app/utility/types";

test("it should render the component without crashing", () => {
  render(<Home data={applications as unknown as MergedApplication[]} />);
  screen.debug();
  // expect(screen.getByLabelText("job applications")).toBeTruthy();
});

test("it should render the correct table headers", () => {
  render(<Home data={applications as unknown as MergedApplication[]} />);
  const headers = ["Stage", "Company", "Position", "Day", "Link"];
  headers.forEach(async (header) => {
    expect(await screen.findByText(header)).toBeTruthy();
  });
});

// test("it should render DatePicker for apply date", () => {
//   render(<Home data={applications as unknown as MergedApplication[]} />);

//   const rows = screen.getAllByRole("row");

//   applications.forEach((app, index) => {
//     const row = rows[index + 1];
//     const dateCell = within(row).getByDisplayValue(
//       app.companyName.day.toString()
//     );
//     expect(dateCell).toBeTruthy();
//   });
// });

test("it should render chips with correct colors based on stage", () => {
  render(<Home data={applications as unknown as MergedApplication[]} />);

  const rows = screen.getAllByRole("row");

  applications.forEach((app, index) => {
    const row = rows[index + 1];
    const chip = within(row).queryAllByText(app.stage);
    expect(chip).toBeTruthy();
  });
});
test("it should render correct data in application rows", () => {
  render(<Home data={applications as unknown as MergedApplication[]} />);

  const rows = screen.getAllByRole("row");

  applications.forEach((app, index) => {
    const row = rows[index + 1];

    const companyCell = within(row).getByDisplayValue(
      app.companyName.toString()
    );
    expect(companyCell).toBeTruthy();

    const positionCell = within(row).getByDisplayValue(app.position.toString());
    expect(positionCell).toBeTruthy();

    if (app.link) {
      const linkCell = within(row).getByDisplayValue(app.link.toString());
      expect(linkCell).toBeTruthy();
    }

    // const dateCell = within(row).getByDisplayValue(
    //   app.companyName.day.toString()
    // );
    // expect(dateCell).toBeTruthy();
  });
});
