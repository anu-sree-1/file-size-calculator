import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SizeInput from "../SizeInput";
import { vi } from "vitest";

test("accepts user input", async () => {
  const user = userEvent.setup();
  const handleChange = vi.fn();

  render(<SizeInput value="" onChange={handleChange} />);

  await user.type(screen.getByLabelText(/file size/i), "12");
  expect(handleChange).toHaveBeenCalled();
});
