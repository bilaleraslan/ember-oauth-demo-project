import AjaxService from 'ember-ajax/services/ajax';
import ENV from '../config/environment';
import { inject } from '@ember/service';
import AjaxErrorResolver from '../mixins/ajax-error-resolver';


export default AjaxService.extend(AjaxErrorResolver,{
 session: inject('session'),
 env_app: ENV.APP,
 host: ENV.APP.API_HOST,
 namespace: '/api',
 contentType: 'application/json; charset=utf-8',
 isSuccess(status, headers, payload) {
    let isSuccess = this._super(status, headers, payload);
    return isSuccess;
  },
  request(url, options){
    options = options || {};
    options.xhrFields = {
      withCredentials: true
    };
    if (!options.direct) {
      options.data = JSON.stringify(options.data);
    }
    options.crossDomain = true;
    options.contentType = 'application/json';
    options.headers = options.headers || {};
    options.headers['Content-Type'] = 'application/json';
    options.headers['Accept'] = 'application/json';

    var _session =this.get('session');
    const authToken = _session.get('session.content.authenticated.access_token');
    //const authToken = this.get('session.content.authenticated.access_token');
    // const customToken = this.get('localSession.token' + this.get('applicationID'));

    if (authToken) {
      options.headers['Authorization'] = "Bearer " + authToken;
    }
    var comp = this;
    return this._super(url, options)
     .catch(function(error) {
        return comp.resolveAjaxError(error);
      });

   }
});
