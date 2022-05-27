import { useEffect, useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

const Markdown = ({ body }) => {
  const [htmlBody, setHtmlBody] = useState(``)

  useEffect(() => {
    setHtmlBody(() => {
      try {
        return marked.parse(body)
      } catch {
        return '<p>OOPS looks like there was an error</p>'
      }
    })
  }, [body])

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(htmlBody),
      }}
    ></div>
  )
}

export default Markdown
