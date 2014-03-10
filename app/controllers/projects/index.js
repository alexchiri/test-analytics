var ProjectsIndexController = Ember.ArrayController.extend({
    sortProperties: ['completion'],
    sortAscending: true,

    activeProjects: function () {
        var sortedProjects = this.get("arrangedContent");

        return $().grep(sortedProjects, function (n, i) {
            var now = new Date();

            return n.get("completion") >= now;
        });
    }.property('model.@each'),

    completedProjects: function () {
        var sortedProjects = this.get("arrangedContent");

        return $().grep(sortedProjects, function (n, i) {
            var now = new Date();

            return n.get("completion") < now;
        });
    }.property('model.@each'),

    actions: {
        createProject: function() {
            // get the data from the template
            var projectName = this.get("newProjectName");
            var projectLead = this.get("newProjectLead");
            var projectDate = this.get("newProjectCompletion");
            var projectDescription = this.get("newProjectDescription");

            // create new project record
            var project = this.store.createRecord('project', {
                name: projectName,
                lead: projectLead,
                completion: new Date(projectDate),
                description: projectDescription
            });

            // save new project
            project.save();

            // clear inputs
            this.set('newProjectName', '');
            this.set('newProjectLead', '');
            this.set('newProjectCompletion', '');
            this.set('newProjectDescription', '');

            // push attribute to the project array of attributs
            this.get("model").pushObject(project);
        }
    }
});

export default ProjectsIndexController;
