import React from 'react'
import styled from 'styled-components'
import { flexbox } from 'styled-system'

import type { ReactElement, ReactNode } from 'react'
import type { FlexboxProps } from 'styled-system'

import { Box } from '../Box'

interface BoxInterface {
  children: ReactNode
}
const StyledBox = styled(Box)<FlexboxProps>`
  ${flexbox}
`
const Flex = ({ children }: BoxInterface): ReactElement => {
  return <StyledBox>{children}</StyledBox>
}

export default Flex
