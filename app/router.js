import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('dashboard', { path: '/' }, function () {
    this.route('mission', function () {
      this.route('create');

      this.route('edit', {
        path: '/:mission_id/edit'
      });

      this.route('detail', { path: '/:mission_id' }, function () {
        this.route('crew', function () {
          this.route('new');
          this.route('edit');
          this.route('member', { path: '/:crew_id' });
        });
      });
    });
  });

  this.route('register');
  this.route('login');
});

export default Router;
