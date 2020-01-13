'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=vu25bjm17bqht16225nqij3jef'
    + '&client_secret=a66jvcqesnsctl4iba8hn8o8oa'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://joshuagx.github.io/meetupjcg/'
    + '&code=d46cfe9402c58a58728271d8687e577c';

  const info = await axios.post(+ '&code=' + event.pathParameters.code);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};