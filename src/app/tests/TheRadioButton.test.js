import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import TheRadioButton from "../components/TheRadioButton/TheRadioButton";

import { langList } from "../constants";

describe("TheRadioButton", () => {
  const setup = () => {
    const utils = render(<TheRadioButton list={langList} />);
    const radioButton = utils
      .getByTestId("the-radio-button")
      .querySelector("label input");
    return {
      radioButton,
      ...utils,
    };
  };
  test("renders TheRadioButton component", () => {
    const { radioButton } = setup();
    expect(screen.getByTestId("the-radio-button")).toBeInTheDocument();
  });

  test("input radio should change", () => {
    const { radioButton } = setup();
    fireEvent.change(radioButton, { target: { value: "Javascript" } });
    expect(radioButton.value).toBe("Javascript");
  });
});
