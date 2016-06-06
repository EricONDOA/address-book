import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    deleteGroup(group){
      alert('Le groupe '+ group.title + ' a été supprimé');
    }
  }
});
