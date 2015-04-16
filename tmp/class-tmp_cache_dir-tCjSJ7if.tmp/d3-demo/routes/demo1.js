define('d3-demo/routes/demo1', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({

        model: function model() {
            return {
                data: [{ label: "1", value: 10 }, { label: "2", value: 20 }, { label: "3", value: 15 }, { label: "4", value: 5 }, { label: "5", value: 5 }, { label: "5", value: 5 }, { label: "5", value: 5 }, { label: "5", value: 5 }, { label: "5", value: 5 }]
            };
        }
    });

});