"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,n,a,t,l){var r;n["default"].MODEL_FACTORY_INJECTIONS=!0,r=n["default"].Application.extend({modulePrefix:l["default"].modulePrefix,podModulePrefix:l["default"].podModulePrefix,Resolver:a["default"]}),(0,t["default"])(r,l["default"].modulePrefix),e["default"]=r}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,n,a){var t=a["default"].APP.name,l=a["default"].APP.version;e["default"]=n["default"].extend({version:l,name:t})}),define("dummy/components/code-snippet",["exports","ember","dummy/snippets"],function(e,n,a){var t=require("highlight.js");e["default"]=n["default"].Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e;for(var n,a,t=e.split("\n"),l=0;l<t.length;l++)n=/^\s*/.exec(t[l]),n&&("undefined"==typeof a||a>n[0].length)&&(a=n[0].length);return"undefined"!=typeof a&&a>0&&(e=e.replace(new RegExp("(\\n|^)\\s{"+a+"}","g"),"$1")),e},source:n["default"].computed("name",function(){return this._unindent((a["default"][this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){t.highlightBlock(this.get("element"))},language:n["default"].computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"));if(e)switch(e[1].toLowerCase()){case"js":return"javascript";case"hbs":return"handlebars";case"css":return"css";case"scss":return"scss"}})})}),define("dummy/components/custom-end-handle",["exports","ember"],function(e,n){e["default"]=n["default"].Component.extend({classNames:["CustomHandle","CustomHandle--end"],classNameBindings:["isSliding"],attributeBindings:["style"],isSliding:!1})}),define("dummy/components/custom-start-handle",["exports","ember"],function(e,n){e["default"]=n["default"].Component.extend({classNames:["CustomHandle","CustomHandle--start"],classNameBindings:["isSliding"],attributeBindings:["style"],isSliding:!1})}),define("dummy/components/ember-range-slider-handle",["exports","ember-range-slider/components/ember-range-slider-handle"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/ember-range-slider",["exports","ember-range-slider/components/ember-range-slider"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/components/one-way-input",["exports","ember-one-way-input/components/one-way-input"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n["default"]}})}),define("dummy/controllers/application",["exports","ember"],function(e,n){e["default"]=n["default"].Controller.extend({example1RangeStart:3e3,example1RangeEnd:6e3,example2RangeStart:3e3,example2RangeEnd:6e3,example2IsSliding:!1,example3RangeStart:25,example3RangeEnd:75,example4RangeStart:3e3,example4RangeEnd:6e3,actions:{example1RangeSliderChanging:function(e){this.set("example1RangeStart",e.start),this.set("example1RangeEnd",e.end)},example2RangeSliderChanged:function(e){this.set("example2RangeStart",e.start),this.set("example2RangeEnd",e.end)},example3RangeSliderChanging:function(e){this.set("example3RangeStart",e.start),this.set("example3RangeEnd",e.end)},example4RangeSliderChanging:function(e){this.set("example4RangeStart",Math.round(e.start)),this.set("example4RangeEnd",Math.round(e.end))},example4UpdateStart:function(e){this.set("example4RangeStart",Math.min(Math.max(1200,e),this.get("example4RangeEnd")))},example4UpdateEnd:function(e){this.set("example4RangeEnd",Math.min(Math.max(e,this.get("example4RangeStart")),8e3))}}})}),define("dummy/controllers/array",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,n,a){e["default"]={name:"App Version",initialize:(0,n["default"])(a["default"].APP.name,a["default"].APP.version)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,a){function t(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var t,l=a["default"].exportApplicationGlobal;t="string"==typeof l?l:n["default"].String.classify(a["default"].modulePrefix),window[t]||(window[t]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[t]}}))}}e.initialize=t,e["default"]={name:"export-application-global",initialize:t}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,a){var t=n["default"].Router.extend({location:a["default"].locationType});t.map(function(){}),e["default"]=t}),define("dummy/snippets",["exports"],function(e){e["default"]={"example1.hbs":"  {{ember-range-slider\n    min=1200\n    max=8000\n    start=example1RangeStart\n    end=example1RangeEnd\n    rangeChanging=(action 'example1RangeSliderChanging')\n  }}","example2.hbs":"  {{ember-range-slider\n    min=1200\n    max=8000\n    start=example2RangeStart\n    end=example2RangeEnd\n    rangeChanged=(action 'example2RangeSliderChanged')\n    isSlidingChanged=(action (mut example2IsSliding))\n  }}","example3.hbs":'  {{ember-range-slider\n    min=0\n    max=100\n    start=example3RangeStart\n    end=example3RangeEnd\n    startHandleComponentKey="custom-start-handle"\n    endHandleComponentKey="custom-end-handle"\n    rangeChanging=(action \'example3RangeSliderChanging\')\n  }}',"example4.hbs":"  {{ember-range-slider\n    min=1200\n    max=8000\n    start=example4RangeStart\n    end=example4RangeEnd\n    rangeChanging=(action 'example4RangeSliderChanging')\n  }}\n  <div>\n    {{one-way-input value=example4RangeStart placeholder=1200 onenter=(action 'example4UpdateStart')}}\n    -\n    {{one-way-input value=example4RangeEnd placeholder=8000 onenter=(action 'example4UpdateEnd')}}\n  </div>\n"}}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:89,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),a=e.createElement("h1");e.setAttribute(a,"id","title");var t=e.createTextNode("ember-range-slider");e.appendChild(a,t),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","example example-1");var t=e.createTextNode("\n  ");e.appendChild(a,t);var t=e.createElement("p"),l=e.createTextNode('Example using "rangeChanging" action, which fires continuously as sliders move.');e.appendChild(t,l),e.appendChild(a,t);var t=e.createTextNode("\n  ");e.appendChild(a,t);var t=e.createComment("");e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t);var t=e.createTextNode("  ");e.appendChild(a,t);var t=e.createComment("");e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t);var t=e.createTextNode("  ");e.appendChild(a,t);var t=e.createElement("ul"),l=e.createTextNode("\n    ");e.appendChild(t,l);var l=e.createElement("li"),r=e.createTextNode("start: ");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r),e.appendChild(t,l);var l=e.createTextNode("\n    ");e.appendChild(t,l);var l=e.createElement("li"),r=e.createTextNode("end: ");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r),e.appendChild(t,l);var l=e.createTextNode("\n  ");e.appendChild(t,l),e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","example example-2");var t=e.createTextNode("\n  ");e.appendChild(a,t);var t=e.createElement("p"),l=e.createTextNode('Example using "rangeChanged" action, which fires once slider is released.\n     This example also demonstrated the "isSlidingChanged" action, which fires\n     when the user begins sliding with false, and when then complete sliding,\n     with true.');e.appendChild(t,l),e.appendChild(a,t);var t=e.createTextNode("\n  ");e.appendChild(a,t);var t=e.createComment("");e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t);var t=e.createTextNode("  ");e.appendChild(a,t);var t=e.createComment("");e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t);var t=e.createTextNode("  ");e.appendChild(a,t);var t=e.createElement("ul"),l=e.createTextNode("\n    ");e.appendChild(t,l);var l=e.createElement("li"),r=e.createTextNode("start: ");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r),e.appendChild(t,l);var l=e.createTextNode("\n    ");e.appendChild(t,l);var l=e.createElement("li"),r=e.createTextNode("end: ");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r),e.appendChild(t,l);var l=e.createTextNode("\n    ");e.appendChild(t,l);var l=e.createElement("li"),r=e.createTextNode("isSliding: ");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r),e.appendChild(t,l);var l=e.createTextNode("\n  ");e.appendChild(t,l),e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","example example-3");var t=e.createTextNode("\n  ");e.appendChild(a,t);var t=e.createElement("p"),l=e.createTextNode("Example of supplying your own component for the slider handles.");e.appendChild(t,l),e.appendChild(a,t);var t=e.createTextNode("\n  ");e.appendChild(a,t);var t=e.createComment("");e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t);var t=e.createTextNode("  ");e.appendChild(a,t);var t=e.createComment("");e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t);var t=e.createTextNode("  ");e.appendChild(a,t);var t=e.createElement("ul"),l=e.createTextNode("\n    ");e.appendChild(t,l);var l=e.createElement("li"),r=e.createTextNode("start: ");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r),e.appendChild(t,l);var l=e.createTextNode("\n    ");e.appendChild(t,l);var l=e.createElement("li"),r=e.createTextNode("end: ");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r),e.appendChild(t,l);var l=e.createTextNode("\n  ");e.appendChild(t,l),e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","example example-4");var t=e.createTextNode("\n  ");e.appendChild(a,t);var t=e.createElement("p"),l=e.createTextNode("Example of text fields working in concert with slider. Press enter after editing a text field value.");e.appendChild(t,l),e.appendChild(a,t);var t=e.createTextNode("\n  ");e.appendChild(a,t);var t=e.createComment("");e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t);var t=e.createTextNode("  ");e.appendChild(a,t);var t=e.createComment("");e.appendChild(a,t);var t=e.createTextNode("\n  ");e.appendChild(a,t);var t=e.createElement("div"),l=e.createTextNode("\n    ");e.appendChild(t,l);var l=e.createComment("");e.appendChild(t,l);var l=e.createTextNode("\n    -\n    ");e.appendChild(t,l);var l=e.createComment("");e.appendChild(t,l);var l=e.createTextNode("\n  ");e.appendChild(t,l),e.appendChild(a,t);var t=e.createTextNode("\n\n");e.appendChild(a,t);var t=e.createTextNode("  ");e.appendChild(a,t);var t=e.createElement("ul"),l=e.createTextNode("\n    ");e.appendChild(t,l);var l=e.createElement("li"),r=e.createTextNode("start: ");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r),e.appendChild(t,l);var l=e.createTextNode("\n    ");e.appendChild(t,l);var l=e.createElement("li"),r=e.createTextNode("end: ");e.appendChild(l,r);var r=e.createComment("");e.appendChild(l,r),e.appendChild(t,l);var l=e.createTextNode("\n  ");e.appendChild(t,l),e.appendChild(a,t);var t=e.createTextNode("\n");e.appendChild(a,t),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),n},buildRenderNodes:function(e,n,a){var t=e.childAt(n,[4]),l=e.childAt(t,[9]),r=e.childAt(n,[6]),d=e.childAt(r,[9]),i=e.childAt(n,[8]),p=e.childAt(i,[9]),o=e.childAt(n,[10]),m=e.childAt(o,[8]),c=e.childAt(o,[11]),s=new Array(20);return s[0]=e.createMorphAt(n,2,2,a),s[1]=e.createMorphAt(t,3,3),s[2]=e.createMorphAt(t,6,6),s[3]=e.createMorphAt(e.childAt(l,[1]),1,1),s[4]=e.createMorphAt(e.childAt(l,[3]),1,1),s[5]=e.createMorphAt(r,3,3),s[6]=e.createMorphAt(r,6,6),s[7]=e.createMorphAt(e.childAt(d,[1]),1,1),s[8]=e.createMorphAt(e.childAt(d,[3]),1,1),s[9]=e.createMorphAt(e.childAt(d,[5]),1,1),s[10]=e.createMorphAt(i,3,3),s[11]=e.createMorphAt(i,6,6),s[12]=e.createMorphAt(e.childAt(p,[1]),1,1),s[13]=e.createMorphAt(e.childAt(p,[3]),1,1),s[14]=e.createMorphAt(o,3,3),s[15]=e.createMorphAt(o,6,6),s[16]=e.createMorphAt(m,1,1),s[17]=e.createMorphAt(m,3,3),s[18]=e.createMorphAt(e.childAt(c,[1]),1,1),s[19]=e.createMorphAt(e.childAt(c,[3]),1,1),s},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]],["inline","code-snippet",[],["name","example1.hbs"],["loc",[null,[7,2],[7,38]]]],["inline","ember-range-slider",[],["min",1200,"max",8e3,"start",["subexpr","@mut",[["get","example1RangeStart",["loc",[null,[12,10],[12,28]]]]],[],[]],"end",["subexpr","@mut",[["get","example1RangeEnd",["loc",[null,[13,8],[13,24]]]]],[],[]],"rangeChanging",["subexpr","action",["example1RangeSliderChanging"],[],["loc",[null,[14,18],[14,56]]]]],["loc",[null,[9,2],[15,4]]]],["content","example1RangeStart",["loc",[null,[18,15],[18,37]]]],["content","example1RangeEnd",["loc",[null,[19,13],[19,33]]]],["inline","code-snippet",[],["name","example2.hbs"],["loc",[null,[28,2],[28,38]]]],["inline","ember-range-slider",[],["min",1200,"max",8e3,"start",["subexpr","@mut",[["get","example2RangeStart",["loc",[null,[33,10],[33,28]]]]],[],[]],"end",["subexpr","@mut",[["get","example2RangeEnd",["loc",[null,[34,8],[34,24]]]]],[],[]],"rangeChanged",["subexpr","action",["example2RangeSliderChanged"],[],["loc",[null,[35,17],[35,54]]]],"isSlidingChanged",["subexpr","action",[["subexpr","mut",[["get","example2IsSliding",["loc",[null,[36,34],[36,51]]]]],[],["loc",[null,[36,29],[36,52]]]]],[],["loc",[null,[36,21],[36,53]]]]],["loc",[null,[30,2],[37,4]]]],["content","example2RangeStart",["loc",[null,[40,15],[40,37]]]],["content","example2RangeEnd",["loc",[null,[41,13],[41,33]]]],["content","example2IsSliding",["loc",[null,[42,19],[42,40]]]],["inline","code-snippet",[],["name","example3.hbs"],["loc",[null,[48,2],[48,38]]]],["inline","ember-range-slider",[],["min",0,"max",100,"start",["subexpr","@mut",[["get","example3RangeStart",["loc",[null,[53,10],[53,28]]]]],[],[]],"end",["subexpr","@mut",[["get","example3RangeEnd",["loc",[null,[54,8],[54,24]]]]],[],[]],"startHandleComponentKey","custom-start-handle","endHandleComponentKey","custom-end-handle","rangeChanging",["subexpr","action",["example3RangeSliderChanging"],[],["loc",[null,[57,18],[57,56]]]]],["loc",[null,[50,2],[58,4]]]],["content","example3RangeStart",["loc",[null,[61,15],[61,37]]]],["content","example3RangeEnd",["loc",[null,[62,13],[62,33]]]],["inline","code-snippet",[],["name","example4.hbs"],["loc",[null,[68,2],[68,38]]]],["inline","ember-range-slider",[],["min",1200,"max",8e3,"start",["subexpr","@mut",[["get","example4RangeStart",["loc",[null,[73,10],[73,28]]]]],[],[]],"end",["subexpr","@mut",[["get","example4RangeEnd",["loc",[null,[74,8],[74,24]]]]],[],[]],"rangeChanging",["subexpr","action",["example4RangeSliderChanging"],[],["loc",[null,[75,18],[75,56]]]]],["loc",[null,[70,2],[76,4]]]],["inline","one-way-input",[],["value",["subexpr","@mut",[["get","example4RangeStart",["loc",[null,[78,26],[78,44]]]]],[],[]],"placeholder",1200,"onenter",["subexpr","action",["example4UpdateStart"],[],["loc",[null,[78,70],[78,100]]]]],["loc",[null,[78,4],[78,102]]]],["inline","one-way-input",[],["value",["subexpr","@mut",[["get","example4RangeEnd",["loc",[null,[80,26],[80,42]]]]],[],[]],"placeholder",8e3,"onenter",["subexpr","action",["example4UpdateEnd"],[],["loc",[null,[80,68],[80,96]]]]],["loc",[null,[80,4],[80,98]]]],["content","example4RangeStart",["loc",[null,[85,15],[85,37]]]],["content","example4RangeEnd",["loc",[null,[86,13],[86,33]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/code-snippet",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/code-snippet.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),n},buildRenderNodes:function(e,n,a){var t=new Array(1);return t[0]=e.createMorphAt(n,0,0,a),e.insertBoundary(n,0),t},statements:[["content","source",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var n="dummy";try{var a=n+"/config/environment",t=e["default"].$('meta[name="'+a+'"]').attr("content"),l=JSON.parse(unescape(t));return{"default":l}}catch(r){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-range-slider",version:"0.1.0+201e13ec"});