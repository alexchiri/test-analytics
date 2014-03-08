window.ENV = {FEATURES: {'query-params-new': true}};

window.App = Ember.Application.create({
	// LOG_TRANSITIONS: true,   
 //  	LOG_TRANSITIONS_INTERNAL: true,
 //  	LOG_ACTIVE_GENERATION: true,
 //  	LOG_VIEW_LOOKUPS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

var attr = DS.attr,
	belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

App.Project = DS.Model.extend({	
	name: attr('string'),
	completion: attr('date'),
	lead: attr('string'),
	description: attr('string'), 	
	attributes: hasMany('attribute', {async:true}),
	components: hasMany('component', {async:true}),
	capabilities: hasMany('capability' ,{async:true})
});

App.Attribute = DS.Model.extend({
	name: attr('string'),
	description: attr('string'),
	capabilities: hasMany('capability', {async:true}),
	project: belongsTo('project')
});

App.Component = DS.Model.extend({
	name: attr('string'),
	description: attr('string'),
	capabilities: hasMany('capability', {async:true}),
	project: belongsTo('project')
});

App.Capability = DS.Model.extend({
	name: attr('string'),
	description: attr('string'),
	failure: attr('string'),
	impact: attr('string'),
	attribute: belongsTo('attribute'),
	component: belongsTo('component'),
	project: belongsTo('project')
});

App.Project.FIXTURES = [{
	id:'1',
	name:'Cool project 1',
	completion: new Date('04-01-2014'),
	lead: 'Alexandru Chirițescu',
	description: 'This is a very cool project description 1',
	attributes: [1,2],
	components: [1,2],
	capabilities: [1,2]
}, {
	id:'2',
	name:'Cool project 2',
	completion: new Date('10-01-2013'),
	lead: 'Alexandru Chirițescu',
	description: 'This is a very cool project description 2',
	attributes: [3],
	components: [3],
	capabilities: [3]
}];

App.Attribute.FIXTURES = [{
	id: 1,
	name: 'Secure',
	description: 'Super secure',
	capabilities: [1],
	project: 1
}, {
	id: 2,
	name: 'Social',
	description: 'Super soooocial',
	capabilities: [2],
	project: 2
}, {
	id: 3,
	name: 'Friendly',
	description: 'Very friendly',
	capabilities: [3],
	project: 3
}];


App.Component.FIXTURES = [{
	id: 1,
	name: 'CMS',
	description: 'Our CMS',
	capabilities: [1],
	project: 1
}, {
	id: 2,
	name: 'Training',
	description: 'Our trainings',
	capabilities: [2],
	project: 2
}, {
	id: 3,
	name: 'Exam',
	description: 'Our exams',
	capabilities: [3],
	project: 3
}];

App.Capability.FIXTURES = [{
	id: 1,
	name: 'User can do 1',
	description: 'A description for 1',
	failure: 'Rarely',
	impact: 'Minimal',
	attribute: 1,
	component: 1,
	project: 1
}, {
	id: 2,
	name: 'User can do 2',
	description: 'A description for 2',
	failure: 'Rarely',
	impact: 'Minimal',
	attribute: 2,
	component: 2,
	project: 1
}, {
	id: 3,
	name: 'User can do 3',
	description: 'A description for 3',
	failure: 'Rarely',
	impact: 'Minimal',
	attribute: 3,
	component: 3,
	project: 2
}];
