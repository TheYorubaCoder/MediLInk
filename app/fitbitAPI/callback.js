// /pages/api/callback.js
import axios from 'axios';

export default async function handler(req, res) {
  const { code } = req.query;  // Get the authorization code from the query

  if (!code) {
    return res.status(400).send('Authorization code is missing');
  }

  const { FITBIT_CLIENT_ID, FITBIT_CLIENT_SECRET, FITBIT_REDIRECT_URI } = process.env;

  // Data to send in the token exchange request
  const data = new URLSearchParams();
  data.append('client_id', FITBIT_CLIENT_ID);
  data.append('client_secret', FITBIT_CLIENT_SECRET);
  data.append('redirect_uri', FITBIT_REDIRECT_URI);
  data.append('code', code);
  data.append('grant_type', 'authorization_code');

  try {
    // Exchange the authorization code for access and refresh tokens
    const response = await axios.post('https://api.fitbit.com/oauth2/token', data.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const { access_token, refresh_token } = response.data;

    // You can store the access token and refresh token in session or a database here
    // For now, we'll just send them in the response
    res.status(200).json({ access_token, refresh_token });
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    res.status(500).send('Error exchanging code for tokens');
  }
}