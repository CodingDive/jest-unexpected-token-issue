import React from "react";
import "styled-components/macro";

export const StyledCompCss = ({ children }) => (
  <button
    css={`
      font-size: 1.3rem;
    `}
  >
    {children}
  </button>
);
