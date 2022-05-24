import { render } from '@redwoodjs/testing/web'

import SuggestionPage from './SuggestionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SuggestionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SuggestionPage />)
    }).not.toThrow()
  })
})
