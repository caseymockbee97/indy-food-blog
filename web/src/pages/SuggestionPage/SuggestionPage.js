import {
  Form,
  TextAreaField,
  Submit,
  Label,
  FieldError,
  FormError,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { useState } from 'react'

const CREATE_SUGGESTION = gql`
  mutation createSuggestionMutation($input: CreateSuggestionInput!) {
    createSuggestion(input: $input) {
      id
      makePublic
    }
  }
`

const SuggestionPage = () => {
  const [create, { loading, error }] = useMutation(CREATE_SUGGESTION, {
    onCompleted: () => {
      setValue('')
      setIsSent(true)
    },
  })

  const onSubmit = (data) => {
    data.makePublic = false
    create({ variables: { input: data } })
  }

  const [value, setValue] = useState('')
  const [isSent, setIsSent] = useState(false)

  const MAX_LENGTH = 300

  return (
    <>
      <MetaTags title="Suggestion" description="Suggestion page" />

      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <div className="suggestion-container">
          <div className="suggestion-text-container">
            <FormError error={error} />
            {isSent ? (
              <div className="width-90">
                <p style={{ textAlign: 'center' }}>
                  Thank you for your Suggestion!
                </p>
              </div>
            ) : (
              <>
                <Label htmlFor="suggestion">
                  <h2>Where should we visit next?</h2>
                </Label>
                <TextAreaField
                  name="suggestion"
                  className="width-90"
                  maxLength={MAX_LENGTH}
                  required={true}
                  placeholder="I think you should go to..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <FieldError name="suggestion" />
                <div className="width-90">
                  <p className="character-counter">
                    {value.length} / {MAX_LENGTH}
                  </p>
                </div>
                <Submit
                  disabled={loading || isSent}
                  className="button width-90"
                >
                  Submit
                </Submit>
              </>
            )}
          </div>
        </div>
      </Form>
    </>
  )
}

export default SuggestionPage
