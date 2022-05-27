import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import SuggestionForm from 'src/components/Suggestion/SuggestionForm'

const CREATE_SUGGESTION_MUTATION = gql`
  mutation CreateSuggestionMutation($input: CreateSuggestionInput!) {
    createSuggestion(input: $input) {
      id
    }
  }
`

const NewSuggestion = () => {
  const [createSuggestion, { loading, error }] = useMutation(
    CREATE_SUGGESTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Suggestion created')
        navigate(routes.suggestions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createSuggestion({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Suggestion</h2>
      </header>
      <div className="rw-segment-main">
        <SuggestionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSuggestion
