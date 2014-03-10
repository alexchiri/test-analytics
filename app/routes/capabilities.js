var CapabilitiesRoute = Ember.Route.extend({
    setupController: function(controller) {
        controller.set('project', this.modelFor('project'));
        controller.set('model', this.modelFor('project').get('capabilities'));
    }
});

export default CapabilitiesRoute;