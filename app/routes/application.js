import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import ENV from '../config/environment';
import { inject } from '@ember/service';
import BaseRouteMixin from '../mixins/base-route';
//import EmberObject from '@ember/object';

export default Route.extend(ApplicationRouteMixin,BaseRouteMixin,{
  userService : inject('user-service'),
  ajax : inject('ajax'),
  environment: ENV,
  beforeModel() {
    if (this.get('session').get('isAuthenticated')) {
      this._loadCurrentUser();
    } else {
      this._removeCurrentUser();
    }
  },
  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },
  _loadCurrentUser() {
     return  this.get('userService').loadCurrentUser();
   },
  _removeCurrentUser() {
    return  this.get('userService').removeCurrentUser();
  },
});
