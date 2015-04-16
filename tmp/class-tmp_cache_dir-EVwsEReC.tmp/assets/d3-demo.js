/* jshint ignore:start */

/* jshint ignore:end */

define('d3-demo/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'd3-demo/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('d3-demo/initializers/app-version', ['exports', 'd3-demo/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: "App Version",
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('d3-demo/initializers/export-application-global', ['exports', 'ember', 'd3-demo/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
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
define('d3-demo/routes/demo2', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    function makeNode(depth) {
        if (!depth) {
            depth = 0;
        }

        var d = {};
        d.label = faker.lorem.words(1)[0];
        d.image = faker.internet.avatar();
        d.stories = [];
        for (var i = 0; i < faker.random.number({ min: 3, max: 7 }); ++i) {
            var s = {};
            d.stories.push(s);
            s.title = faker.lorem.sentence(3, 8);
            s.volume = faker.random.number(50);
            s.examples = [];
            for (var j = 0; j < faker.random.number({ min: 2, max: 7 }); ++j) {
                var e = {};
                s.examples.push(e);
                e.content = faker.lorem.sentence(5, 20);
                e.published = faker.date.recent();
            }
        }

        if (depth === 0) {
            d.rel = [];
            for (i = 0; i < faker.random.number({ min: 5, max: 10 }); ++i) {
                d.rel.push(makeNode(depth + 1));
            }
        }
        return d;
    }

    exports['default'] = Ember['default'].Route.extend({

        model: function model() {
            return {
                data: makeNode()
            };
        }
    });

});
define('d3-demo/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('d3-demo/templates/demo2', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('d3-demo/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Demo1");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Demo2");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(fragment,4,4,contextualElement);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "link-to", ["demo1"], {}, child0, null);
        block(env, morph1, context, "link-to", ["demo2"], {}, child1, null);
        return fragment;
      }
    };
  }()));

});
define('d3-demo/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('d3-demo/tests/helpers/resolver', ['exports', 'ember/resolver', 'd3-demo/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('d3-demo/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('d3-demo/tests/helpers/start-app', ['exports', 'ember', 'd3-demo/app', 'd3-demo/router', 'd3-demo/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('d3-demo/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('d3-demo/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('d3-demo/tests/routes/demo1.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/demo1.js should pass jshint', function() { 
    ok(true, 'routes/demo1.js should pass jshint.'); 
  });

});
define('d3-demo/tests/routes/demo2.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/demo2.js should pass jshint', function() { 
    ok(false, 'routes/demo2.js should pass jshint.\nroutes/demo2.js: line 9, col 15, \'faker\' is not defined.\nroutes/demo2.js: line 10, col 15, \'faker\' is not defined.\nroutes/demo2.js: line 12, col 25, \'faker\' is not defined.\nroutes/demo2.js: line 15, col 19, \'faker\' is not defined.\nroutes/demo2.js: line 16, col 20, \'faker\' is not defined.\nroutes/demo2.js: line 18, col 29, \'faker\' is not defined.\nroutes/demo2.js: line 21, col 25, \'faker\' is not defined.\nroutes/demo2.js: line 22, col 27, \'faker\' is not defined.\nroutes/demo2.js: line 28, col 25, \'faker\' is not defined.\n\n9 errors'); 
  });

});
define('d3-demo/tests/test-helper', ['d3-demo/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('d3-demo/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('d3-demo/tests/unit/controllers/demo1-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:demo1", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('d3-demo/tests/unit/controllers/demo1-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/demo1-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/demo1-test.js should pass jshint.'); 
  });

});
define('d3-demo/tests/unit/routes/demo1-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:demo1", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('d3-demo/tests/unit/routes/demo1-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/demo1-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/demo1-test.js should pass jshint.'); 
  });

});
define('d3-demo/tests/unit/routes/demo2-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:demo2", {});

  ember_qunit.test("it exists", function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('d3-demo/tests/unit/routes/demo2-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/demo2-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/demo2-test.js should pass jshint.'); 
  });

});
define('d3-demo/tests/unit/views/demo1-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:demo1");

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var view = this.subject();
    assert.ok(view);
  });

});
define('d3-demo/tests/unit/views/demo1-test.jshint', function () {

  'use strict';

  module('JSHint - unit/views');
  test('unit/views/demo1-test.js should pass jshint', function() { 
    ok(true, 'unit/views/demo1-test.js should pass jshint.'); 
  });

});
define('d3-demo/tests/unit/views/demo2-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:demo2");

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var view = this.subject();
    assert.ok(view);
  });

});
define('d3-demo/tests/unit/views/demo2-test.jshint', function () {

  'use strict';

  module('JSHint - unit/views');
  test('unit/views/demo2-test.js should pass jshint', function() { 
    ok(true, 'unit/views/demo2-test.js should pass jshint.'); 
  });

});
define('d3-demo/tests/views/demo1.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/demo1.js should pass jshint', function() { 
    ok(false, 'views/demo1.js should pass jshint.\nviews/demo1.js: line 30, col 37, \'faker\' is not defined.\nviews/demo1.js: line 98, col 38, \'faker\' is not defined.\nviews/demo1.js: line 27, col 13, \'bound\' is defined but never used.\nviews/demo1.js: line 72, col 28, \'r\' is defined but never used.\nviews/demo1.js: line 84, col 33, \'d\' is defined but never used.\nviews/demo1.js: line 98, col 33, \'d\' is defined but never used.\nviews/demo1.js: line 149, col 17, \'text\' is defined but never used.\nviews/demo1.js: line 113, col 38, \'i\' is defined but never used.\nviews/demo1.js: line 121, col 34, \'i\' is defined but never used.\nviews/demo1.js: line 121, col 31, \'d\' is defined but never used.\nviews/demo1.js: line 133, col 40, \'i\' is defined but never used.\nviews/demo1.js: line 142, col 34, \'i\' is defined but never used.\nviews/demo1.js: line 142, col 31, \'d\' is defined but never used.\nviews/demo1.js: line 153, col 33, \'d\' is defined but never used.\n\n14 errors'); 
  });

});
define('d3-demo/tests/views/demo2.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/demo2.js should pass jshint', function() { 
    ok(false, 'views/demo2.js should pass jshint.\nviews/demo2.js: line 178, col 44, Expected \'{\' and instead saw \'return\'.\nviews/demo2.js: line 181, col 36, Expected \'{\' and instead saw \'return\'.\nviews/demo2.js: line 63, col 37, \'d\' is defined but never used.\nviews/demo2.js: line 72, col 30, \'d\' is defined but never used.\n\n4 errors'); 
  });

});
define('d3-demo/views/demo1', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].View.extend({

        classNames: ["demo1"],

        width: window.innerWidth * 0.95,
        height: window.innerHeight,

        strokeWidth: 3,
        rows: 1,
        padding: 5,
        fill: d3.scale.category10,

        onInsertion: (function () {
            this.fireRedraw();
        }).on("didInsertElement"),

        dataBinding: "controller.model.data",

        draw: function draw() {
            var $this = this.$();
            $this.empty();

            var width = this.get("width"),
                height = this.get("height"),
                bound = Math.min(width, height),
                data = this.get("data");

            data.forEach(function (d) {
                return d.terms = faker.lorem.words(5);
            });

            var nodes = [],
                foci = [],
                fill = this.get("fill"),
                _id = 0,
                padding = this.get("padding"),
                strokeWidth = this.get("strokeWidth"),
                rows = this.get("rows"),
                cols = Math.ceil(data.length / rows),
                radius = (width - (padding * data.length + 1)) / data.length / 2;

            var svg = d3.select(this.get("element")).append("svg").attr("height", height).attr("width", width);

            data.forEach(function (d, i) {
                d.foci = i;
                d._id = _id++;
                nodes.push(d);

                var row = Math.floor(i / cols),
                    col = Math.floor(i % cols),
                    yCenter = row * (radius * 2 + padding) + radius + padding,
                    xCenter = col * (radius * 2 + padding) + radius + padding;
                var point = { x: xCenter, y: yCenter };
                foci.push(point);
                d.x = foci[d.foci].x;
                d.y = foci[d.foci].y;
            });

            var node = svg.selectAll("g.entity").data(nodes).enter().append("g").attr("class", "entity").attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

            function updateCircle() {
                d3.select(this).transition().duration(300).ease("linear").attr("r", function (r) {
                    return radius;
                });
            }

            node.append("circle").style("stroke", function (d) {
                return d3.rgb(fill(d.foci)).darker(2);
            }).style("fill", function (d) {
                return d3.rgb(fill(d.foci));
            }).style("stroke-width", strokeWidth).each(updateCircle);

            // Suppose the image is square, and is centered in a circle with radius r.
            // Then, the square image should hit at 45 degrees, meaning that the width
            // and height should be 2*sin(tao/8) * r
            var imageWH = function imageWH(d) {
                return 2 * Math.sin(6.28 / 8) * (radius - strokeWidth);
            };

            function updateImage() {
                d3.select(this).transition().duration(300).ease("linear").attr("x", function (d) {
                    return -imageWH(d) / 2;
                }).attr("y", function (d) {
                    return -imageWH(d) / 2;
                }).attr("width", imageWH).attr("height", imageWH);
            }

            node.append("image").attr("xlink:href", function (d) {
                return faker.internet.avatar();
            }).each(updateImage);

            node.on("click", function (n) {
                return selectNode(n._id);
            });

            var currentId = -1;

            function selectNode(id) {
                currentId = id;

                // first move old center back
                var others = d3.selectAll("g.entity").filter(function (d) {
                    return d._id !== id;
                });
                others.each(function (d, i) {
                    d.x = foci[d.foci].x;
                    d.y = foci[d.foci].y;
                    d3.select(this).transition().duration(300).ease("linear").attr("transform", function (d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    });
                }).each(function (d, i) {
                    d3.select(this).select("circle").transition().duration(300).ease("linear").attr("r", radius);
                });
                others.select("text").remove();

                // now, move to the center
                var selected = d3.selectAll("g.entity").filter(function (d) {
                    return d._id === id;
                });
                selected.each(function (d, i) {
                    d.x = width / 2 - radius;
                    d.y = height / 2 - radius;
                    d3.select(this).transition().duration(300).ease("linear").attr("transform", function (d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    });
                }).each(function (d, i) {
                    d3.select(this).select("circle").transition().duration(300).ease("linear").attr("r", radius * 1.5);
                });

                // add text
                var text = selected.append("text").text(function (d) {
                    return d.terms.join(" ");
                }).each(function (d) {
                    // need to get the text width
                    var box = this.getBBox();
                    d3.select(this).attr("x", -box.width / 2).attr("y", radius * 1.5 + box.height);
                });

                Ember['default'].run.later(this, selectNode, (currentId + 1) % data.length, 2000);
            }
            Ember['default'].run.later(this, selectNode, (currentId + 1) % data.length, 2000);
        },

        fireRedraw: (function () {
            d3.select(this.get("element")).selectAll("*").remove();
            Ember['default'].run.once(this, this.draw);
        }).observes("width", "height", "data")

    });

});
define('d3-demo/views/demo2', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].View.extend({

        classNames: ["demo2"],

        width: window.innerHeight * 2 / 3,
        height: window.innerHeight * 2 / 3,

        dataBinding: "controller.model.data",

        onInsertion: (function () {
            this.fireRedraw();
        }).on("didInsertElement"),

        draw: function draw() {
            var $this = this.$();
            $this.empty();

            var w = this.get("width"),
                h = this.get("height"),
                bound = Math.min(w, h),
                root = this.get("data"),
                node,
                link;

            root.x = w / 2;
            root.y = h / 2 - 80;

            var force = d3.layout.force().on("tick", tick).size([w, h]);

            var vis = d3.select(this.get("element")).append("svg:svg").attr("width", w).attr("height", h);

            update();

            function update() {
                var nodes = flatten(root),
                    links = d3.layout.tree().links(nodes);

                var volExtent = d3.extent(nodes, function (d) {
                    return d.volume;
                }),
                    radius = d3.scale.linear().domain(volExtent).range([bound / 80, bound / 20]);

                function hover(d) {
                    d3.selectAll("circle").classed("active", false);

                    d3.select(this).attr("r", function (d) {
                        return radius(d.volume) * (d.type === "leaf" ? 2 : 1);
                    }).classed("active", true);

                    vis.selectAll("text").remove();

                    vis.append("text").text(d.label || d.title).each(function (d) {
                        // need to get the text width
                        var box = this.getBBox();
                        d3.select(this).attr("x", w / 2 - box.width / 2).attr("y", h - box.height);
                    });
                }

                function unhover(d) {
                    d3.select(this).attr("r", function (d) {
                        return radius(d.volume);
                    });
                }

                // Restart the force layout.
                force.nodes(nodes).links(links).charge(function (d) {
                    return d.type === "leaf" ? -100 : -d.volume * 2;
                }).linkDistance(function (d) {
                    return d.target.type === "leaf" ? 50 : 80;
                }).start();

                // Update the links…
                link = vis.selectAll("line.link").data(links, function (d) {
                    return d.target.id;
                });

                // Enter any new links.
                link.enter().insert("svg:line", ".node").attr("class", "link").attr("x1", function (d) {
                    return d.source.x;
                }).attr("y1", function (d) {
                    return d.source.y;
                }).attr("x2", function (d) {
                    return d.target.x;
                }).attr("y2", function (d) {
                    return d.target.y;
                });

                // Exit any old links.
                link.exit().remove();

                // Update the nodes…
                node = vis.selectAll("circle.node").data(nodes, function (d) {
                    return d.id;
                }).style("fill", color);

                node.transition().attr("r", function (d) {
                    return Math.sqrt(d.volume);
                });

                // Enter any new nodes.
                node.enter().append("svg:circle").attr("class", "node").attr("cx", function (d) {
                    return d.x;
                }).attr("cy", function (d) {
                    return d.y;
                }).each(unhover).style("fill", color).on("click", click).on("mouseover", hover).on("mouseout", unhover).call(force.drag);

                // Exit any old nodes.
                node.exit().remove();
            }

            function tick() {
                link.attr("x1", function (d) {
                    return d.source.x;
                }).attr("y1", function (d) {
                    return d.source.y;
                }).attr("x2", function (d) {
                    return d.target.x;
                }).attr("y2", function (d) {
                    return d.target.y;
                });

                node.attr("cx", function (d) {
                    return d.x;
                }).attr("cy", function (d) {
                    return d.y;
                });
            }

            // Color leaf nodes orange, and packages white or blue.
            function color(d) {
                return d._stories || d._rel ? "#3182bd" : d.stories || d.rel ? "#c6dbef" : "#fd8d3c";
            }

            // Toggle children on click.
            function click(d) {

                if (d3.event.defaultPrevented) {
                    return;
                } // actually a drag event

                // leaf nodes don't force a re-render
                if (d.type === "leaf") {
                    return;
                }if (d.children) {
                    d._stories = d.stories;
                    d._rel = d.rel;
                    d.stories = null;
                    d.rel = null;
                    d.children = null;
                } else {
                    d.stories = d._stories;
                    d.rel = d._rel;
                    d._stories = null;
                    d._rel = null;
                }
                update();
            }

            // Returns a list of all nodes under the root.
            function flatten(root) {
                var nodes = [],
                    i = 0;

                function recurse(node) {

                    var vol = node.volume || 0;

                    if (node.stories) {
                        vol += node.stories.reduce(function (p, v) {
                            v.type = "leaf";
                            return p + recurse(v);
                        }, 0);
                        node.children = (node.children || []).concat(node.stories);
                    }

                    if (node.rel) {
                        vol += node.rel.reduce(function (p, v) {
                            return p + recurse(v);
                        }, 0);
                        node.children = (node.children || []).concat(node.rel);
                    }

                    if (!node.id) {
                        node.id = ++i;
                    }
                    nodes.push(node);
                    if (!node.volume) {
                        node.volume = vol;
                    }
                    return vol;
                }

                recurse(root);
                return nodes;
            }
        },

        fireRedraw: (function () {
            d3.select(this.get("element")).selectAll("*").remove();
            Ember['default'].run.once(this, this.draw);
        }).observes("width", "height", "data")

    });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('d3-demo/config/environment', ['ember'], function(Ember) {
  var prefix = 'd3-demo';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("d3-demo/tests/test-helper");
} else {
  require("d3-demo/app")["default"].create({"name":"d3-demo","version":"0.0.0."});
}

/* jshint ignore:end */
//# sourceMappingURL=d3-demo.map