import Ember from 'ember';

function makeNode(depth) {
    if (!depth) {
        depth = 0;
    }

    var d = {};
    d.label = faker.lorem.words(1)[0];
    d.image = faker.internet.avatar();
    d.stories = [];
    for (var i = 0; i < faker.random.number({min: 3, max: 7}); ++i) {
        var s = {};
        d.stories.push(s);
        s.title = faker.lorem.sentence(3, 8);
        s.volume = faker.random.number(50);
        s.examples = [];
        for (var j = 0; j < faker.random.number({min: 2, max: 7}); ++j) {
            var e = {};
            s.examples.push(e);
            e.content = faker.lorem.sentence(5, 20);
            e.published = faker.date.recent();
        }
    }

    if (depth === 0) {
        d.rel = [];
        for (i = 0; i < faker.random.number({min: 5, max: 10}); ++i) {
            d.rel.push(makeNode(depth + 1));
        }
    }
    return d;
}

export default Ember.Route.extend({

    model: function () {
        return {
            data: makeNode()
        };
    }
});
