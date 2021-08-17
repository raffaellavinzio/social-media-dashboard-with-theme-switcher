import React from "react"
import styled from "styled-components/macro"

import ThemeSwitch from "../ThemeSwitch"
import MetricsCard from "../MetricsCard"
import SummaryCard from "../SummaryCard"

import { data } from "../../data"
import { QUERY } from "../../constants"

const Dashboard = () => {
  const { summaryCards, metricsCards } = data

  return (
    <Wrapper>
      <Header>
        <div>
          <Title>Social Media Dashboard</Title>
          <SubTitle>Total Followers: 23,004</SubTitle>
        </div>
        <ThemeSwitch />
      </Header>
      <TopCardList>
        {summaryCards.map(c => (
          <SummaryCard key={c.id} card={c} />
        ))}
      </TopCardList>
      <BottomTitle>Overview - Today</BottomTitle>
      <BottomCardList>
        {metricsCards.map(c => (
          <MetricsCard key={c.id} card={c} />
        ))}
      </BottomCardList>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 80%;
  color: var(--text-metrics);

  @media ${QUERY} {
    width: 90%;
  }
`
const Header = styled.header`
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;

  @media ${QUERY} {
    flex-direction: column;
  }
`

const Title = styled.h1`
  font-size: calc(2 * var(--baseline-size));
  font-weight: var(--medium);
`
const SubTitle = styled.span`
  color: var(--text);
  font-size: calc(1.2 * var(--baseline-size));
  font-weight: var(--medium);

  @media ${QUERY} {
    display: block;
    padding-bottom: 1.5rem;
  }
`

const TopCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
  gap: 1.5rem 1.8rem;
`

const BottomTitle = styled.h2`
  margin-top: 2.5rem;
  font-size: calc(1.8 * var(--baseline-size));
  font-weight: var(--medium);
  margin-bottom: 1.5rem;
`

const BottomCardList = styled(TopCardList)`
  padding-bottom: 6rem;
`

export default Dashboard
