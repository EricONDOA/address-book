/**
 * Created by Eondoa on 03/06/2016.
 */
import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model){
    if(model.get('length')=== 1){
      this.transitionTo('groups.group', model.get('firstObject'));
    }
  }
});
