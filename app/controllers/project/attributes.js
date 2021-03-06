var ProjectAttributesController = Ember.ArrayController.extend({
    actions: {
        addAttribute: function() {
            var attributeName = this.get('newAttributeName');
            if(!attributeName.trim()) { return; }

            var model = this.get('model');
            var project = this.get('project');

            var attribute = this.store.createRecord('attribute', {
                name: attributeName,
                description: '',
                project: project
            });

            this.set('newAttributeName', '');

            attribute.save();

            // push attribute to the project array of attributs
            model.pushObject(attribute);
        }
    }
});


export default ProjectAttributesController;