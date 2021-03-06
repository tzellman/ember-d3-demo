import Ember from 'ember';

export default Ember.View.extend({

    classNames : ["demo1"],

    width: window.innerWidth * 0.95,
    height: window.innerHeight,

    strokeWidth: 3,
    rows: 1,
    padding: 5,
    fill: d3.scale.category10,

    onInsertion: function () {
        this.fireRedraw();
    }.on("didInsertElement"),

    dataBinding: "controller.model.data",

    draw: function () {
        var $this = this.$();
        $this.empty();

        var width = this.get('width'),
            height = this.get('height'),
            bound = Math.min(width, height),
            data = this.get("data");

        data.forEach(d => d.terms = faker.lorem.words(5));

        var nodes = [],
            foci = [],
            fill = this.get("fill"),
            _id = 0,
            padding = this.get("padding"),
            strokeWidth = this.get("strokeWidth"),
            rows = this.get("rows"),
            cols = Math.ceil((data.length) / rows),
            radius = ((width - (padding * data.length + 1)) / data.length) / 2;

        var svg = d3.select(this.get("element")).append("svg")
            .attr("height", height)
            .attr("width", width);

        data.forEach((d, i) => {
            d.foci = i;
            d._id = _id++;
            nodes.push(d);

            var row = Math.floor(i / cols),
                col = Math.floor(i % cols),
                yCenter = (row * (radius * 2 + padding)) + radius + padding,
                xCenter = (col * (radius * 2 + padding)) + radius + padding;
            var point = {x: xCenter, y: yCenter};
            foci.push(point);
            d.x = foci[d.foci].x;
            d.y = foci[d.foci].y;
        });

        var node = svg.selectAll('g.entity')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', 'entity')
            .attr("transform", d => "translate(" + d.x + "," + d.y + ")");

        function updateCircle() {
            d3.select(this)
                .transition().duration(300)
                .ease("linear")
                .attr("r", r => radius);
        }

        node.append('circle')
            .style("stroke", d => d3.rgb(fill(d.foci)).darker(2))
            .style("fill", d => d3.rgb(fill(d.foci)))
            .style("stroke-width", strokeWidth)
            .each(updateCircle);

        // Suppose the image is square, and is centered in a circle with radius r.
        // Then, the square image should hit at 45 degrees, meaning that the width
        // and height should be 2*sin(tao/8) * r
        var imageWH = function (d) {
            return 2 * Math.sin(6.28 / 8) * (radius - strokeWidth);
        };

        function updateImage() {
            d3.select(this).transition().duration(300)
                .ease("linear")
                .attr("x", d => -imageWH(d) / 2)
                .attr("y", d => -imageWH(d) / 2)
                .attr("width", imageWH)
                .attr("height", imageWH);
        }

        node.append("image")
            .attr("xlink:href", d => faker.internet.avatar())
            .each(updateImage);

        node.on('click', n => selectNode(n._id));

        var currentId = -1;

        function selectNode(id) {
            currentId = id;

            // first move old center back
            var others = d3.selectAll("g.entity")
                .filter(function (d) {
                    return d._id !== id;
                });
            others.each(function (d, i) {
                d.x = foci[d.foci].x;
                d.y = foci[d.foci].y;
                d3.select(this)
                    .transition().duration(300).ease("linear")
                    .attr("transform", function (d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    });
            }).each(function (d, i) {
                d3.select(this).select("circle")
                    .transition().duration(300).ease("linear")
                    .attr("r", radius);
            });
            others.select("text").remove();

            // now, move to the center
            var selected = d3.selectAll("g.entity")
                .filter(function (d) {
                    return d._id === id;
                });
            selected.each(function (d, i) {
                d.x = width / 2 - radius;
                d.y = height / 2 - radius;
                d3.select(this)
                    .transition().duration(300).ease("linear")
                    .attr("transform", function (d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    });

            }).each(function (d, i) {
                d3.select(this).select("circle")
                    .transition().duration(300).ease("linear")
                    .attr("r", radius * 1.5);
            });

            // add text
            var text = selected.append('text')
                .text(function (d) {
                    return d.terms.join(" ");
                })
                .each(function (d) {
                    // need to get the text width
                    var box = this.getBBox();
                    d3.select(this)
                        .attr("x", -box.width / 2)
                        .attr("y", radius * 1.5 + box.height);
                });

            Ember.run.later(this, selectNode, (currentId + 1) % data.length, 2000);
        }
        Ember.run.later(this, selectNode, (currentId + 1) % data.length, 2000);
    },

    fireRedraw: function () {
        d3.select(this.get('element')).selectAll("*").remove();
        Ember.run.once(this, this.draw);
    }.observes("width", "height", "data")

});
