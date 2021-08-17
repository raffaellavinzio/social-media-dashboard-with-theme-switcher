import React from "react"
import styled from "styled-components/macro"

import Switch from "rc-switch"
import "rc-switch/assets/index.css"

import { ThemeContext } from "../../context"
import { QUERY } from "../../constants"

const ThemeSwitch = () => {
  const { setTheme } = React.useContext(ThemeContext)

  const toggle = (value, event) => {
    event.preventDefault()
    setTheme(value ? "light" : "dark")
  }

  return (
    <StyledSwitch theme={ThemeContext}>
      Dark mode
      <Switch onClick={toggle} defaultChecked={false} />
    </StyledSwitch>
  )
}

const StyledSwitch = styled.label`
  align-self: center;
  color: var(--text);
  font-size: var(--baseline-size);
  font-weight: var(--medium);
  display: flex;
  justify-content: space-between;
  gap: 8px;

  @media ${QUERY} {
    width: 100%;
    padding-top: 1.5rem;
    border-top: 1px solid var(--divider);
  }

  & > button {
    background: var(--text);
    border: 1px solid var(--card-bg);
    background: var(--toggle);
    outline: 0;
    transition: all 0.5s linear;
  }

  & > button:after {
    background: var(--card-bg);
  }

  &:hover > button {
    background: var(--common-hover);
    transform: none;
  }
`

export default ThemeSwitch
