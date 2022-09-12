// Importing module
import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config()

const app = express();
const PORT:Number=3000;

// Handling GET / Request
app.get('/', async (req, res) => {
    const galileo_norad_id = `41174`;

    const observer_lat = `41.702`;
    const observer_lng = `-76.014`;
    const observer_alt = `0`;

    const seconds = `1`;

    const response = await axios.get(`https://api.n2yo.com/rest/v1/satellite/positions/${galileo_norad_id}/${observer_lat}/${observer_lng}/${observer_alt}/${seconds}/&apiKey=${process.env.API_KEY}`)
    res.json(response.data);
})

// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
        + 'on port http://localhost:'+PORT);
})
