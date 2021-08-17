import React from "react"
import styled from "styled-components/macro"

import Dashboard from "../Dashboard"

import { ThemeContext } from "../../context"

const App = () => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <Main data-theme={theme}>
      <Dashboard />
      <Attribution>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by Raffaella using Gatsby and Styled Components.
      </Attribution>
    </Main>
  )
}

const Main = styled.main`
padding-top: 2rem;
  display: grid;
  place-items: center;
  background: var(--bg);
`

const Attribution = styled.p`
  text-align: center;
  width: 100%;
  font-size: var(--baseline-size);
  color: var(--text);

  & > a {
    color: var(--text-metrics);
  }
`

export default App
