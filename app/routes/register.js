import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    ajax: inject('ajax'),
    actions:
    {
      register(user)
      {
        this.get('ajax').post('/newuser' ,{data: user} ).then(function (response) {
            console.log(response);
           }).catch(function (error) {
             console.log(error);
        });

      }

    }
});
