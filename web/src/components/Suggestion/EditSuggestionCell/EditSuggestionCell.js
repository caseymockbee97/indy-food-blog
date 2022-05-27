import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import SuggestionForm from 'src/components/Suggestion/SuggestionForm'

export const QUERY = gql`
  query EditSuggestionById($id: String!) {
    suggestion: suggestion(id: $id) {
      id
      suggestion
      makePublic
      createdAt
    }
  }
`
const UPDATE_SUGGESTION_MUTATION = gql`
  mutation UpdateSuggestionMutation(
    $id: String!
    $input: UpdateSuggestionInput!
  ) {
    updateSuggestion(id: $id, input: $input) {
      id
      suggestion
      makePublic
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ suggestion }) => {
  const [updateSuggestion, { loading, error }] = useMutation(
    UPDATE_SUGGESTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Suggestion updated')
        navigate(routes.suggestions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateSuggestion({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Suggestion {suggestion.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SuggestionForm
          suggestion={suggestion}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
