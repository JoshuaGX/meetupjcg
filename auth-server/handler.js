'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=YOUR_CONSUMER_KEY'
    + '&client_secret=YOUR_CONSUMER_SECRET'
    + '&grant_type=authorization_code'
    + '&redirect_uri=YOUR_CONSUMER_REDIRECT_URI'
    + '&code=USER_AUTHORIZATION_CODE';

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};