import React from "react"
import styled from "styled-components/macro"

const SummaryCard = ({ card }) => {
  const {
    social,
    url,
    user,
    followersCount,
    trend,
    dailyFollowersCountChange,
  } = card

  return (
    <BorderWrap social={social}>
      <Wrapper>
        <Account>
          <img src={url} alt={social} />
          {user}
        </Account>
        <MetricWrapper>
          <Metric>{followersCount}</Metric>
          <Text>{social == "youtube" ? "subscribers" : "followers"}</Text>
        </MetricWrapper>
        <Trend trend={trend}>
          <img src={trend} alt={social} />
          {dailyFollowersCountChange} Today
        </Trend>
      </Wrapper>
    </BorderWrap>
  )
}

const BorderWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 4px;
  border-radius: 5px;
  background: ${({ social }) => {
    switch (social) {
      case "facebook":
        return "var(--facebook)"
      case "instagram":
        return "var(--instagram)"
      case "youtube":
        return "var(--youtube)"
      case "twitter":
        return "var(--twitter)"
    }
  }};
`

const Wrapper = styled.div`
  background-color: var(--card-bg);
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 3rem;
  gap: 1.8rem;
  border-radius: 5px;

  &:hover {
    background-color: var(--hover);
    cursor: pointer;
  }
`
const Account = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--baseline-size);
  font-weight: var(--medium);
`
const MetricWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Metric = styled.span`
  font-size: calc(4 * var(--baseline-size));
  color: var(--text-metrics);
  line-height: 1;
  font-weight: var(--medium);
`

const Text = styled.span`
  font-size: var(--baseline-size);
  text-transform: uppercase;
  letter-spacing: 4px;
`

const Trend = styled.span`
  flex: 1;
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

export default SummaryCard
