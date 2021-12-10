import React, { ReactElement, ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { LayoutProps, layout } from 'styled-system'

type BoxProps = ComponentPropsWithoutRef<'div'> & LayoutProps

const StyledBox = styled.div<BoxProps>`
  ${layout}
`

const Box = (props: BoxProps): ReactElement => {
  return <StyledBox {...props}>{props.children}</StyledBox>
}

export default Box
