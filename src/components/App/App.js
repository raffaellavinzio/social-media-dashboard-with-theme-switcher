import React from "react"
import styled from "styled-components/macro"

import Dashboard from "../Dashboard"

import {ThemeContext} from '../../context'

const App = () => {
  const {theme} = React.useContext(ThemeContext)
  return (

    <Main data-theme= {theme}>
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
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 100%;
  background: var(--bg);
  padding-bottom: 2rem;;
`

const Attribution = styled.p`
  position: absolute;
  bottom: 0;
  z-index: 2;
  text-align: center;
  width: 100%;
  font-size: var(--baseline-size);
  color: var(--text);
`

export default App
