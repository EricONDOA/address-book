import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model:function(){
    return this.get('ajax').request('http://localhost:3000/groups');
  }
});
