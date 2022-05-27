import { Link, routes } from '@redwoodjs/router'

import Suggestions from 'src/components/Suggestion/Suggestions'

export const QUERY = gql`
  query FindSuggestions {
    suggestions {
      id
      suggestion
      makePublic
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No suggestions yet. '}
      <Link to={routes.newSuggestion()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ suggestions }) => {
  return <Suggestions suggestions={suggestions} />
}
