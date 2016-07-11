import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    save() {
      console.log('+--- save action bubbled upto friends route');
      return true;
    },

    cancel() {
      console.log('+--- cancel action bubbled upto friends route');
      return true;
    }
  }
});
