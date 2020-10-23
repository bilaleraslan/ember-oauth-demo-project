import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  ajax: inject('ajax'),
  beforeModel() {
  },
  model() {
     return hash({
      countryList : this.get('ajax').request('/country-list-all'),
    });

  },
  actions: {
    onClick()
    {
    },
 }
});
