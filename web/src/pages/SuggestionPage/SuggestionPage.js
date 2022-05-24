import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'

const SuggestionPage = () => {
  const [value, setValue] = useState('')

  const maxLength = 300

  return (
    <>
      <MetaTags title="Suggestion" description="Suggestion page" />

      <div className="suggestion-container">
        <div className="suggestion-text-container">
          <h2>Where should we visit next?</h2>
          <textarea
            className="width-90"
            maxLength={maxLength}
            required={true}
            placeholder="I think you should go to..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="width-90">
            <p className="character-counter">
              {value.length} / {maxLength}
            </p>
          </div>
          <p className="button width-90">Submit</p>
        </div>
      </div>
    </>
  )
}

export default SuggestionPage
