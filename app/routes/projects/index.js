var ProjectsIndexRoute = Ember.Route.extend({
    model:function(params) {
        return this.modelFor('projects');
    }
});

export default ProjectsIndexRoute;