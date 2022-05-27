import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Article/ArticlesCell'

const DELETE_ARTICLE_MUTATION = gql`
  mutation DeleteArticleMutation($id: String!) {
    deleteArticle(id: $id) {
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

const ArticlesList = ({ articles }) => {
  const [deleteArticle] = useMutation(DELETE_ARTICLE_MUTATION, {
    onCompleted: () => {
      toast.success('Article deleted')
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
    if (confirm('Are you sure you want to delete article ' + id + '?')) {
      deleteArticle({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Restaurant name</th>
            <th>Main image url</th>
            <th>Article body</th>
            <th>Price level</th>
            <th>Dog friendly</th>
            <th>Outdoor seating</th>
            <th>Bar seating</th>
            <th>Reservation needed</th>
            <th>Meal type</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{truncate(article.id)}</td>
              <td>{truncate(article.restaurantName)}</td>
              <td>{truncate(article.mainImageURL)}</td>
              <td>{truncate(article.articleBody)}</td>
              <td>{formatEnum(article.priceLevel)}</td>
              <td>{checkboxInputTag(article.dogFriendly)}</td>
              <td>{checkboxInputTag(article.outdoorSeating)}</td>
              <td>{checkboxInputTag(article.barSeating)}</td>
              <td>{formatEnum(article.reservationNeeded)}</td>
              <td>{formatEnum(article.mealType)}</td>
              <td>{timeTag(article.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.article({ id: article.id })}
                    title={'Show article ' + article.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editArticle({ id: article.id })}
                    title={'Edit article ' + article.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete article ' + article.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(article.id)}
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

export default ArticlesList
