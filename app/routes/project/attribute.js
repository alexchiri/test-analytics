var ProjectAttributeRoute = Ember.Route.extend({
    model:function(params) {
        return this.modelFor('project').get('attributes').findBy('id', params.attribute_id);
    }
});

export default ProjectAttributeRoute;