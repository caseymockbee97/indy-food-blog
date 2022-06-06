import { Link, routes } from '@redwoodjs/router'
import LoadingCard from 'src/components/LoadingCard/LoadingCard'

export const QUERY = gql`
  query PostsQuery {
    posts: articles {
      id
      restaurantName
      mainImageURL
    }
  }
`

export const Loading = () => <LoadingCard />

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }) => {
  return (
    <>
      {posts.map((item) => {
        return (
          <Link key={item.id} to={routes.post({ id: item.id })}>
            <div
              className="post-card"
              style={{ backgroundImage: `url(${item.mainImageURL})` }}
            >
              <div className="overlay">
                <h2>{item.restaurantName}</h2>
                <div className="expandable"></div>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}
