import {
  Form,
  FormError,
  FieldError,
  Label,
  TextAreaField,
  TextField,
  RadioField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'
import Markdown from 'src/components/Markdown/Markdown'
import { useState } from 'react'

const ArticleForm = (props) => {
  const [articleBody, setArticleBody] = useState(props.article?.body)
  const [restaurantName, setRestaurantName] = useState(
    props.article?.restaurantName
  )
  const [mainImageUrl, setMainImageUrl] = useState(props.article?.mainImageURL)

  const onSubmit = (data) => {
    props.onSave(data, props?.article?.id)
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
          name="restaurantName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Restaurant name
        </Label>

        <TextField
          name="restaurantName"
          defaultValue={props.article?.restaurantName}
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="restaurantName" className="rw-field-error" />

        <Label
          name="mainImageURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Main image url
        </Label>

        <TextField
          name="mainImageURL"
          defaultValue={props.article?.mainImageURL}
          value={mainImageUrl}
          onChange={(e) => setMainImageUrl(e.target.value)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="mainImageURL" className="rw-field-error" />

        <Label
          name="articleBody"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Article body
        </Label>

        <TextAreaField
          name="articleBody"
          defaultValue={props.article?.articleBody}
          value={articleBody}
          onChange={(e) => setArticleBody(e.target.value)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        {/* Article Preview */}
        <div className="about-article-container">
          <div className="about-article-text-container">
            <h2>{restaurantName}</h2>
            <img alt={restaurantName} src={mainImageUrl} />
            <Markdown body={articleBody} />
          </div>
        </div>

        <FieldError name="articleBody" className="rw-field-error" />

        <Label
          name="priceLevel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price level
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-priceLevel-0"
            name="priceLevel"
            defaultValue="LOW"
            defaultChecked={props.article?.priceLevel?.includes('LOW')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Low</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-priceLevel-1"
            name="priceLevel"
            defaultValue="MEDIUM"
            defaultChecked={props.article?.priceLevel?.includes('MEDIUM')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Medium</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-priceLevel-2"
            name="priceLevel"
            defaultValue="HIGH"
            defaultChecked={props.article?.priceLevel?.includes('HIGH')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>High</div>
        </div>

        <FieldError name="priceLevel" className="rw-field-error" />

        <Label
          name="dogFriendly"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Dog friendly
        </Label>

        <CheckboxField
          name="dogFriendly"
          defaultChecked={props.article?.dogFriendly}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="dogFriendly" className="rw-field-error" />

        <Label
          name="outdoorSeating"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Outdoor seating
        </Label>

        <CheckboxField
          name="outdoorSeating"
          defaultChecked={props.article?.outdoorSeating}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="outdoorSeating" className="rw-field-error" />

        <Label
          name="barSeating"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bar seating
        </Label>

        <CheckboxField
          name="barSeating"
          defaultChecked={props.article?.barSeating}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="barSeating" className="rw-field-error" />

        <Label
          name="reservationNeeded"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reservation needed
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-reservationNeeded-0"
            name="reservationNeeded"
            defaultValue="NO"
            defaultChecked={props.article?.reservationNeeded?.includes('NO')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>No</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-reservationNeeded-1"
            name="reservationNeeded"
            defaultValue="MAYBE"
            defaultChecked={props.article?.reservationNeeded?.includes('MAYBE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Maybe</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-reservationNeeded-2"
            name="reservationNeeded"
            defaultValue="DEFINITELY"
            defaultChecked={props.article?.reservationNeeded?.includes(
              'DEFINITELY'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Definitely</div>
        </div>

        <FieldError name="reservationNeeded" className="rw-field-error" />

        <Label
          name="mealType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Meal type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-mealType-0"
            name="mealType"
            defaultValue="BREAKFAST"
            defaultChecked={props.article?.mealType?.includes('BREAKFAST')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Breakfast</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-mealType-1"
            name="mealType"
            defaultValue="BRUNCH"
            defaultChecked={props.article?.mealType?.includes('BRUNCH')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Brunch</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-mealType-2"
            name="mealType"
            defaultValue="LUNCH"
            defaultChecked={props.article?.mealType?.includes('LUNCH')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Lunch</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-mealType-3"
            name="mealType"
            defaultValue="TEA"
            defaultChecked={props.article?.mealType?.includes('TEA')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Tea</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-mealType-4"
            name="mealType"
            defaultValue="DINNER"
            defaultChecked={props.article?.mealType?.includes('DINNER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Dinner</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-mealType-5"
            name="mealType"
            defaultValue="DESSERT"
            defaultChecked={props.article?.mealType?.includes('DESSERT')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Dessert</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="article-mealType-6"
            name="mealType"
            defaultValue="DRINKS"
            defaultChecked={props.article?.mealType?.includes('DRINKS')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Drinks</div>
        </div>

        <FieldError name="mealType" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ArticleForm
