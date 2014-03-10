var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

var Project = DS.Model.extend({
    name: attr('string'),
    completion: attr('date'),
    lead: attr('string'),
    description: attr('string'),
    attributes: hasMany('attribute', {async: true}),
    components: hasMany('component', {async: true}),
    capabilities: hasMany('capability', {async: true})
});

Project.reopenClass({
    FIXTURES: [
        {
            id: '1',
            name: 'Cool project 1',
            completion: new Date('04-01-2014'),
            lead: 'Alexandru Chirițescu',
            description: 'This is a very cool project description 1',
            attributes: [1, 2],
            components: [1, 2],
            capabilities: [1, 2]
        },
        {
            id: '2',
            name: 'Cool project 2',
            completion: new Date('10-01-2013'),
            lead: 'Alexandru Chirițescu',
            description: 'This is a very cool project description 2',
            attributes: [3],
            components: [3],
            capabilities: [3]
        }
    ]
});

export default Project;
