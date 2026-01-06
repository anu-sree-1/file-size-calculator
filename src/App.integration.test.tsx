import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("user can type a value, select a unit, and see results", async () => {
  const user = userEvent.setup();
  render(<App />);

  // Type a value
  const input = screen.getByLabelText(/file size/i);
  await user.type(input, "2048");

  // Change unit to KB
  const select = screen.getByLabelText(/unit/i);
  await user.selectOptions(select, "KB");

  // Check rendered results
  expect(screen.getByText("B")).toBeInTheDocument();
  expect(screen.getByText("2097152.00")).toBeInTheDocument(); // 2048 KB → 2097152 B
  const kbs = screen.getAllByText("KB");
  expect(kbs.length).toBeGreaterThan(0);
  expect(screen.getByText("2048.00")).toBeInTheDocument(); // 2048 KB
  const mbs = screen.getAllByText("MB");
  expect(mbs.length).toBeGreaterThan(0);
  expect(screen.getByText("2.00")).toBeInTheDocument(); // 2048 KB → 2.00 MB
  const gbs = screen.getAllByText("GB");
  expect(gbs.length).toBeGreaterThan(0);
  expect(screen.getByText("0.00")).toBeInTheDocument(); // 2048 KB → 0.00 GB (rounded)
});
