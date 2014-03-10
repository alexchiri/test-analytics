var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

var Component = DS.Model.extend({
    name: attr('string'),
    description: attr('string'),
    capabilities: hasMany('capability', {async: true}),
    project: belongsTo('project')
});

Component.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'CMS',
            description: 'Our CMS',
            capabilities: [1],
            project: 1
        },
        {
            id: 2,
            name: 'Training',
            description: 'Our trainings',
            capabilities: [2],
            project: 2
        },
        {
            id: 3,
            name: 'Exam',
            description: 'Our exams',
            capabilities: [3],
            project: 3
        }
    ]
});

export default Component;