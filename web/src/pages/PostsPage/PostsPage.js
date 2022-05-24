import { MetaTags } from '@redwoodjs/web'
import BIMG from './tempAssets/BIMG.png'
import PIMG from './tempAssets/PIMG.jpg'

const PostsPage = () => {
  let example = [
    {
      imageURL: `url(${BIMG})`,
      title: 'MilkTooth',
      id: 1,
    },
    {
      imageURL: `url(${PIMG})`,
      title: 'NADA',
      id: 2,
    },
    {
      imageURL: `url(${BIMG})`,
      title: 'Something Really really Long',
      id: 3,
    },
    {
      imageURL: `url(${BIMG})`,
      title: 'Something Really really Long',
      id: 4,
    },
    {
      imageURL: `url(${BIMG})`,
      title: 'Something Really really Long',
      id: 5,
    },
  ]
  return (
    <>
      <MetaTags title="Posts" description="Posts page" />
      {example.map((each) => (
        <div
          tabIndex={0}
          role="link"
          onClick={() => {
            console.log(each.title)
          }}
          onKeyDown={(e) => {
            if (e.code === 'Enter') console.log(each.title)
          }}
          className="individual-post"
          style={{ backgroundImage: each.imageURL }}
          key={each.id}
        >
          <div className="overlay">
            <h2>{each.title}</h2>
            <div className="expandable"> </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PostsPage
