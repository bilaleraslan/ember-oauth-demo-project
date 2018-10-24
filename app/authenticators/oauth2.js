import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from '../config/environment';

export default OAuth2PasswordGrant.extend({
   serverTokenEndpoint: ENV.APP.API_TOKENENDPOINT,
   refreshAccessTokens: true,
   //_clientIdHeader :'ZGVtbzpkZW1v',
   //clientId : 'demo'
});
