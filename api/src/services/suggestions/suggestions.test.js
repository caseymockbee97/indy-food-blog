import {
  suggestions,
  suggestion,
  createSuggestion,
  updateSuggestion,
  deleteSuggestion,
} from './suggestions'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('suggestions', () => {
  scenario('returns all suggestions', async (scenario) => {
    const result = await suggestions()

    expect(result.length).toEqual(Object.keys(scenario.suggestion).length)
  })

  scenario('returns a single suggestion', async (scenario) => {
    const result = await suggestion({ id: scenario.suggestion.one.id })

    expect(result).toEqual(scenario.suggestion.one)
  })

  scenario('creates a suggestion', async () => {
    const result = await createSuggestion({
      input: { suggestion: 'String' },
    })

    expect(result.suggestion).toEqual('String')
  })

  scenario('updates a suggestion', async (scenario) => {
    const original = await suggestion({ id: scenario.suggestion.one.id })
    const result = await updateSuggestion({
      id: original.id,
      input: { suggestion: 'String2' },
    })

    expect(result.suggestion).toEqual('String2')
  })

  scenario('deletes a suggestion', async (scenario) => {
    const original = await deleteSuggestion({ id: scenario.suggestion.one.id })
    const result = await suggestion({ id: original.id })

    expect(result).toEqual(null)
  })
})
