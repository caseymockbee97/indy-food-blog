// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'
import SuggestionsLayout from 'src/layouts/SuggestionsLayout'
import ArticlesLayout from 'src/layouts/ArticlesLayout'

import PublicLayout from 'src/layouts/PublicLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/admin" page={LoginPage} name="login" />
      {/* <Route path="/admin/signup" page={SignupPage} name="signup" /> */}
      <Route path="/admin/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/admin/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="about">
        <Set wrap={SuggestionsLayout}>
          <Route path="/admin/suggestions/new" page={SuggestionNewSuggestionPage} name="newSuggestion" />
          <Route path="/admin/suggestions/{id}/edit" page={SuggestionEditSuggestionPage} name="editSuggestion" />
          <Route path="/admin/suggestions/{id}" page={SuggestionSuggestionPage} name="suggestion" />
          <Route path="/admin/suggestions" page={SuggestionSuggestionsPage} name="suggestions" />
        </Set>
        <Set wrap={ArticlesLayout}>
          <Route path="/admin/articles/new" page={ArticleNewArticlePage} name="newArticle" />
          <Route path="/admin/articles/{id}/edit" page={ArticleEditArticlePage} name="editArticle" />
          <Route path="/admin/articles/{id}" page={ArticleArticlePage} name="article" />
          <Route path="/admin/articles" page={ArticleArticlesPage} name="articles" />
        </Set>
      </Private>
      <Set wrap={PublicLayout}>
        <Route path="/" page={AboutPage} name="about" />
        <Route path="/suggestion" page={SuggestionPage} name="suggestion" />
        <Route path="/post/{id}" page={PostPage} name="post" />
        <Route path="/posts" page={PostsPage} name="posts" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
