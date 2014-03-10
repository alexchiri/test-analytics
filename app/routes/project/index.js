var ProjectIndexRoute = Ember.Route.extend({
    model:function(params) {
        return this.modelFor('project');
    }
});

export default ProjectIndexRoute;