var ProjectCapabilityRoute = Ember.Route.extend({
    model:function(params) {
        return this.modelFor('project').get('capabilities').findBy('id', params.capability_id);
    }
});

export default ProjectCapabilityRoute;