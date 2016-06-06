import Ember from 'ember';

export default Ember.Component.extend({
  group: undefined,
  onDelete: undefined,
  shouldConfirm: false,
  tagName: 'div',

  actions: {
    deleteButtonPressed() {
      this.set('shouldConfirm', true);
    },
    confirmButtonPressed() {
      const deleteAction = this.get('onDelete');
      if(deleteAction){
        deleteAction(this.get('group'));
      }
    },
    cancelButtonPressed() {
      this.set('shouldConfirm', false);
    }
  }
});
