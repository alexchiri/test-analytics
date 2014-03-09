App.DateField = Ember.TextField.extend({
    didInsertElement: function() {
        return this.$().datepicker();
    }
});