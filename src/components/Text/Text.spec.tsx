import React from 'react'
import { render, screen } from '@testing-library/react'

import { Text } from '../Text'

describe('Text', () => {
  it('should render correct html elements with correct h1 props', async () => {
    render(<Text as="h1">Text</Text>)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Text' })
    ).toBeInTheDocument()
  })
  it('should render correct html elements with correct span props', async () => {
    render(<Text>Text</Text>)
    expect(screen.getByText('Text')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
})
