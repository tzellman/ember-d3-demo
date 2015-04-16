import Ember from "ember";

export default Ember.View.extend({

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
        Ember.run.once(this, this.draw);
    }).observes("width", "height", "data")

});