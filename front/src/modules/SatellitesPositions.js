import React, { useCallback, useState } from 'react'
import { SatellitePosition } from './SatellitePosition'
import styled from 'styled-components'

const StyledButton = styled.button`
  text-align: center;
  font-size: 24px;
  border-radius: 8px;
  padding: 8px;
`
const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px;
  height: 20vh;
`

const StyledMain = styled.main`
  height: 30vh;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    <StyledMain>
      {satellitesPositions.map(position => <SatellitePosition key={position.satlatitude} position={position}/>)}
    </StyledMain>
  </>
}
