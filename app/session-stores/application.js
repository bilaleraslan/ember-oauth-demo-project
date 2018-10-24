import CookieStore from 'ember-simple-auth/session-stores/cookie';
import ENV from '../config/environment';


export default CookieStore.extend({
    cookieExpirationTime: 900,
    cookieDomain: ENV.COOKIEDOAMIN

  }
);
