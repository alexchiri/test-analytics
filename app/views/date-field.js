var DateField = Ember.TextField.extend({
    didInsertElement: function() {
        return this.$().datepicker();
    }
});

export default DateField;