import Mixin from '@ember/object/mixin';
import {isServerError ,isBadRequestError,isUnauthorizedError,isAjaxError, isNotFoundError, isForbiddenError} from 'ember-ajax/errors';
import { inject } from '@ember/service';
import { getOwner } from '@ember/application'

export default Mixin.create({
  toast: inject('toast'),
  tingleDialog: inject('tingle-dialog'),
  customboxDialog: inject('custombox-dialog'),
  init() {
    this._super(...arguments);
    this.set('router', getOwner(this).lookup('router:main'));
  },
  resolveAjaxError(error)
  {
    if (isBadRequestError(error)) {
        // handle 400 errors here
        return;
    }

    if (isNotFoundError(error)) {
      this.get("toast").error("Server Adresi Bulunamadı!");
      return error;
    }

    if (isUnauthorizedError(error)) {
      this.get("toast").error("Oturum Açmalısınız!");
      return this.get('router').transitionTo("login");
    }

    if (isForbiddenError(error)) {
      this.get("toast").error("Bu Server Adresi görmeye Yetkili Değilsiniz!");
      return error;
    }

    if(isServerError(error) || isAjaxError(error))
     { // handle 5XX errors here
       // handle all other AjaxErrors here
       return this.resolveCustomError(error);
     }

     throw error;
  },
  resolveCustomError(error)
  {
    if(error.payload.status === "INFO")
    {
     this.get("toast").info(error.payload.description);
     return error;
    }

    if(error.payload.status === "WARN")
    {
     this.get("toast").warn(error.payload.description);
     return error;
    }

    if(error.payload.status === "ERROR")
    {
     this.get("toast").error(error.payload.description);
     return error;
    }


    if(error.payload.status === "UNEXPECTED")
    {
     var UNEXPECTED_ERROR= error.payload.description  + " ID: " + error.payload.uuid;
     this.get("customboxDialog").showDialog(UNEXPECTED_ERROR);
     return error;
    }

     throw error;
  },
});
