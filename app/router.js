var Router = Ember.Router.extend();

Router.map(function() {
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

export default Router;