import { moduleFor, test } from "ember-qunit";

moduleFor("route:demo1", {});

test("it exists", function (assert) {
  var route = this.subject();
  assert.ok(route);
});

// Specify the other units that are required for this test.
// needs: ['controller:foo']