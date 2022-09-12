import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';
import NodeCache from 'node-cache';

const myCache = new NodeCache();
dotenv.config()

const app = express();
const PORT: Number = 3000;

const GALILEO_NORAD_ID = `41174`;

const OBSERVER_LAT = `41.702`;
const OBSERVER_LNG = `-76.014`;
const OBSERVER_ALT = `0`;

const NUMBER_OF_PERIODS_TO_KEEP = `1`;
const TTL_IN_SECONDS = 60;

app.get('/', async (req, res) => {
    let data = myCache.get(GALILEO_NORAD_ID)
    if (data == undefined) {
        const response = await axios.get(`https://api.n2yo.com/rest/v1/satellite/positions/${GALILEO_NORAD_ID}/${OBSERVER_LAT}/${OBSERVER_LNG}/${OBSERVER_ALT}/${NUMBER_OF_PERIODS_TO_KEEP}/&apiKey=${process.env.API_KEY}`)
        data = response.data
    } else {
    }
    myCache.set(GALILEO_NORAD_ID, data, TTL_IN_SECONDS)
    res.json(data);
})

app.listen(PORT, () => {
    console.log(`The application is listening on port http://localhost:${PORT}`);
})
