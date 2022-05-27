export const schema = gql`
  type Article {
    id: String!
    restaurantName: String!
    mainImageURL: String!
    articleBody: String!
    priceLevel: Price!
    dogFriendly: Boolean!
    outdoorSeating: Boolean!
    barSeating: Boolean!
    reservationNeeded: Reservation!
    mealType: Meal!
    createdAt: DateTime!
  }

  enum Price {
    LOW
    MEDIUM
    HIGH
  }
  enum Reservation {
    NO
    MAYBE
    DEFINITELY
  }
  enum Meal {
    BREAKFAST
    BRUNCH
    LUNCH
    TEA
    DINNER
    DESSERT
    DRINKS
  }

  type Query {
    articles: [Article!]! @skipAuth
    article(id: String!): Article @skipAuth
  }

  input CreateArticleInput {
    restaurantName: String!
    mainImageURL: String!
    articleBody: String!
    priceLevel: Price!
    dogFriendly: Boolean!
    outdoorSeating: Boolean!
    barSeating: Boolean!
    reservationNeeded: Reservation!
    mealType: Meal!
  }

  input UpdateArticleInput {
    restaurantName: String
    mainImageURL: String
    articleBody: String
    priceLevel: Price
    dogFriendly: Boolean
    outdoorSeating: Boolean
    barSeating: Boolean
    reservationNeeded: Reservation
    mealType: Meal
  }

  type Mutation {
    createArticle(input: CreateArticleInput!): Article! @requireAuth
    updateArticle(id: String!, input: UpdateArticleInput!): Article!
      @requireAuth
    deleteArticle(id: String!): Article! @requireAuth
  }
`
