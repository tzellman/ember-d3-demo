define('d3-demo/tests/views/demo1.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/demo1.js should pass jshint', function() { 
    ok(false, 'views/demo1.js should pass jshint.\nviews/demo1.js: line 30, col 37, \'faker\' is not defined.\nviews/demo1.js: line 98, col 38, \'faker\' is not defined.\nviews/demo1.js: line 27, col 13, \'bound\' is defined but never used.\nviews/demo1.js: line 72, col 28, \'r\' is defined but never used.\nviews/demo1.js: line 84, col 33, \'d\' is defined but never used.\nviews/demo1.js: line 98, col 33, \'d\' is defined but never used.\nviews/demo1.js: line 149, col 17, \'text\' is defined but never used.\nviews/demo1.js: line 113, col 38, \'i\' is defined but never used.\nviews/demo1.js: line 121, col 34, \'i\' is defined but never used.\nviews/demo1.js: line 121, col 31, \'d\' is defined but never used.\nviews/demo1.js: line 133, col 40, \'i\' is defined but never used.\nviews/demo1.js: line 142, col 34, \'i\' is defined but never used.\nviews/demo1.js: line 142, col 31, \'d\' is defined but never used.\nviews/demo1.js: line 153, col 33, \'d\' is defined but never used.\n\n14 errors'); 
  });

});