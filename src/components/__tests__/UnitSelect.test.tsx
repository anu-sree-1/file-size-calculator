import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UnitSelect from "../UnitSelect";
import { vi } from "vitest";

test("changes unit", async () => {
  const user = userEvent.setup();
  const handleChange = vi.fn();

  render(<UnitSelect unit="KB" onChange={handleChange} />);

  await user.selectOptions(screen.getByLabelText(/unit/i), "MB");
  expect(handleChange).toHaveBeenCalledWith("MB");
});
