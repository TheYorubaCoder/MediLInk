// /pages/api/vitals.js
import axios from 'axios';

export default async function handler(req, res) {
  const { access_token } = req.query;  // Get the access token from the query

  if (!access_token) {
    return res.status(400).send('Access token is missing');
  }

  try {
    // Fetch Heart Rate data from Fitbit API
    const heartRateResponse = await axios.get('https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json', {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

    // Fetch other data if needed (SpO2, BP, etc.)
    // Example for fetching SpO2 data:
    const spO2Response = await axios.get('https://api.fitbit.com/1/user/-/spO2/date/today.json', {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

    // Combine the data you need (you can add more endpoints based on what you need)
    const vitalsData = {
      heartRate: heartRateResponse.data,
      spO2: spO2Response.data,
    };

    // Send the vitals data back to the frontend
    res.status(200).json(vitalsData);
  } catch (error) {
    console.error('Error fetching data from Fitbit API:', error);
    res.status(500).send('Error fetching vitals data');
  }
}