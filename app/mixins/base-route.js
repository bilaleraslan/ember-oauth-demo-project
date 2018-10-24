import Mixin from '@ember/object/mixin';
import { getOwner } from '@ember/application'

export default Mixin.create({
  init() {
    this._super(...arguments);
    this.set('router', getOwner(this).lookup('router:main'));
  },
  afterModel: function (model, transition) {
    console.log("running base route after model ,routename:" + transition.targetName);
    this._super(model, transition);
  },
  test()
  {
    console.log("base test function");
  },
  actions: {
    error: function (error,transition) {
      //TODO
      console.log(error);
      console.log(transition);

     this.toast.error(error);
    }
  }

});
