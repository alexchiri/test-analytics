var ProjectsRoute = Ember.Route.extend({
    model:function() {
        return this.store.find('project');
    }
});

export default ProjectsRoute;