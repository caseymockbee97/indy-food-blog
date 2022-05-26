import { Link, routes } from '@redwoodjs/router'
import { useEffect, useState } from 'react'
import { MetaTags } from '@redwoodjs/web'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
// let marked = require('marked')

const exampleMD = `### Casey's Test

![Image Alt Text](https://randomwordgenerator.com/img/picture-generator/52e5dc434d55a414f1dc8460962e33791c3ad6e04e5074417c2e7dd19f4bcd_640.jpg)

Eu in culpa ex elit duis proident aute deserunt eu in consequat ipsum eiusmod. Duis tempor proident velit laboris aute qui quis culpa irure. Non in ex cillum proident laborum dolore ut dolor. Sit consectetur officia reprehenderit commodo laborum reprehenderit veniam qui pariatur dolore. Irure ullamco ut ipsum nisi enim ea. Proident Lorem pariatur pariatur velit nostrud dolore incididunt culpa amet eiusmod pariatur laborum dolore.

### Casey's Test

![Image Alt Text](https://randomwordgenerator.com/img/picture-generator/52e5dc434d55a414f1dc8460962e33791c3ad6e04e5074417c2e7dd19f4bcd_640.jpg)

Eu in culpa ex elit duis proident aute deserunt eu in consequat ipsum eiusmod. Duis tempor proident velit laboris aute qui quis culpa irure. Non in ex cillum proident laborum dolore ut dolor. Sit consectetur officia reprehenderit commodo laborum reprehenderit veniam qui pariatur dolore. Irure ullamco ut ipsum nisi enim ea. Proident Lorem pariatur pariatur velit nostrud dolore incididunt culpa amet eiusmod pariatur laborum dolore.`

const TempPostPage = () => {
  const [htmlBody, sethtmlBody] = useState(`<p>loading...</p>`)

  useEffect(() => {
    sethtmlBody(() => {
      try {
        return marked.parse(exampleMD)
      } catch {
        return '<p>OOPS looks like there was an error</p>'
      }
    })
  }, [])

  return (
    <>
      <MetaTags title="TempPost" description="TempPost page" />
      <div className="about-article-container">
        <div className="about-article-text-container">
          <h2>Nada</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.eatdrinknada.com/location/indianapolis/"
          >
            Find them here!
          </a>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(htmlBody),
            }}
          ></div>
        </div>
      </div>
      {/* <h1>TempPostPage</h1>
      <p>
        Find me in <code>./web/src/pages/TempPostPage/TempPostPage.js</code>
      </p>
      <p>
        My default route is named <code>tempPost</code>, link to me with `
        <Link to={routes.tempPost()}>TempPost</Link>`
      </p> */}
    </>
  )
}

export default TempPostPage
