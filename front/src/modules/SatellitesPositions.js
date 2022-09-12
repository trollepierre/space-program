import React, { useCallback, useState } from 'react'
import { SatellitePosition } from './SatellitePosition'

export const SatellitesPositions = () => {
  const [satellitesPositions, setSatellitesPositions] = useState([])

  const writeBackSatellitesPositions = useCallback(async () => {
    const response = await fetch('http://localhost:3000')
    const { positions } = await response.json()
    setSatellitesPositions(positions)
  }, [])

  return <>
    <button onClick={writeBackSatellitesPositions}>Write back satellites positions</button>
    {satellitesPositions.map(position => <SatellitePosition key={position.satlatitude} position={position}/>)}
  </>

}
