import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('employee');
  this.route('login');
  this.route('register');

  this.route('error', function() {
    this.route('403');
    this.route('401');
    this.route('404');
  });

  // 404
  this.route('error.404', { path: '/*wildcard' });
  this.route('country');
});

export default Router;
