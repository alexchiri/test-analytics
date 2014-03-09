App.ProjectsIndexController = Ember.ArrayController.extend({
    sortProperties: ['completion'],
    sortAscending: true,

    activeProjects: function () {
        console.log("Entered activeProjects");

        var sortedProjects = this.get("arrangedContent");

        return jQuery.grep(sortedProjects, function (n, i) {
            var now = new Date();

            return n.get("completion") >= now;
        });
    }.property('arrangedContent.@each.completion'),

    completedProjects: function () {
        var sortedProjects = this.get("arrangedContent");

        return jQuery.grep(sortedProjects, function (n, i) {
            var now = new Date();

            return n.get("completion") < now;
        });
    }.property('arrangedContent.@each.completion'),

    actions: {
        createProject: function() {

        }
    }

});
