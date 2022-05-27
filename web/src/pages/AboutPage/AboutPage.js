import { MetaTags } from '@redwoodjs/web'
// import squirrelIMG from './Assets/squirrel.jpg'
// import squirrelIMGsquare from './Assets/squirrel-square.jpg'
import Markdown from 'src/components/Markdown/Markdown'
import aboutMD from './Assets/aboutMD'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <div className="about-article-container">
        <div className="about-article-text-container">
          <h2>About</h2>
          <Markdown body={aboutMD} />
        </div>
      </div>
    </>
  )
}

export default AboutPage
