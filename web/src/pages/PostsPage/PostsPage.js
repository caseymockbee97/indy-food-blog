import { MetaTags } from '@redwoodjs/web'
import PostsCell from 'src/components/PostsCell'

const PostsPage = () => {
  return (
    <>
      <MetaTags title="Posts" description="Posts page" />

      <PostsCell />
    </>
  )
}

export default PostsPage
