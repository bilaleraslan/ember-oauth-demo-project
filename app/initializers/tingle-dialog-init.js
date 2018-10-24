export function initialize(application) {
  application.inject('route','tingle-dialog','service:tingle-dialog');
  application.inject('component','tingle-dialog','service:tingle-dialog');
  application.inject('controller','tingle-dialog','service:tingle-dialog');
  application.inject('object','tingle-dialog','service:tingle-dialog');
}

export default {
  name :'tingle-dialog',
  initialize
};
