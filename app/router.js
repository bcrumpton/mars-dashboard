import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('crew', function () {
    this.route('new');
    this.route('edit');
    this.route('member');
  });
});

export default Router;
