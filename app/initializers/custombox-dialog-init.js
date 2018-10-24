export function initialize(application) {
  application.inject('route','custombox-dialog','service:custombox-dialog');
  application.inject('component','custombox-dialog','service:custombox-dialog');
  application.inject('controller','custombox-dialog','service:custombox-dialog');
  application.inject('object','custombox-dialog','service:custombox-dialog');
}

export default {
  name :'custombox-dialog',
  initialize
};
