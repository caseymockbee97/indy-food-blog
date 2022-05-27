import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const SuggestionForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.suggestion?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="suggestion"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Suggestion
        </Label>

        <TextField
          name="suggestion"
          defaultValue={props.suggestion?.suggestion}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="suggestion" className="rw-field-error" />

        <Label
          name="makePublic"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Make public
        </Label>

        <CheckboxField
          name="makePublic"
          defaultChecked={props.suggestion?.makePublic}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="makePublic" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SuggestionForm
