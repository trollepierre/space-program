import './App.css';
import React, { useState } from 'react'

const App = () => {
  const [satellitesPositions, setSatellitesPositions] = useState([])
  const writeBackSatellitesPositions = async () => {
    const response = await fetch('http://localhost:3000')
    const { positions } = await response.json()
    setSatellitesPositions(positions)
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={writeBackSatellitesPositions}>Write back satellites positions</button>
        {satellitesPositions.map(position => {
          return (<React.Fragment key={position.satlatitude}>
            <p>satlatitude: {position.satlatitude}</p>
            <p>satlongitude: {position.satlongitude}</p>
            <p>sataltitude: {position.sataltitude}</p>
            <p>azimuth: {position.azimuth}</p>
            <p>elevation: {position.elevation}</p>
            <p>ra: {position.ra}</p>
            <p>dec: {position.dec}</p>
            <p>timestamp: {position.timestamp}</p>
            <p>eclipsed: {position.eclipsed ? 'yes' : 'no'}</p>
          </React.Fragment>)
          }
        )}
      </header>
    </div>
  );
}

export default App;
