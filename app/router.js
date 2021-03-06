import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('product-images', function() {});

  this.route('products', function() {
    this.route('new');
    this.route('details', { path: '/:id/details' });
  });

  this.route('admin', function() {
    this.route('products', function() {
      this.route('new');
    });

    this.route('product-audiences', function() {
      this.route('new');
    });

    this.route('product-sizes', function() {
      this.route('new');
    });
  });
  this.route('shopping-cart', function() {
    this.route('checkout');
  });
});

export default Router;
