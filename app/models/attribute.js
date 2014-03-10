var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

var Attribute = DS.Model.extend({
    name: attr('string'),
    description: attr('string'),
    capabilities: hasMany('capability', {async: true}),
    project: belongsTo('project')
});

Attribute.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'Secure',
            description: 'Super secure',
            capabilities: [1],
            project: 1
        },
        {
            id: 2,
            name: 'Social',
            description: 'Super soooocial',
            capabilities: [2],
            project: 2
        },
        {
            id: 3,
            name: 'Friendly',
            description: 'Very friendly',
            capabilities: [3],
            project: 3
        }
    ]
});

export default Attribute;