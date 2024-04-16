const jwt = require('jsonwebtoken');
const config = require('../config/keycloak.json');
const axios = require('axios');
const { request } = require('express');

async function validateKeycloakToken(token) {

  let content = undefined;

  try {
    await axios.get(`${config.keycloak_base_url}/realms/${config.realm}/protocol/openid-connect/userinfo`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });

    const payload = jwt.decode(token, { json: true });

    if (
      payload?.iss !== undefined &&
      payload?.sub !== undefined &&
      payload?.aud !== undefined &&
      payload?.exp !== undefined &&
      payload?.iat !== undefined
    ) {
      content = {
        ...payload,
        iss: payload.iss,
        sub: payload.sub,
        aud: payload.aud,
        exp: payload.exp,
        iat: payload.iat
      }
    }
  } catch (error) {
    console.log('Invalid token');
  }
  console.log('no content ', content)
  return content;
}
module.exports = { validateKeycloakToken };