import React from "react"
import styled from "styled-components/macro"

const MetricsCard = ({ card }) => {
  const { title, count, percentage, trend, social, url } = card

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Icon src={url} alt={social} />
      <Metric>{count}</Metric>
      <Trend trend={trend}>
        <img src={trend} alt={social} />
        {percentage}%
      </Trend>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--card-bg);
  color: var(--text);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title icon"
    "metric trend";
  padding: 1.5rem 2rem;
  gap: 1.2rem;
  border-radius: 5px;

  &:hover {
    background-color: var(--hover);
    cursor: pointer;
  }
`

const Title = styled.h1`
  grid-area: title;
  font-size: calc(1 * var(--baseline-size));
  font-weight: var(--medium);
`
const Icon = styled.img`
  grid-area: icon;
  justify-self: end;
  align-self: center;
`
const Metric = styled.span`
  grid-area: metric;
  align-self: end;
  font-size: calc(2.5 * var(--baseline-size));
  font-weight: var(--medium);
  color: var(--text-metrics);
  line-height: 1;
`
const Trend = styled.span`
  grid-area: trend;
  justify-self: end;
  align-self: end;
  color: ${({ trend }) =>
    trend == "icon-down.svg"
      ? "var(--primary-bright-red)"
      : "var(--primary-lime-green)"};
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: var(--baseline-size);
  font-weight: var(--medium);
`

export default MetricsCard
