var ProjectAttributesRoute = Ember.Route.extend({
    setupController: function(controller) {
        controller.set('project', this.modelFor('project'));
        controller.set('model', this.modelFor('project').get('attributes'));
    }
});

export default ProjectAttributesRoute;