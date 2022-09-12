import React from 'react'
import { SatellitesPositions } from './modules/SatellitesPositions'
import styled from 'styled-components'

const StyledApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
`

const App = () => {
  return (
    <StyledApp>
      <SatellitesPositions/>
    </StyledApp>
  )
}

export default App
