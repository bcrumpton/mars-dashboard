import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('ration', function () {
    this.route('new');
  });

  this.route('ration', function () {
    this.route('edit');
  });
});

export default Router;
