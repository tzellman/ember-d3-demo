define("d3-demo/app",["exports","ember","ember/resolver","ember/load-initializers","d3-demo/config/environment"],function(e,t,n,r,a){"use strict";t["default"].MODEL_FACTORY_INJECTIONS=!0;var i=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]});r["default"](i,a["default"].modulePrefix),e["default"]=i}),define("d3-demo/initializers/app-version",["exports","d3-demo/config/environment","ember"],function(e,t,n){"use strict";var r=n["default"].String.classify,a=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!a){var o=r(i.toString());n["default"].libraries.register(o,t["default"].APP.version),a=!0}}}}),define("d3-demo/initializers/export-application-global",["exports","ember","d3-demo/config/environment"],function(e,t,n){"use strict";function r(e,r){var a=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[a]&&(window[a]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("d3-demo/router",["exports","ember","d3-demo/config/environment"],function(e,t,n){"use strict";var r=t["default"].Router.extend({location:n["default"].locationType});e["default"]=r.map(function(){this.route("demo1"),this.route("demo2")})}),define("d3-demo/routes/demo1",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(){return{data:[{label:"1",value:10},{label:"2",value:20},{label:"3",value:15},{label:"4",value:5},{label:"5",value:5},{label:"5",value:5},{label:"5",value:5},{label:"5",value:5},{label:"5",value:5}]}}})}),define("d3-demo/routes/demo2",["exports","ember"],function(e,t){"use strict";function n(e){e||(e=0);var t={};t.label=faker.lorem.words(1)[0],t.image=faker.internet.avatar(),t.stories=[];for(var r=0;r<faker.random.number({min:3,max:7});++r){var a={};t.stories.push(a),a.title=faker.lorem.sentence(3,8),a.volume=faker.random.number(50),a.examples=[];for(var i=0;i<faker.random.number({min:2,max:7});++i){var o={};a.examples.push(o),o.content=faker.lorem.sentence(5,20),o.published=faker.date.recent()}}if(0===e)for(t.rel=[],r=0;r<faker.random.number({min:5,max:10});++r)t.rel.push(n(e+1));return t}e["default"]=t["default"].Route.extend({model:function(){return{data:n()}}})}),define("d3-demo/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var r=t.dom,a=t.hooks,i=a.content;r.detectNamespace(n);var o;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(o=this.build(r),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=r.cloneNode(this.cachedFragment,!0))):o=this.build(r);var d=r.createMorphAt(o,0,0,n);return r.insertBoundary(o,0),i(t,d,e,"outlet"),o}}}())}),define("d3-demo/templates/demo2",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var r=t.dom,a=t.hooks,i=a.content;r.detectNamespace(n);var o;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(o=this.build(r),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=r.cloneNode(this.cachedFragment,!0))):o=this.build(r);var d=r.createMorphAt(o,0,0,n);return r.insertBoundary(o,0),i(t,d,e,"outlet"),o}}}())}),define("d3-demo/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Demo1");return e.appendChild(t,n),t},render:function(e,t,n){var r=t.dom;r.detectNamespace(n);var a;return t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(a=this.build(r),this.hasRendered?this.cachedFragment=a:this.hasRendered=!0),this.cachedFragment&&(a=r.cloneNode(this.cachedFragment,!0))):a=this.build(r),a}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Demo2");return e.appendChild(t,n),t},render:function(e,t,n){var r=t.dom;r.detectNamespace(n);var a;return t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(a=this.build(r),this.hasRendered?this.cachedFragment=a:this.hasRendered=!0),this.cachedFragment&&(a=r.cloneNode(this.cachedFragment,!0))):a=this.build(r),a}}}();return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(n,r,a){var i=r.dom,o=r.hooks,d=o.block;i.detectNamespace(a);var l;r.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(l=this.build(i),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=i.cloneNode(this.cachedFragment,!0))):l=this.build(i);var c=i.createMorphAt(l,0,0,a),s=i.createMorphAt(l,4,4,a);return i.insertBoundary(l,0),d(r,c,n,"link-to",["demo1"],{},e,null),d(r,s,n,"link-to",["demo2"],{},t,null),l}}}())}),define("d3-demo/views/demo1",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({classNames:["demo1"],width:.95*window.innerWidth,height:window.innerHeight,strokeWidth:3,rows:1,padding:5,fill:d3.scale.category10,onInsertion:function(){this.fireRedraw()}.on("didInsertElement"),dataBinding:"controller.model.data",draw:function(){function e(){d3.select(this).transition().duration(300).ease("linear").attr("r",function(e){return p})}function n(){d3.select(this).transition().duration(300).ease("linear").attr("x",function(e){return-b(e)/2}).attr("y",function(e){return-b(e)/2}).attr("width",b).attr("height",b)}function r(e){y=e;var n=d3.selectAll("g.entity").filter(function(t){return t._id!==e});n.each(function(e,t){e.x=c[e.foci].x,e.y=c[e.foci].y,d3.select(this).transition().duration(300).ease("linear").attr("transform",function(e){return"translate("+e.x+","+e.y+")"})}).each(function(e,t){d3.select(this).select("circle").transition().duration(300).ease("linear").attr("r",p)}),n.select("text").remove();var a=d3.selectAll("g.entity").filter(function(t){return t._id===e});a.each(function(e,t){e.x=i/2-p,e.y=o/2-p,d3.select(this).transition().duration(300).ease("linear").attr("transform",function(e){return"translate("+e.x+","+e.y+")"})}).each(function(e,t){d3.select(this).select("circle").transition().duration(300).ease("linear").attr("r",1.5*p)});a.append("text").text(function(e){return e.terms.join(" ")}).each(function(e){var t=this.getBBox();d3.select(this).attr("x",-t.width/2).attr("y",1.5*p+t.height)});t["default"].run.later(this,r,(y+1)%d.length,2e3)}var a=this.$();a.empty();var i=this.get("width"),o=this.get("height"),d=(Math.min(i,o),this.get("data"));d.forEach(function(e){return e.terms=faker.lorem.words(5)});var l=[],c=[],s=this.get("fill"),u=0,h=this.get("padding"),f=this.get("strokeWidth"),m=this.get("rows"),g=Math.ceil(d.length/m),p=(i-(h*d.length+1))/d.length/2,v=d3.select(this.get("element")).append("svg").attr("height",o).attr("width",i);d.forEach(function(e,t){e.foci=t,e._id=u++,l.push(e);var n=Math.floor(t/g),r=Math.floor(t%g),a=n*(2*p+h)+p+h,i=r*(2*p+h)+p+h,o={x:i,y:a};c.push(o),e.x=c[e.foci].x,e.y=c[e.foci].y});var x=v.selectAll("g.entity").data(l).enter().append("g").attr("class","entity").attr("transform",function(e){return"translate("+e.x+","+e.y+")"});x.append("circle").style("stroke",function(e){return d3.rgb(s(e.foci)).darker(2)}).style("fill",function(e){return d3.rgb(s(e.foci))}).style("stroke-width",f).each(e);var b=function(e){return 2*Math.sin(.785)*(p-f)};x.append("image").attr("xlink:href",function(e){return faker.internet.avatar()}).each(n),x.on("click",function(e){return r(e._id)});var y=-1;t["default"].run.later(this,r,(y+1)%d.length,2e3)},fireRedraw:function(){d3.select(this.get("element")).selectAll("*").remove(),t["default"].run.once(this,this.draw)}.observes("width","height","data")})}),define("d3-demo/views/demo2",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({classNames:["demo2"],width:2*window.innerHeight/3,height:2*window.innerHeight/3,dataBinding:"controller.model.data",onInsertion:function(){this.fireRedraw()}.on("didInsertElement"),draw:function(){function e(){function e(e){d3.selectAll("circle").classed("active",!1),d3.select(this).attr("r",function(e){return p(e.volume)*("leaf"===e.type?2:1)}).classed("active",!0),f.selectAll("text").remove(),f.append("text").text(e.label||e.title).each(function(e){var t=this.getBBox();d3.select(this).attr("x",l/2-t.width/2).attr("y",c-t.height)})}function t(e){d3.select(this).attr("r",function(e){return p(e.volume)})}var i=a(u),m=d3.layout.tree().links(i),g=d3.extent(i,function(e){return e.volume}),p=d3.scale.linear().domain(g).range([s/80,s/20]);h.nodes(i).links(m).charge(function(e){return"leaf"===e.type?-100:2*-e.volume}).linkDistance(function(e){return"leaf"===e.target.type?50:80}).start(),d=f.selectAll("line.link").data(m,function(e){return e.target.id}),d.enter().insert("svg:line",".node").attr("class","link").attr("x1",function(e){return e.source.x}).attr("y1",function(e){return e.source.y}).attr("x2",function(e){return e.target.x}).attr("y2",function(e){return e.target.y}),d.exit().remove(),o=f.selectAll("circle.node").data(i,function(e){return e.id}).style("fill",n),o.transition().attr("r",function(e){return Math.sqrt(e.volume)}),o.enter().append("svg:circle").attr("class","node").attr("cx",function(e){return e.x}).attr("cy",function(e){return e.y}).each(t).style("fill",n).on("click",r).on("mouseover",e).on("mouseout",t).call(h.drag),o.exit().remove()}function t(){d.attr("x1",function(e){return e.source.x}).attr("y1",function(e){return e.source.y}).attr("x2",function(e){return e.target.x}).attr("y2",function(e){return e.target.y}),o.attr("cx",function(e){return e.x}).attr("cy",function(e){return e.y})}function n(e){return e._stories||e._rel?"#3182bd":e.stories||e.rel?"#c6dbef":"#fd8d3c"}function r(t){d3.event.defaultPrevented||"leaf"!==t.type&&(t.children?(t._stories=t.stories,t._rel=t.rel,t.stories=null,t.rel=null,t.children=null):(t.stories=t._stories,t.rel=t._rel,t._stories=null,t._rel=null),e())}function a(e){function t(e){var a=e.volume||0;return e.stories&&(a+=e.stories.reduce(function(e,n){return n.type="leaf",e+t(n)},0),e.children=(e.children||[]).concat(e.stories)),e.rel&&(a+=e.rel.reduce(function(e,n){return e+t(n)},0),e.children=(e.children||[]).concat(e.rel)),e.id||(e.id=++r),n.push(e),e.volume||(e.volume=a),a}var n=[],r=0;return t(e),n}var i=this.$();i.empty();var o,d,l=this.get("width"),c=this.get("height"),s=Math.min(l,c),u=this.get("data");u.x=l/2,u.y=c/2-80;var h=d3.layout.force().on("tick",t).size([l,c]),f=d3.select(this.get("element")).append("svg:svg").attr("width",l).attr("height",c);e()},fireRedraw:function(){d3.select(this.get("element")).selectAll("*").remove(),t["default"].run.once(this,this.draw)}.observes("width","height","data")})}),define("d3-demo/config/environment",["ember"],function(e){var t="d3-demo";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("d3-demo/tests/test-helper"):require("d3-demo/app")["default"].create({name:"d3-demo",version:"0.0.0.80fc58d1"});