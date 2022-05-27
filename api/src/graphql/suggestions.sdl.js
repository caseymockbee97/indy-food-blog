export const schema = gql`
  type Suggestion {
    id: String!
    suggestion: String!
    makePublic: Boolean!
    createdAt: DateTime!
  }

  type Query {
    suggestions: [Suggestion!]! @requireAuth
    suggestion(id: String!): Suggestion @requireAuth
  }

  input CreateSuggestionInput {
    suggestion: String!
    makePublic: Boolean!
  }

  input UpdateSuggestionInput {
    suggestion: String
    makePublic: Boolean
  }

  type Mutation {
    createSuggestion(input: CreateSuggestionInput!): Suggestion! @skipAuth
    updateSuggestion(id: String!, input: UpdateSuggestionInput!): Suggestion!
      @requireAuth
    deleteSuggestion(id: String!): Suggestion! @requireAuth
  }
`
