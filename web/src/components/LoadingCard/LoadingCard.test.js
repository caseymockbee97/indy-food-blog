import { render } from '@redwoodjs/testing/web'

import LoadingCard from './LoadingCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoadingCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadingCard />)
    }).not.toThrow()
  })
})
