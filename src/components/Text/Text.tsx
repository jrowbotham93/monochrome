import React from "react";
import type { ElementType, ComponentPropsWithoutRef } from "react";

import styled from "styled-components";

interface Props<C extends ElementType> {
  as?: C;
  children: React.ReactNode;
  color?: "black";
  font?: "thin" | "regular" | "heavy";
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
}

type TextProps<C extends ElementType> = Props<C> &
  // add style, className, all of the ARIA tags, htmlFor and more.
  Omit<ComponentPropsWithoutRef<C>, keyof Props<C>>;

const Text = <C extends ElementType = "span">({
  as,
  children,
  font,
  size,
  color,
  ...other
}: TextProps<C>) => {
  const Component = as || "span";
  return <Component {...other}>{children}</Component>;
};
export default Text;
