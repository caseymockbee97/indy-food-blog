import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_ARTICLE_MUTATION = gql`
  mutation DeleteArticleMutation($id: String!) {
    deleteArticle(id: $id) {
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

const Article = ({ article }) => {
  const [deleteArticle] = useMutation(DELETE_ARTICLE_MUTATION, {
    onCompleted: () => {
      toast.success('Article deleted')
      navigate(routes.articles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete article ' + id + '?')) {
      deleteArticle({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Article {article.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{article.id}</td>
            </tr>
            <tr>
              <th>Restaurant name</th>
              <td>{article.restaurantName}</td>
            </tr>
            <tr>
              <th>Main image url</th>
              <td>{article.mainImageURL}</td>
            </tr>
            <tr>
              <th>Article body</th>
              <td>{article.articleBody}</td>
            </tr>
            <tr>
              <th>Price level</th>
              <td>{formatEnum(article.priceLevel)}</td>
            </tr>
            <tr>
              <th>Dog friendly</th>
              <td>{checkboxInputTag(article.dogFriendly)}</td>
            </tr>
            <tr>
              <th>Outdoor seating</th>
              <td>{checkboxInputTag(article.outdoorSeating)}</td>
            </tr>
            <tr>
              <th>Bar seating</th>
              <td>{checkboxInputTag(article.barSeating)}</td>
            </tr>
            <tr>
              <th>Reservation needed</th>
              <td>{formatEnum(article.reservationNeeded)}</td>
            </tr>
            <tr>
              <th>Meal type</th>
              <td>{formatEnum(article.mealType)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(article.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editArticle({ id: article.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(article.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Article
