var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

var Capability = DS.Model.extend({
    name: attr('string'),
    description: attr('string'),
    failure: attr('string'),
    impact: attr('string'),
    attribute: belongsTo('attribute'),
    component: belongsTo('component'),
    project: belongsTo('project')
});

Capability.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'User can do 1',
            description: 'A description for 1',
            failure: 'Rarely',
            impact: 'Minimal',
            attribute: 1,
            component: 1,
            project: 1
        },
        {
            id: 2,
            name: 'User can do 2',
            description: 'A description for 2',
            failure: 'Rarely',
            impact: 'Minimal',
            attribute: 2,
            component: 2,
            project: 1
        },
        {
            id: 3,
            name: 'User can do 3',
            description: 'A description for 3',
            failure: 'Rarely',
            impact: 'Minimal',
            attribute: 3,
            component: 3,
            project: 2
        }
    ]
});

export default Capability;