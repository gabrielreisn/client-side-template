import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "../src/routes/LoginForm";

describe("App", () => {
  it("renders headline", () => {
    render(<Login />);
    const headline = screen.getByText(/submit/i);
    expect(headline).toBeDefined();
  });
});
