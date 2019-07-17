import React from "react";
import { render } from "@testing-library/react";
import { StyledComp } from "./StyledComponent";
import { StyledCompMacro } from "./StyledComponentMacro";
import { StyledCompCss } from "./StyledComponentCssProp";

it("renders normal button", () => {
  render(<button>Test</button>);
});

it("renders whale-ui checkbox", () => {
  render(<button>Test</button>);
});

it("renders styled component", () => {
  render(<StyledComp>Test</StyledComp>);
});

it("renders styled component macro", () => {
  render(<StyledCompMacro>Test</StyledCompMacro>);
});

it("renders component with styled component css prop", () => {
  render(<StyledCompCss>Test</StyledCompCss>);
});
