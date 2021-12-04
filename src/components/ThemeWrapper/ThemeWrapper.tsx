import React from "react";
import { ThemeProvider } from "styled-components";

import type { ReactElement, ReactNode } from "react";

import { theme } from "../../theme";

interface ThemeI {
  color?: string;
  children: ReactNode;
}
interface MakeGradientColorTonesI {
  color?: string;
}

const defaultColors = {
  black: "#000e1a",
  white: "#fff",
  blue: "#007ce0",
  navy: "#004175",
};

const makeGradientColorTones = ({ color }: MakeGradientColorTonesI) => {
  // TODO make gradient generator
  const colors = {
    black: "#000e1a",
    white: "#fff",
    blue: "#007ce0",
    navy: "#004175",
  };
  return colors;
};

const ThemeWrapper = ({ color, children }: ThemeI): ReactElement => {
  const extendedTheme = {
    ...theme,
    colors: color ? makeGradientColorTones({ color }) : defaultColors,
  };
  return <ThemeProvider theme={extendedTheme}>{children}</ThemeProvider>;
};
export default ThemeWrapper;
