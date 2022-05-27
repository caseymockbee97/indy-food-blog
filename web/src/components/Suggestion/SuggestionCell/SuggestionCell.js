import Suggestion from 'src/components/Suggestion/Suggestion'

export const QUERY = gql`
  query FindSuggestionById($id: String!) {
    suggestion: suggestion(id: $id) {
      id
      suggestion
      makePublic
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Suggestion not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ suggestion }) => {
  return <Suggestion suggestion={suggestion} />
}
