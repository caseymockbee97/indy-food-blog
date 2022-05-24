import { MetaTags } from '@redwoodjs/web'

const SuggestionPage = () => {
  return (
    <>
      <MetaTags title="Suggestion" description="Suggestion page" />
      <div className="suggestion-container">
        <div className="suggestion-text-container">
          <h2>Where should we visit next?</h2>
          <textarea />
          <p className="button">Submit</p>
        </div>
      </div>
    </>
  )
}

export default SuggestionPage
