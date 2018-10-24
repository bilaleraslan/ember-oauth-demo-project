export function initialize( application ) {
  application.inject('route','ajax','service:ajax');
  application.inject('component','ajax','service:ajax');
  application.inject('controller','ajax','service:ajax');
  application.inject('object','ajax','service:ajax');
}

export default {
  name :'ajax',
  initialize
};
