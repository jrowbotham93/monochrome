import React, { forwardRef } from 'react'
import type { ElementType, ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef
} from '../../globals/utils/types'

interface Props {
  children: ReactNode
  color?: 'red' | 'green' | 'black'
  font?: 'thin' | 'regular' | 'heavy'
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
}
type TextProps<C extends ElementType> = PolymorphicComponentPropsWithRef<
  C,
  Props
>

type TextComponent = <C extends ElementType = 'span'>(
  props: TextProps<C>
) => ReactElement | null

const StyledText = styled.span`
  font: ${({ theme }) => theme.font};
  size: ${({ theme }) => theme.size};
  color: ${({ theme }) => theme.color};
`

const Text: TextComponent = forwardRef(
  <C extends ElementType = 'span'>(
    { as, children, font, size, color, ...other }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span'
    return (
      <StyledText as={Component as never} {...other} ref={ref}>
        {children}
      </StyledText>
    )
  }
)

export default Text
