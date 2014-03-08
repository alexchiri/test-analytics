App.ProjectComponentsController = Ember.ArrayController.extend({
	actions: {
		addComponent: function() {
			var componentName = this.get('newComponentName');
			if(!componentName.trim()) { return; }
	
			var model = this.get('model');
			var project = this.get('project');
	
			var component = this.store.createRecord('component', {
				name: componentName,
				description: '',
				project: project,
				capabilities: []
			});
	
			this.set('newComponentName', '');
	
			component.save();

			// push component to the project array of component
			model.pushObject(component);
		}
	}	
});