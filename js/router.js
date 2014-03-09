App.Router.map(function() {
    this.resource('projects', function() {
        this.resource('project', { path: ':project_id' }, function() {
            this.route('attributes');
            this.route('attribute', { path: '/attributes/:attribute_id' });

            this.route('components');
            this.route('component', { path: '/components/:component_id' });

            this.resource('capabilities', function() {
                this.route('showCapabilities', { path: '/list' });
                // this.route('showCapabilities', { path: '/list/:component_id/:attribute_id' });
            });

            this.route('capability', { path: '/capabilities/:capability_id' });
        });
    });
});

App.ProjectsRoute = Ember.Route.extend({
    model:function() {
        return this.store.find('project');
    }
});

App.ProjectRoute = Ember.Route.extend({
    model:function(params) {
        return this.store.find('project', params.project_id);
    }
});

App.ProjectsIndexRoute = Ember.Route.extend({
    model:function(params) {
        return this.modelFor('projects');
    }
});

App.ProjectIndexRoute = Ember.Route.extend({
    model:function(params) {
        return this.modelFor('project');
    }
});

App.ProjectAttributesRoute = Ember.Route.extend({
    setupController: function(controller) {
        controller.set('project', this.modelFor('project'));
        controller.set('model', this.modelFor('project').get('attributes'));
    }
});

App.ProjectAttributeRoute = Ember.Route.extend({
    model:function(params) {
        return this.modelFor('project').get('attributes').findBy('id', params.attribute_id);
    }
});

App.ProjectComponentsRoute = Ember.Route.extend({
    setupController: function(controller) {
        controller.set('project', this.modelFor('project'));
        controller.set('model', this.modelFor('project').get('components'));
    }
});

App.ProjectComponentRoute = Ember.Route.extend({
    model:function(params) {
        return this.modelFor('project').get('components').findBy('id', params.component_id);
    }
});

App.CapabilitiesRoute = Ember.Route.extend({
    setupController: function(controller) {
        controller.set('project', this.modelFor('project'));
        controller.set('model', this.modelFor('project').get('capabilities'));
    }
});

App.CapabilitiesIndexRoute = Ember.Route.extend({
    setupController: function(controller) {
        controller.set('project', this.modelFor('project'));
        controller.set('model', this.modelFor('project').get('capabilities'));
    }
});

App.ProjectCapabilityRoute = Ember.Route.extend({
    model:function(params) {
        return this.modelFor('project').get('capabilities').findBy('id', params.capability_id);
    }
});

App.CapabilitiesShowCapabilitiesRoute = Ember.Route.extend({
    model:function(params) {
        return this.modelFor('project').get('capabilities');
    },

    serialize: function(model, params) {
        console.log("params: " + params);
        return { component_id: model.get('component_id'), attribute_id: model.get('attribute_id') }
    }
});
