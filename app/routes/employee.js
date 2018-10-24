import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  ajax: inject('ajax'),
  userService: inject('user-service'),
  beforeModel() {
  },
  model() {
     return hash({
      empList : this.get('ajax').request('/employee-list-all/'),
    });

  },
  actions: {
    onClick()
    {
      this.get('ajax').request('/employee-list-all21/');
    },
 }
});
