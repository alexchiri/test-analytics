var formatDate = Ember.Handlebars.makeBoundHelper(function(date) {
    return moment(date).format('MMMM Do YYYY');
});

export default formatDate;