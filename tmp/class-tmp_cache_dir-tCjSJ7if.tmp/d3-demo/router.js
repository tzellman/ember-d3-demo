define('d3-demo/router', ['exports', 'ember', 'd3-demo/config/environment'], function (exports, Ember, config) {

    'use strict';

    var Router = Ember['default'].Router.extend({
        location: config['default'].locationType
    });

    exports['default'] = Router.map(function () {
        this.route("demo1");
        this.route("demo2");
    });

});