import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import TheInput from "../components/TheInput/TheInput";

describe("TheInput", () => {
  const setup = () => {
    const utils = render(<TheInput />);
    const input = utils.getByTestId("the-input").querySelector("input");
    return {
      input,
      ...utils,
    };
  };
  test("renders TheInput component", () => {
    setup();
    expect(screen.getByTestId("the-input")).toBeInTheDocument();
  });

  test("input value should be change correctly", () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: { value: "vue" },
    });
    expect(input.value).toBe("vue");
  });
});
