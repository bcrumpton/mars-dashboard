import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('dashboard', { path: '/' });
  this.route('register');
  this.route('mission', function () {
    this.route('create');

    this.route('edit', {
      path: '/:mission_id/edit'
    });
  });
  this.route('login');
});

export default Router;
