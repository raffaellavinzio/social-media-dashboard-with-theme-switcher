import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'

import App from "../components/App"
import FontStyles from "../components/FontStyles"
import GlobalStyles from "../components/GlobalStyles"

import {ThemeContext} from "../context"

const IndexPage = ({ data }) => {

  const [theme, setTheme] = React.useState('dark')

  return (
  <>
    <FontStyles />
    <GlobalStyles />
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <App />
    </ThemeContext.Provider>
  </>
)
}


export default IndexPage

export const query = graphql`
  query AppQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
