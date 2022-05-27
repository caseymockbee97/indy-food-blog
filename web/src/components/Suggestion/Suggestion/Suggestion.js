import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_SUGGESTION_MUTATION = gql`
  mutation DeleteSuggestionMutation($id: String!) {
    deleteSuggestion(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Suggestion = ({ suggestion }) => {
  const [deleteSuggestion] = useMutation(DELETE_SUGGESTION_MUTATION, {
    onCompleted: () => {
      toast.success('Suggestion deleted')
      navigate(routes.suggestions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete suggestion ' + id + '?')) {
      deleteSuggestion({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Suggestion {suggestion.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{suggestion.id}</td>
            </tr>
            <tr>
              <th>Suggestion</th>
              <td>{suggestion.suggestion}</td>
            </tr>
            <tr>
              <th>Make public</th>
              <td>{checkboxInputTag(suggestion.makePublic)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(suggestion.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSuggestion({ id: suggestion.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(suggestion.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Suggestion
