import Ember from 'ember';

export default Ember.Route.extend({
  // Here we are using ES6 syntax for functions!
  // We can use this out of the box with ember-cli
  // thanks to the addon ember-cli-babel
  model(){
    // return this.store.findAll('friend');
    //we can also do store.findRecord or queryRecord to use an ID etc
    return this.store.findAll('friend');
  }
});
