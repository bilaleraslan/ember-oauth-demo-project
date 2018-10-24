export function initialize( application ) {
  application.inject('route','user-service','service:user-service');
  application.inject('component','user-service','service:user-service');
  application.inject('controller','user-service','service:user-service');
  application.inject('object','user-service','service:user-service');
}

export default {
  name :'user-service',
  initialize
};
