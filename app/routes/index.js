import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject } from '@ember/service';
export default Route.extend({
  ajax: inject('ajax'),
  userService: inject('user-service'),
  model() {
     return hash({
        test : 'asd',
      });
  }
});
