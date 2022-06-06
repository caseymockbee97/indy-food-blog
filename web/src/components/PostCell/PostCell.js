import Post from 'src/components/Post/Post'
import LoadingCard from 'src/components/LoadingCard/LoadingCard'

export const QUERY = gql`
  query FindPostQuery($id: String!) {
    post: article(id: $id) {
      id
      restaurantName
      mainImageURL
      articleBody
      priceLevel
      dogFriendly
      outdoorSeating
      barSeating
      reservationNeeded
      mealType
      createdAt
    }
  }
`

export const Loading = () => <LoadingCard />

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ post }) => {
  return <Post post={post} />
}
