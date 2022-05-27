import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Suggestion/SuggestionsCell'

const DELETE_SUGGESTION_MUTATION = gql`
  mutation DeleteSuggestionMutation($id: String!) {
    deleteSuggestion(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const SuggestionsList = ({ suggestions }) => {
  const [deleteSuggestion] = useMutation(DELETE_SUGGESTION_MUTATION, {
    onCompleted: () => {
      toast.success('Suggestion deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete suggestion ' + id + '?')) {
      deleteSuggestion({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Suggestion</th>
            <th>Make public</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {suggestions.map((suggestion) => (
            <tr key={suggestion.id}>
              <td>{truncate(suggestion.id)}</td>
              <td>{truncate(suggestion.suggestion)}</td>
              <td>{checkboxInputTag(suggestion.makePublic)}</td>
              <td>{timeTag(suggestion.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.suggestion({ id: suggestion.id })}
                    title={'Show suggestion ' + suggestion.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSuggestion({ id: suggestion.id })}
                    title={'Edit suggestion ' + suggestion.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete suggestion ' + suggestion.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(suggestion.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SuggestionsList
