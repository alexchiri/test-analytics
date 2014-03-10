var CapabilitiesShowCapabilitiesRoute = Ember.Route.extend({
    model:function(params) {
        return this.modelFor('project').get('capabilities');
    },

    serialize: function(model, params) {
        console.log("params: " + params);
        return { component_id: model.get('component_id'), attribute_id: model.get('attribute_id') };
    }
});


export default CapabilitiesShowCapabilitiesRoute;