/**
 * Created by Eondoa on 03/06/2016.
 */
import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function (){
    this.transitionTo('groups');
  }
});

