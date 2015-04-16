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
