import { render, screen } from '@testing-library/react'
import ResultTable from '../ResultTable'

test('renders converted values', () => {
  render(<ResultTable result={{ KB: 1, MB: 0.001, B: 1024, GB: 0 }} />)

  expect(screen.getByText('KB')).toBeInTheDocument()
  expect(screen.getByText('1.00')).toBeInTheDocument()
})
