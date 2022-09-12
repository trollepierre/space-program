import React from 'react'

export const SatellitePosition = ({ position }) => {
  return (<>
    <span>satlatitude: {position.satlatitude}</span>
    <span>satlongitude: {position.satlongitude}</span>
    <span>sataltitude: {position.sataltitude}</span>
    <span>azimuth: {position.azimuth}</span>
    <span>elevation: {position.elevation}</span>
    <span>ra: {position.ra}</span>
    <span>dec: {position.dec}</span>
    <span>timestamp: {position.timestamp}</span>
    <span>eclipsed: {position.eclipsed ? 'yes' : 'no'}</span>
  </>)
}
