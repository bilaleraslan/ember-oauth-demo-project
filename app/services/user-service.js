import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  ajax : inject('ajax'),
	currentUser:"",
	loadCurrentUser () {
  var  comp = this;
    this.get('ajax').request('/currentUser').then(function (response) {
        comp.set('currentUser', response);
      });
	},
	getCurrentUser () {
		return this.get('currentUser');
	},
  setCurrentUser (currentUser) {
		return this.set('currentUser',currentUser);
	},
  removeCurrentUser()
  {
     this.set('currentUser','');
     return true;
  }
});
