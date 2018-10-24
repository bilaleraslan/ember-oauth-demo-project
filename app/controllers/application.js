import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
   session: inject('session'), // Ember.inject.service('session'),
   userService : inject('user-service'), // Ember.inject.service('session'),
   actions: {
    invalidateSession() {
      this.get('userService');
      this.get('session').invalidate();
    }
  }
});
