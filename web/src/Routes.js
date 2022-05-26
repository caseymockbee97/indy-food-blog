// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import PublicLayout from 'src/layouts/PublicLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PublicLayout}>
        <Route path="/" page={AboutPage} name="about" />
        <Route path="/suggestion" page={SuggestionPage} name="suggestion" />
        <Route path="/posts" page={PostsPage} name="posts" />
        <Route path="/temp-post" page={TempPostPage} name="tempPost" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
