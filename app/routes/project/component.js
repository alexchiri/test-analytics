var ProjectComponentRoute = Ember.Route.extend({
    model:function(params) {
        return this.modelFor('project').get('components').findBy('id', params.component_id);
    }
});

export default ProjectComponentRoute;