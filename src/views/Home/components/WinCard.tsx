import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import useLotteryTotalPrizesUsd from 'hooks/useLotteryTotalPrizesUsd'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  height: 160px;
  text-align: center;
  border-radius: 0px;
  background-image: url('/images/smallcard_back.png');
  background-size: 100% 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: none;
  }
  & *{
    font-family: "Trajan Pro";
    font-weight: bold;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'lg' })`
  font-size: 2em;
  line-height: 2em;
`
const WinCard = () => {
  const lotteryPrize = Math.round(useLotteryTotalPrizesUsd()).toLocaleString()

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="black" size="sm">
          Lottery with
        </Heading>
         <CardMidContent color="#7f080e">${lotteryPrize}</CardMidContent>
          <Heading color="black" size="sm" style={{textAlign: 'center'}}>
            up for grabs
          </Heading>          
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default WinCard
