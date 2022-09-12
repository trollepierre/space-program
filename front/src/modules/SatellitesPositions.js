import React, { useCallback, useState } from 'react'
import { SatellitePosition } from './SatellitePosition'
import styled from 'styled-components'

const StyledButton = styled.button`
  text-align: center;
  font-size: 24px;
  border-radius: 4px;
  padding: 4px;
`
const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  height: 16px;
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-left: 0;
`

export const SatellitesPositions = () => {
  const [satellitesPositions, setSatellitesPositions] = useState([])

  const writeBackSatellitesPositions = useCallback(async () => {
    const response = await fetch('http://localhost:3000')
    const { positions } = await response.json()
    setSatellitesPositions(positions)
  }, [])

  return <>
    <StyledNav>
      <StyledButton onClick={writeBackSatellitesPositions}>Write back satellites positions</StyledButton>
    </StyledNav>
    <StyledUl>
      {satellitesPositions.map((position, index) => <SatellitePosition key={position.satlatitude} position={position} index={index+1}/>)}
    </StyledUl>
  </>
}
