import axios from 'axios';

export default function handler(req, res) {
  const { FITBIT_CLIENT_ID, FITBIT_CLIENT_SECRET, FITBIT_REDIRECT_URI } = process.env;

  // Redirect the user to Fitbit's OAuth page
  const authUrl = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${FITBIT_CLIENT_ID}&redirect_uri=${FITBIT_REDIRECT_URI}&scope=activity+sleep+heartrate+nutrition`;

  // Redirect to Fitbit's authorization page
  res.redirect(authUrl);
}