import {
  articles,
  article,
  createArticle,
  updateArticle,
  deleteArticle,
} from './articles'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('articles', () => {
  scenario('returns all articles', async (scenario) => {
    const result = await articles()

    expect(result.length).toEqual(Object.keys(scenario.article).length)
  })

  scenario('returns a single article', async (scenario) => {
    const result = await article({ id: scenario.article.one.id })

    expect(result).toEqual(scenario.article.one)
  })

  scenario('creates a article', async () => {
    const result = await createArticle({
      input: {
        restaurantName: 'String',
        mainImageURL: 'String',
        articleBody: 'String',
        priceLevel: 'LOW',
        dogFriendly: true,
        outdoorSeating: true,
        barSeating: true,
        reservationNeeded: 'NO',
        mealType: 'BREAKFAST',
      },
    })

    expect(result.restaurantName).toEqual('String')
    expect(result.mainImageURL).toEqual('String')
    expect(result.articleBody).toEqual('String')
    expect(result.priceLevel).toEqual('LOW')
    expect(result.dogFriendly).toEqual(true)
    expect(result.outdoorSeating).toEqual(true)
    expect(result.barSeating).toEqual(true)
    expect(result.reservationNeeded).toEqual('NO')
    expect(result.mealType).toEqual('BREAKFAST')
  })

  scenario('updates a article', async (scenario) => {
    const original = await article({ id: scenario.article.one.id })
    const result = await updateArticle({
      id: original.id,
      input: { restaurantName: 'String2' },
    })

    expect(result.restaurantName).toEqual('String2')
  })

  scenario('deletes a article', async (scenario) => {
    const original = await deleteArticle({ id: scenario.article.one.id })
    const result = await article({ id: original.id })

    expect(result).toEqual(null)
  })
})
