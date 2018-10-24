import Controller from '@ember/controller';
import { inject } from '@ember/service'
export default Controller.extend({
    session: inject('session'),
    userService: inject('user-service'),
    actions: {
      authenticate() {
        let { identification, password } = this.getProperties('identification', 'password');
        let headers = {
              'Accept': 'application/json',
              'Authorization': 'Basic ZGVtbzpkZW1v'
            };
        let scope = "demoScope";
        var comp = this;
        this.get('session').authenticate('authenticator:oauth2', identification, password,scope,headers)
             .then(function () { //result
                comp.get('userService').loadCurrentUser();
              }).catch((reason) => {
                  comp.set('errorMessage', reason.error_description);
                });
      }
    }

});
