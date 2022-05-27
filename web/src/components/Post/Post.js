import Markdown from 'src/components/Markdown/Markdown'

const Post = ({ post }) => {
  return (
    <>
      <div className="about-article-container">
        <div className="about-article-text-container">
          <h2>{post.restaurantName}</h2>
          <img alt={post.restaurantName} src={post.mainImageURL} />
          <Markdown body={post.articleBody} />
        </div>
      </div>
    </>
  )
}

export default Post
