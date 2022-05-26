import { render } from '@redwoodjs/testing/web'

import TempPostPage from './TempPostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TempPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TempPostPage />)
    }).not.toThrow()
  })
})
