import React, { ReactElement, forwardRef } from "react";
import styled from "styled-components";
import { LayoutProps, layout } from "styled-system";
import type { DivProps } from "react-html-props";

const StyledBox = styled.div<LayoutProps>`
  ${layout}
`;

const Box = (props: DivProps): ReactElement => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};

export default Box;
