import React from 'react'
import styled from 'styled-components'

const StyledLi = styled.li`
  background-color: grey;
  border: white solid 4px;
  height: 256px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledSpan = styled.span`
  margin-top: 4px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SatellitePosition = ({ position, index }) => {
  return (
    <StyledLi>
      <StyledSpan>Period n°{index}</StyledSpan>
      <hr/>
      <StyledSpan>satlatitude: {position.satlatitude}</StyledSpan>
      <StyledSpan>satlongitude: {position.satlongitude}</StyledSpan>
      <StyledSpan>sataltitude: {position.sataltitude}</StyledSpan>
      <StyledSpan>azimuth: {position.azimuth}</StyledSpan>
      <StyledSpan>elevation: {position.elevation}</StyledSpan>
      <StyledSpan>ra: {position.ra}</StyledSpan>
      <StyledSpan>dec: {position.dec}</StyledSpan>
      <StyledSpan>timestamp: {position.timestamp}</StyledSpan>
      <StyledSpan>eclipsed: {position.eclipsed ? 'yes' : 'no'}</StyledSpan>
    </StyledLi>
  )
}
