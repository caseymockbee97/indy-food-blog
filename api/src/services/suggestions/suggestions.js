import { db } from 'src/lib/db'

export const suggestions = () => {
  return db.suggestion.findMany()
}

export const suggestion = ({ id }) => {
  return db.suggestion.findUnique({
    where: { id },
  })
}

export const createSuggestion = ({ input }) => {
  return db.suggestion.create({
    data: input,
  })
}

export const updateSuggestion = ({ id, input }) => {
  return db.suggestion.update({
    data: input,
    where: { id },
  })
}

export const deleteSuggestion = ({ id }) => {
  return db.suggestion.delete({
    where: { id },
  })
}
