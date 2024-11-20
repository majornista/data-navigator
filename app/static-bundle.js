(()=>{"use strict";var e={312:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NodeElementDefaults=t.GenericLimitedNavigationRules=t.GenericFullNavigationPairs=t.GenericFullNavigationDimensions=t.GenericFullNavigationRules=t.defaultKeyBindings=void 0,t.defaultKeyBindings={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",Period:"forward",Comma:"backward",Escape:"parent",Enter:"child"},t.GenericFullNavigationRules={down:{keyCode:"ArrowDown",direction:"target"},left:{keyCode:"ArrowLeft",direction:"source"},right:{keyCode:"ArrowRight",direction:"target"},up:{keyCode:"ArrowUp",direction:"source"},backward:{keyCode:"Comma",direction:"source"},child:{keyCode:"Enter",direction:"target"},parent:{keyCode:"Backspace",direction:"source"},forward:{keyCode:"Period",direction:"target"},exit:{keyCode:"Escape",direction:"target"},undo:{keyCode:"KeyZ",direction:"target"}},t.GenericFullNavigationDimensions=[["left","right"],["up","down"],["backward","forward"],["parent","child"]],t.GenericFullNavigationPairs={left:["left","right"],right:["left","right"],up:["up","down"],down:["up","down"],backward:["backward","forward"],forward:["backward","forward"],parent:["parent","child"],child:["parent","child"],exit:["exit","undo"],undo:["undo","undo"]},t.GenericLimitedNavigationRules={right:{key:"ArrowRight",direction:"target"},left:{key:"ArrowLeft",direction:"source"},down:{key:"ArrowDown",direction:"target"},up:{key:"ArrowUp",direction:"source"},child:{key:"Enter",direction:"target"},parent:{key:"Backspace",direction:"source"},exit:{key:"Escape",direction:"target"},undo:{key:"Period",direction:"target"},legend:{key:"KeyL",direction:"target"}},t.NodeElementDefaults={cssClass:"",spatialProperties:{x:0,y:0,width:0,height:0,path:""},semantics:{label:"",elementType:"div",role:"image",attributes:void 0},parentSemantics:{label:"",elementType:"figure",role:"figure",attributes:void 0},existingElement:{useForSpatialProperties:!1,spatialProperties:void 0}}},607:(e,t,n)=>{var a=n(4),i=n(489),r=n(992);t.Z={structure:a.default,input:i.default,rendering:r.default}},489:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var a=n(312);t.default=function(e){var t={},n=a.defaultKeyBindings,i=a.GenericFullNavigationRules;return t.moveTo=function(t){var n=e.structure.nodes[t];if(n)return n},t.move=function(n,a){if(n){var r=e.structure.nodes[n];if(r.edges){var s=null,o=0,l=i[a];if(!l)return;var d=function(){var t=e.structure.edges[r.edges[o]];if(t.navigationRules.forEach((function(e){s||(s=function(e,t){if(e!==a)return null;var i={target:"string"==typeof t.target?t.target:t.target(r,n),source:"string"==typeof t.source?t.source:t.source(r,n)};return i[l.direction]!==n?i[l.direction]:null}(e,t))})),s)return"break"};for(o=0;o<r.edges.length&&"break"!==d();o++);return s?t.moveTo(s):void 0}}},t.enter=function(){return e.entryPoint?t.moveTo(e.entryPoint):void console.error("No entry point was specified in InputOptions, returning undefined")},t.exit=function(){return e.exitPoint?e.exitPoint:void console.error("No exit point was specified in InputOptions, returning undefined")},t.keydownValidator=function(e){var t=n[e.code];if(t)return t},t.focus=function(e){var t=document.getElementById(e);t&&t.focus()},t.setNavigationKeyBindings=function(e){e?(n={},i=e,Object.keys(e).forEach((function(t){var a=e[t];n[a.key]=t}))):(n=a.defaultKeyBindings,i=a.GenericFullNavigationRules)},t.setNavigationKeyBindings(e.navigationRules),t}},992:function(e,t,n){var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,i=0,r=t.length;i<r;i++)!a&&i in t||(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var r=n(312);t.default=function(e){var t=function(e){s.wrapper.setAttribute("aria-activedescendant",e.srcElement.id)},n=function(){s.wrapper.setAttribute("aria-activedescendant","")},s={},o=!1,l={cssClass:r.NodeElementDefaults.cssClass,spatialProperties:a({},r.NodeElementDefaults.spatialProperties),semantics:a({},r.NodeElementDefaults.semantics),parentSemantics:a({},r.NodeElementDefaults.parentSemantics),existingElement:a({},r.NodeElementDefaults.existingElement)};return e.defaults&&(l.cssClass=e.defaults.cssClass||l.cssClass,l.spatialProperties=e.defaults.spatialProperties?a(a({},l.spatialProperties),e.defaults.spatialProperties):l.spatialProperties,l.semantics=e.defaults.semantics?a(a({},l.semantics),e.defaults.semantics):l.semantics,l.parentSemantics=e.defaults.parentSemantics?a(a({},l.parentSemantics),e.defaults.parentSemantics):l.parentSemantics,l.existingElement=e.defaults.existingElement?a(a({},l.existingElement),e.defaults.existingElement):l.existingElement),s.initialize=function(){var t;if(o)console.error("The renderer wrapper has already been initialized successfully, RenderingOptions.suffixId is: ".concat(e.suffixId,". No further action was taken."));else if(e.root&&document.getElementById(e.root.id)){if(s.root=document.getElementById(e.root.id),s.root.style.position="relative",s.root.classList.add("dn-root"),e.suffixId)return s.wrapper=document.createElement("div"),s.wrapper.id="dn-wrapper-"+e.suffixId,s.wrapper.setAttribute("role","application"),s.wrapper.setAttribute("aria-label",e.root.description||"Data navigation structure"),s.wrapper.setAttribute("aria-activedescendant",""),s.wrapper.classList.add("dn-wrapper"),s.wrapper.style.width=e.root&&e.root.width?e.root.width:"100%",e.root&&e.root.height&&(s.wrapper.style.height=e.root.height),e.entryButton&&e.entryButton.include&&(s.entryButton=document.createElement("button"),s.entryButton.id="dn-entry-button-"+e.suffixId,s.entryButton.classList.add("dn-entry-button"),s.entryButton.innerText="Enter navigation area",e.entryButton.callbacks&&e.entryButton.callbacks.click&&s.entryButton.addEventListener("click",e.entryButton.callbacks.click),e.entryButton.callbacks&&e.entryButton.callbacks.focus&&s.entryButton.addEventListener("focus",e.entryButton.callbacks.focus),s.wrapper.appendChild(s.entryButton)),s.root.appendChild(s.wrapper),(null===(t=e.exitElement)||void 0===t?void 0:t.include)&&(s.exitElement=document.createElement("div"),s.exitElement.id="dn-exit-"+e.suffixId,s.exitElement.classList.add("dn-exit-position"),s.exitElement.innerText="End of data structure.",s.exitElement.setAttribute("aria-label","End of data structure."),s.exitElement.setAttribute("role","note"),s.exitElement.setAttribute("tabindex","-1"),s.exitElement.style.display="none",s.exitElement.addEventListener("focus",(function(t){var n,a;s.exitElement.style.display="block",s.clearStructure(),(null===(a=null===(n=e.exitElement)||void 0===n?void 0:n.callbacks)||void 0===a?void 0:a.focus)&&e.exitElement.callbacks.focus(t)})),s.exitElement.addEventListener("blur",(function(t){var n,a;s.exitElement.style.display="none",(null===(a=null===(n=e.exitElement)||void 0===n?void 0:n.callbacks)||void 0===a?void 0:a.blur)&&e.exitElement.callbacks.blur(t)})),s.root.appendChild(s.exitElement)),o=!0,s.root;console.error("No suffix id found: options.suffixId must be specified.")}else console.error("No root element found, cannot build: RenderingOptions.root.id must reference an existing DOM element in order to render children.")},s.render=function(a){var i=a.renderId+"",r=e.elementData[i];if(r){if(o){var d=!1,c={},u=function(e,t,n){var i=r[e]||l[e],s=n&&d?c[t]:i[t],o=l[e][t];return"function"==typeof i?i(r,a.datum):"function"==typeof s?s(r,a.datum):s||o||(t?void 0:i)};d=u("existingElement","useForSpatialProperties"),c=u("existingElement","spatialProperties");var p=parseFloat(u("spatialProperties","width",!0)||0),g=parseFloat(u("spatialProperties","height",!0)||0),m=parseFloat(u("spatialProperties","x",!0)||0),h=parseFloat(u("spatialProperties","y",!0)||0),f=document.createElement(u("parentSemantics","elementType")),b=u("parentSemantics","attributes");"object"==typeof b&&Object.keys(b).forEach((function(e){f.setAttribute(e,b[e])})),f.setAttribute("role",u("parentSemantics","role")),f.id=i,f.classList.add("dn-node"),f.classList.add(u("cssClass")),f.style.width=p+"px",f.style.height=g+"px",f.style.left=m+"px",f.style.top=h+"px",f.setAttribute("tabindex","0"),f.addEventListener("focus",t),f.addEventListener("blur",n);var y=document.createElement(u("semantics","elementType")),v=u("semantics","attributes");"object"==typeof v&&Object.keys(v).forEach((function(e){f.setAttribute(e,v[e])})),y.setAttribute("role",u("semantics","role")),y.classList.add("dn-node-text"),r.showText&&(y.innerText=r.semantics.label);var x=u("semantics","label");x||console.error("Accessibility error: a label must be supplied to every rendered element using semantics.label."),y.setAttribute("aria-label",x),f.appendChild(y);var w=u("spatialProperties","path");if(w){var E=p+m+10,L=g+h+10,I=document.createElementNS("http://www.w3.org/2000/svg","svg");I.setAttribute("width",E+""),I.setAttribute("height",L+""),I.setAttribute("viewBox","0 0 ".concat(E," ").concat(L)),I.style.left=-m+"px",I.style.top=-h+"px",I.classList.add("dn-node-svg"),I.setAttribute("role","presentation"),I.setAttribute("focusable","false");var R=document.createElementNS("http://www.w3.org/2000/svg","path");R.setAttribute("d",w),R.classList.add("dn-node-path"),I.appendChild(R),f.appendChild(I)}return s.wrapper.appendChild(f),f}console.error("render() was called before initialize(), renderer must be initialized first.")}else console.warn("Render data not found with renderId: ".concat(i,". Failed to render."))},s.remove=function(e){var a=document.getElementById(e);s.wrapper.getAttribute("aria-activedescendant")===e&&s.wrapper.setAttribute("aria-activedescendant",""),a&&(a.removeEventListener("focus",t),a.removeEventListener("blur",n),a.remove())},s.clearStructure=function(){i([],s.wrapper.children,!0).forEach((function(e){s.entryButton&&s.entryButton===e||s.remove(e.id)}))},s}},4:function(e,t,n){var a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,i=0,r=t.length;i<r;i++)!a&&i in t||(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.buildStructure=t.buildRules=t.buildEdges=t.scaffoldDimensions=t.bulidNodes=t.addSimpleDataIDs=t.buildNodeStructureFromVegaLite=void 0;var i=n(312),r=n(5);t.default=function(e){return"vega-lite"===e.dataType||"vl"===e.dataType||"Vega-Lite"===e.dataType?(0,t.buildNodeStructureFromVegaLite)(e):(0,t.buildStructure)(e)},t.buildNodeStructureFromVegaLite=function(e){var t=i.GenericLimitedNavigationRules,n={},a={},s={},o=0,l=e.groupInclusionCriteria?e.groupInclusionCriteria:function(){return!0},d=e.itemInclusionCriteria?e.itemInclusionCriteria:function(){return!0},c=e.datumInclusionCriteria?e.datumInclusionCriteria:function(){return!0},u=e.vegaLiteView._renderer._origin,p=e.vegaLiteView._scenegraph.root.items[0].mark.items[0],g=function(e,t){if(e["data-navigator-id"])return e["data-navigator-id"];var n="dn-node-".concat(t,"-").concat(o);return o++,e["data-navigator-id"]=n,n},m=function(t,a,i,o,l){var d=g(t,a),u="render-"+d,p=i||[0,0];n[d]={},n[d].d={},n[d].id=d,n[d].renderId=u,n[d].index=o,n[d].level=a,n[d].parent=l,s[u]={},s[u].renderId=u,s[u].spatialProperties={},s[u].spatialProperties.x=t.bounds.x1+p[0],s[u].spatialProperties.y=t.bounds.y1+p[1],s[u].spatialProperties.width=t.bounds.x2-t.bounds.x1,s[u].spatialProperties.height=t.bounds.y2-t.bounds.y1,s[u].cssClass="dn-vega-lite-node",t.datum&&Object.keys(t.datum).forEach((function(i){var r=t.datum[i];c(i,r,t.datum,a,e.vegaLiteSpec)&&(n[d].d[e.keyRenamingHash&&e.keyRenamingHash[i]?e.keyRenamingHash[i]:i]=r)})),s[u].semantics={},s[u].semantics.label=e.nodeDescriber?e.nodeDescriber(n[d].d,t,a):(0,r.describeNode)(n[d].d)},h=0;return p.items.forEach((function(t){if(l(t,h,e.vegaLiteSpec)){m(t,"group",u,h,p);var n=0,a=t.items[0].mark.items[0].items?t.items[0].mark.items[0]:t;a.items.forEach((function(i){d(i,n,t,e.vegaLiteSpec)&&m(i,"item",u,n,a),n++}))}h++})),Object.keys(n).forEach((function(t){n[t].edges=function(t){var i=n[t],r=i.index,s=i.level,o=i.parent,l=[],d=o.items[r-1];if(d){var c=g(d,s);if(n[c]){var u="".concat(c,"-").concat(i.id);l.push(u),a[u]||(a[u]={source:c,target:i.id,navigationRules:["left","right"]})}}var p=o.items[r+1];if(p){var m=g(p,s);if(n[m]){var h="".concat(i.id,"-").concat(m);l.push(h),a[h]||(a[h]={source:i.id,target:m,navigationRules:["left","right"]})}}if("group"===s&&o.items[r].items){var f=(o.items[r].items[0].mark.items[0].items||o.items[r].items)[0],b=g(f,"item");if(n[b]){var y="".concat(i.id,"-").concat(b);l.push(y),a[y]||(a[y]={source:i.id,target:b,navigationRules:["parent","child"]})}}else if("item"===s){var v=g(o,"group");if(n[v]){var x="".concat(v,"-").concat(i.id);l.push(x),a[x]||(a[x]={source:v,target:i.id,navigationRules:["parent","child"]})}}return e.exitFunction&&(l.push("any-exit"),a["any-exit"]||(a["any-exit"]={source:e.getCurrent,target:e.exitFunction,navigationRules:["exit"]})),l.push("any-undo"),a["any-undo"]||(a["any-undo"]={source:e.getCurrent,target:e.getPrevious,navigationRules:["undo"]}),l}(t)})),{nodes:n,edges:a,elementData:s,navigationRules:t}},t.addSimpleDataIDs=function(e){var t=0,n={};e.data.forEach((function(a){var i="function"==typeof e.idKey?e.idKey(a):e.idKey;a[i]=t+"",e.keys&&e.keys.forEach((function(e){e in a&&("string"==typeof a[e]?(n[e]||(n[e]=0),n[a[e]]||(n[a[e]]=0),a[i]+="_"+e+n[e]+"_"+a[e]+n[a[e]],n[e]++,n[a[e]]++):(n[e]||(n[e]=0),a[i]+="_"+e+n[e],n[e]++))})),t++}))},t.bulidNodes=function(e){var t={};return e.data.forEach((function(n){e.idKey||console.error("Building nodes. A key string must be supplied in options.idKey to specify the id keys of every node.");var a="function"==typeof e.idKey?e.idKey(n):e.idKey,i=n[a];if(i)if(t[i])console.error("Building nodes. Each id for data in options.data must be unique. This id is not unique: ".concat(i,"."));else{var r="function"==typeof e.renderIdKey?e.renderIdKey(n):e.renderIdKey;t[i]={id:i,edges:[],renderId:r?n[r]||"":n.renderIdKey||"",data:n}}else console.error("Building nodes. Each datum in options.data must contain an id. When matching the id key string ".concat(a,", this datum has no id: ").concat(JSON.stringify(n),"."))})),t},t.scaffoldDimensions=function(e,t){var n={};return e.data.forEach((function(r){(e.dimensions||[]).forEach((function(e){var s,o,l;if(e.dimensionKey){if(e.dimensionKey in r){var d=r[e.dimensionKey],c="";if(null===(s=null==e?void 0:e.nestedSettings)||void 0===s?void 0:s.derivedParent){e.nestedSettings.parentNode||console.error("Building nodes, parsing dimensions. The dimension using the dimensionKey ".concat(e.dimensionKey," is nested, but dimension.parentNode property object is missing. parentNode.derived and parentNode.id should be supplied. ").concat(JSON.stringify(e),"."));var u=e.nestedSettings.parentNode;c="function"==typeof u.id?u.id(r,e):u.id,t[c]={id:c,edges:[],derivedNode:!0,renderId:null===(o=null==u?void 0:u.rendering)||void 0===o?void 0:o.renderId,renderingStrategy:null===(l=null==u?void 0:u.rendering)||void 0===l?void 0:l.strategy,data:e}}if(!n[e.dimensionKey]){var p=a([],i.GenericFullNavigationDimensions,!0);n[e.dimensionKey]={values:[],dimensionKey:e.dimensionKey,type:e.type?e.type:"number"!=typeof d||isNaN(d)?"categorical":"numerical",sortingFunction:e.sortingFunction,behavior:e.behavior||{extents:"circular"},navigationRules:e.navigationRules?(p=[],e.navigationRules):p.shift()||[]},c&&(n[e.dimensionKey].id=c)}n[e.dimensionKey].values.push(t[c])}}else console.error("Building nodes, parsing dimensions. Each dimension in options.dimensions must contain a dimensionKey. This dimension has no dimensionKey: ".concat(JSON.stringify(e),"."))}))})),Object.keys(n).forEach((function(e){var t=n[e],a=t.values;t.sortingFunction?a.sort((function(e,n){return t.sortingFunction(e,n,t)})):"numerical"===t.type&&a.sort((function(e,n){return e[t.dimensionKey]-n[t.dimensionKey]}))})),n},t.buildEdges=function(e,t,n){var a={},i=function(e,n,i){var r="".concat(e,"-").concat(n);a[r]={source:e,target:n,navigationRules:i||[]},t[e].edges.push(r),t[n].edges.push(r)};return(n?Object.keys(n):[]).forEach((function(e){var t,a=n[e],r=(null===(t=a.behavior)||void 0===t?void 0:t.extents)||"circular";a.values||console.error("Parsing dimensions. The dimension using the key ".concat(e," is missing the values property. dimension.values should be supplied. ").concat(JSON.stringify(a),"."));var s=0;a.values.forEach((function(e){s===a.values.length-1&&"circular"===r?i(e.id,a.values[0].id,a.navigationRules):s===a.values.length-1&&"bridged"===r?i(e.id,a.behavior.bridgePost,a.navigationRules):s<a.values.length-1&&"terminal"!==r&&i(e.id,a.values[s].id,a.navigationRules),s||"bridged"!==r||i(a.behavior.bridgePrevious,e.id,a.navigationRules),s++}))})),Object.keys(t).forEach((function(r){var s,o=t[r];o.derivedNode&&i(o.id,n[o.data.key].values[0].id,e.dimensions[o.data.key].navigationRules),(null===(s=e.genericEdges)||void 0===s?void 0:s.length)&&e.genericEdges.forEach((function(e){a[e.edgeId]||(a[e.edgeId]=e.edge),(!e.conditional||e.conditional&&e.conditional(o,e))&&o.edges.push(e.edgeId)}))})),a},t.buildRules=function(e){return e.navigationRules||i.GenericFullNavigationRules},t.buildStructure=function(e){e.addIds&&(0,t.addSimpleDataIDs)(e);var n=(0,t.bulidNodes)(e),a=(0,t.scaffoldDimensions)(e,n);return{nodes:n,edges:(0,t.buildEdges)(e,n,a),dimensions:a,navigationRules:(0,t.buildRules)(e)}}},5:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.describeNode=void 0,t.describeNode=function(e,t){var n=Object.keys(e),a="";return n.forEach((function(n){a+="".concat(t&&t.omitKeyNames?"":n+": ").concat(e[n],". ")})),a+=t&&t.semanticLabel||"Data point."}}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}(()=>{var e=n(607),t=n(5);let a,i,r,s,o="",l={title:{d:{title:"Major Trophies for some English teams"},spatialProperties:{x:12,y:9,width:686,height:56},id:"title",renderId:"title",edges:["any-return","any-exit","title-legend"],semantics:{label:"Major Trophies for some English teams"}},legend:{d:{legend:"Contests Included: BPL, FA Cup, CL"},spatialProperties:{x:160,y:162,width:398,height:49},id:"legend",renderId:"legend",edges:["any-return","any-exit","title-legend","legend-y_axis","legend-bpl"],semantics:{label:"Legend. Contests Included: BPL, FA Cup, CL. Press Enter to explore these contests."}},y_axis:{d:{"Y Axis":"Label: Count trophies. Values range from 0 to 30 on a numerical scale."},spatialProperties:{x:21,y:311,width:39,height:194},id:"y_axis",renderId:"y_axis",edges:["any-return","any-exit","legend-y_axis","y_axis-x_axis"],semantics:{label:"Y Axis. Label: Count trophies. Values range from 0 to 30 on a numerical scale."}},x_axis:{d:{"X Axis":"Teams included: Arsenal, Chelsea, Liverpool, Manchester United."},spatialProperties:{x:191,y:736,width:969,height:44},id:"x_axis",renderId:"x_axis",edges:["any-return","any-exit","y_axis-x_axis","x_axis-arsenal"],semantics:{label:"X Axis. Arsenal, Chelsea, Liverpool, Manchester United. Press Enter to explore these teams."}},arsenal:{d:{team:"Arsenal","total trophies":17},spatialProperties:{x:194,y:370,width:122,height:357},id:"arsenal",renderId:"arsenal",edges:["any-return","any-exit","x_axis-arsenal","any-x_axis","arsenal-bpl1","arsenal-chelsea","manchester-arsenal","any-legend"],semantics:{label:(0,t.describeNode)({team:"Arsenal","total trophies":17,contains:"3 contests"},{})}},chelsea:{d:{team:"Chelsea","total trophies":15},spatialProperties:{x:458,y:414,width:122,height:312},id:"chelsea",renderId:"chelsea",edges:["any-return","any-exit","any-x_axis","arsenal-chelsea","chelsea-bpl2","chelsea-liverpool","any-legend"],semantics:{label:(0,t.describeNode)({team:"Chelsea","total trophies":15,contains:"3 contests"},{})}},liverpool:{d:{team:"Liverpool","total trophies":15},spatialProperties:{x:722,y:414,width:122,height:312},id:"liverpool",renderId:"liverpool",edges:["any-return","any-exit","any-x_axis","chelsea-liverpool","liverpool-bpl3","liverpool-manchester","any-legend"],semantics:{label:(0,t.describeNode)({team:"Liverpool","total trophies":15,contains:"3 contests"},{})}},manchester:{d:{team:"Manchester United","total trophies":28},spatialProperties:{x:986,y:138,width:122,height:589},id:"manchester",renderId:"manchester",edges:["any-return","any-exit","any-x_axis","liverpool-manchester","manchester-bpl4","manchester-arsenal","any-legend"],semantics:{label:(0,t.describeNode)({team:"Manchester","total trophies":28,contains:"3 contests"},{})}},bpl:{d:{contest:"BPL","total trophies":22},spatialProperties:{x:194,y:138,width:918,height:378,path:"M987 136H985.762L985.21 137.108L848.762 411H720H584H457.309L321.603 368.093L321.309 368H321H196H194V370V430V432H196H320.431L458.948 517.701L459.431 518H460H584H584.579L585.069 517.69L720.579 432H850H850.152L850.303 431.977L987.152 411H1112H1114V409V138V136H1112H987Z"},id:"bpl",renderId:"bpl",edges:["any-return","any-exit","legend-bpl","any-legend","bpl-bpl1","bpl-fa","cl-bpl"],semantics:{label:(0,t.describeNode)({contest:"BPL","total trophies":22,contains:"4 teams"},{})}},fa:{d:{contest:"FA Cup","total trophies":42},spatialProperties:{x:194,y:414,width:918,height:311,path:"M987.407 412H987.263L987.119 412.021L849.712 432H722.274H721.698L721.211 432.306L586.141 517H459.707L324.059 432.304L323.573 432H323H196H194V434V725V727H196H323H323.288L323.564 726.919L459.421 687H586.717H587.298L587.788 686.689L722.855 601H849.414L986.563 664.813L986.965 665H987.407H1112H1114V663V414V412H1112H987.407Z"},id:"fa",renderId:"fa",edges:["any-return","any-exit","any-legend","bpl-fa","fa-fa1","fa-cl"],semantics:{label:(0,t.describeNode)({contest:"FA Cup","total trophies":42,contains:"4 teams"},{})}},cl:{d:{contest:"CL","total trophies":11},spatialProperties:{x:194,y:609,width:918,height:116,path:"M321.731 723H191V727H322H457H585H721H849H987H1112H1114V725V666V664H1112H987.441L849.841 600.186L849.441 600H849H721H720.421L719.931 600.31L584.421 686H457H456.731L456.471 686.071L321.731 723Z"},id:"cl",renderId:"cl",edges:["any-return","any-exit","any-legend","fa-cl","cl-cl1","cl-bpl"],semantics:{label:(0,t.describeNode)({contest:"CL","total trophies":11,contains:"4 teams"},{})}},bpl1:{d:{contest:"BPL",team:"Arsenal",trophies:3},spatialProperties:{x:194,y:370,width:122,height:62},id:"bpl1",renderId:"bpl1",edges:["any-return","any-exit","any-legend","arsenal-bpl1","bpl-bpl1","bpl1-fa1","cl1-bpl1","bpl1-bpl2","bpl4-bpl1"],semantics:{label:(0,t.describeNode)({contest:"BPL",team:"Arsenal",trophies:3},{})}},fa1:{d:{contest:"FA Cup",team:"Arsenal",trophies:14},spatialProperties:{x:194,y:436,width:122,height:291},id:"fa1",renderId:"fa1",edges:["any-return","any-exit","any-legend","arsenal-fa1","fa-fa1","bpl1-fa1","fa1-cl1","fa1-fa2","fa4-fa1"],semantics:{label:(0,t.describeNode)({contest:"FA Cup",team:"Arsenal",trophies:14},{})}},cl1:{d:{contest:"CL",team:"Arsenal",trophies:0},spatialProperties:{x:194,y:727,width:122,height:0},id:"cl1",renderId:"cl1",edges:["any-return","any-exit","arsenal-cl1","any-legend","cl-cl1","fa1-cl1","cl1-bpl1","cl1-cl2","cl4-cl1"],semantics:{label:(0,t.describeNode)({contest:"CL",team:"Arsenal",trophies:0},{})}},bpl2:{d:{contest:"BPL",team:"Chelsea",trophies:5},spatialProperties:{x:458,y:414,width:122,height:103},id:"bpl2",renderId:"bpl2",edges:["any-return","any-exit","any-legend","chelsea-bpl2","bpl2-fa2","cl2-bpl2","bpl1-bpl2","bpl2-bpl3"],semantics:{label:(0,t.describeNode)({contest:"BPL",team:"Chelsea",trophies:5},{})}},fa2:{d:{contest:"FA Cup",team:"Chelsea",trophies:8},spatialProperties:{x:458,y:521,width:122,height:165},id:"fa2",renderId:"fa2",edges:["any-return","chelsea-fa2","any-exit","any-legend","bpl2-fa2","fa2-cl2","fa1-fa2","fa2-fa3"],semantics:{label:(0,t.describeNode)({contest:"FA Cup",team:"Chelsea",trophies:8},{})}},cl2:{d:{contest:"CL",team:"Chelsea",trophies:2},spatialProperties:{x:458,y:691,width:122,height:35},id:"cl2",renderId:"cl2",edges:["any-return","any-exit","any-legend","chelsea-cl2","fa2-cl2","cl2-bpl2","cl1-cl2","cl2-cl3"],semantics:{label:(0,t.describeNode)({contest:"CL",team:"Chelsea",trophies:2},{})}},bpl3:{d:{contest:"BPL",team:"Liverpool",trophies:1},spatialProperties:{x:722,y:414,width:122,height:18},id:"bpl3",renderId:"bpl3",edges:["any-return","any-exit","any-legend","liverpool-bpl3","bpl3-fa3","cl3-bpl3","bpl2-bpl3","bpl3-bpl4"],semantics:{label:(0,t.describeNode)({contest:"BPL",team:"Liverpool",trophies:1},{})}},fa3:{d:{contest:"FA Cup",team:"Liverpool",trophies:8},spatialProperties:{x:722,y:437,width:122,height:165},id:"fa3",renderId:"fa3",edges:["any-return","any-exit","any-legend","liverpool-fa3","bpl3-fa3","fa3-cl3","fa2-fa3","fa3-fa4"],semantics:{label:(0,t.describeNode)({contest:"FA Cup",team:"Liverpool",trophies:8},{})}},cl3:{d:{contest:"CL",team:"Liverpool",trophies:6},spatialProperties:{x:722,y:607,width:122,height:119},id:"cl3",renderId:"cl3",edges:["any-return","any-exit","any-legend","liverpool-cl3","fa3-cl3","cl3-bpl3","cl2-cl3","cl3-cl4"],semantics:{label:(0,t.describeNode)({contest:"CL",team:"Liverpool",trophies:6},{})}},bpl4:{d:{contest:"BPL",team:"Manchester United",trophies:13},spatialProperties:{x:986,y:138,width:122,height:273},id:"bpl4",renderId:"bpl4",edges:["any-return","any-exit","any-legend","manchester-bpl4","bpl4-fa4","cl4-bpl4","bpl3-bpl4","bpl4-bpl1"],semantics:{label:(0,t.describeNode)({contest:"BPL",team:"Manchester United",trophies:13},{})}},fa4:{d:{contest:"FA Cup",team:"Manchester United",trophies:12},spatialProperties:{x:986,y:414,width:122,height:250},id:"fa4",renderId:"fa4",edges:["any-return","any-exit","any-legend","manchester-fa4","bpl4-fa4","fa4-cl4","fa3-fa4","fa4-fa1"],semantics:{label:(0,t.describeNode)({contest:"FA Cup",team:"Manchester United",trophies:12},{})}},cl4:{d:{contest:"CL",team:"Manchester United",trophies:3},spatialProperties:{x:986,y:667,width:122,height:58},id:"cl4",renderId:"cl4",edges:["any-return","any-exit","any-legend","manchester-cl4","fa4-cl4","cl4-bpl4","cl3-cl4","cl4-cl1"],semantics:{label:(0,t.describeNode)({contest:"CL",team:"Manchester United",trophies:3},{})}}},d={right:{key:"ArrowRight",direction:"target"},left:{key:"ArrowLeft",direction:"source"},down:{key:"ArrowDown",direction:"target"},up:{key:"ArrowUp",direction:"source"},child:{key:"Enter",direction:"target"},parent:{key:"Backspace",direction:"source"},exit:{key:"Escape",direction:"target"},previous:{key:"Period",direction:"target"},undo:{key:"Period",direction:"target"},legend:{key:"KeyL",direction:"target"}};const c={nodes:l,edges:{"any-legend":{source:()=>s,target:()=>+s.substring(s.length-1)?s.substring(0,s.length-1):"legend",navigationRules:["legend"]},"any-x_axis":{source:"x_axis",target:()=>s,navigationRules:["parent"]},"any-return":{source:()=>s,target:()=>r,navigationRules:["previous","undo"]},"any-exit":{source:()=>s,target:()=>(f(),""),navigationRules:["exit"]},"x_axis-exit":{source:"x_axis",target:()=>(f(),""),navigationRules:["down"]},"x_axis-arsenal":{source:"x_axis",target:"arsenal",navigationRules:["child","parent"]},"arsenal-bpl1":{source:"arsenal",target:"bpl1",navigationRules:["child","parent"]},"arsenal-fa1":{source:"arsenal",target:"fa1",navigationRules:["child","parent"]},"arsenal-cl1":{source:"arsenal",target:"cl1",navigationRules:["child","parent"]},"chelsea-fa2":{source:"chelsea",target:"fa2",navigationRules:["child","parent"]},"chelsea-cl2":{source:"chelsea",target:"cl2",navigationRules:["child","parent"]},"liverpool-fa3":{source:"liverpool",target:"fa3",navigationRules:["child","parent"]},"liverpool-cl3":{source:"liverpool",target:"cl3",navigationRules:["child","parent"]},"manchester-fa4":{source:"manchester",target:"fa4",navigationRules:["child","parent"]},"manchester-cl4":{source:"manchester",target:"cl4",navigationRules:["child","parent"]},"arsenal-chelsea":{source:"arsenal",target:"chelsea",navigationRules:["left","right"]},"manchester-arsenal":{source:"manchester",target:"arsenal",navigationRules:["left","right"]},"title-legend":{source:"title",target:"legend",navigationRules:["up","down"]},"legend-y_axis":{source:"legend",target:"y_axis",navigationRules:["up","down"]},"legend-bpl":{source:"legend",target:"bpl",navigationRules:["child","parent"]},"y_axis-x_axis":{source:"y_axis",target:"x_axis",navigationRules:["up","down"]},"chelsea-bpl2":{source:"chelsea",target:"bpl2",navigationRules:["child","parent"]},"chelsea-liverpool":{source:"chelsea",target:"liverpool",navigationRules:["left","right"]},"liverpool-bpl3":{source:"liverpool",target:"bpl3",navigationRules:["child","parent"]},"liverpool-manchester":{source:"liverpool",target:"manchester",navigationRules:["left","right"]},"manchester-bpl4":{source:"manchester",target:"bpl4",navigationRules:["child","parent"]},"bpl-bpl1":{source:"bpl",target:"bpl1",navigationRules:["child","parent"]},"bpl-fa":{source:"bpl",target:"fa",navigationRules:["up","down"]},"cl-bpl":{source:"cl",target:"bpl",navigationRules:["up","down"]},"fa-fa1":{source:"fa",target:"fa1",navigationRules:["child","parent"]},"fa-cl":{source:"fa",target:"cl",navigationRules:["up","down"]},"cl-cl1":{source:"cl",target:"cl1",navigationRules:["child","parent"]},"bpl1-fa1":{source:"bpl1",target:"fa1",navigationRules:["up","down"]},"cl1-bpl1":{source:"cl1",target:"bpl1",navigationRules:["up","down"]},"bpl1-bpl2":{source:"bpl1",target:"bpl2",navigationRules:["left","right"]},"bpl4-bpl1":{source:"bpl4",target:"bpl1",navigationRules:["left","right"]},"fa1-cl1":{source:"fa1",target:"cl1",navigationRules:["up","down"]},"fa1-fa2":{source:"fa1",target:"fa2",navigationRules:["left","right"]},"fa4-fa1":{source:"fa4",target:"fa1",navigationRules:["left","right"]},"cl1-cl2":{source:"cl1",target:"cl2",navigationRules:["left","right"]},"cl4-cl1":{source:"cl4",target:"cl1",navigationRules:["left","right"]},"bpl2-fa2":{source:"bpl2",target:"fa2",navigationRules:["up","down"]},"cl2-bpl2":{source:"cl2",target:"bpl2",navigationRules:["up","down"]},"bpl2-bpl3":{source:"bpl2",target:"bpl3",navigationRules:["left","right"]},"fa2-cl2":{source:"fa2",target:"cl2",navigationRules:["up","down"]},"fa2-fa3":{source:"fa2",target:"fa3",navigationRules:["left","right"]},"cl2-cl3":{source:"cl2",target:"cl3",navigationRules:["left","right"]},"bpl3-fa3":{source:"bpl3",target:"fa3",navigationRules:["up","down"]},"cl3-bpl3":{source:"cl3",target:"bpl3",navigationRules:["up","down"]},"bpl3-bpl4":{source:"bpl3",target:"bpl4",navigationRules:["left","right"]},"fa3-cl3":{source:"fa3",target:"cl3",navigationRules:["up","down"]},"fa3-fa4":{source:"fa3",target:"fa4",navigationRules:["left","right"]},"cl3-cl4":{source:"cl3",target:"cl4",navigationRules:["left","right"]},"bpl4-fa4":{source:"bpl4",target:"fa4",navigationRules:["up","down"]},"cl4-bpl4":{source:"cl4",target:"bpl4",navigationRules:["up","down"]},"fa4-cl4":{source:"fa4",target:"cl4",navigationRules:["up","down"]}}},u=e.Z.rendering({elementData:c.nodes,defaults:{cssClass:(e,t)=>e.spatialProperties.path?"dn-test-path":"dn-test-class"},suffixId:"data-navigator-schema",root:{id:"root",cssClass:"",width:"100%",height:0},entryButton:{include:!0,callbacks:{click:()=>{m()}}},exitElement:{include:!0}});u.initialize();const p=e.Z.input({structure:c,navigationRules:d,entryPoint:"title",exitPoint:u.exitElement.id}),g=e=>{u.render({renderId:e.renderId,datum:e}).addEventListener("keydown",(e=>{const t=p.keydownValidator(e);t&&(e.preventDefault(),h(t))})),(e=>{const t=document.getElementById("tooltip");t.classList.remove("hidden"),t.innerText=e.semantics.label;const n=t.getBoundingClientRect(),i=5*a,r=n.height+i;if("Manchester United"===e.d.team||"Liverpool"===e.d.team||!e.d.team&&"BPL"===e.d.contest){t.style.textAlign="right";const s=n.width;t.style.transform=`translate(${(e.spatialProperties.x+e.spatialProperties.width)*a+i-s+1}px,${e.spatialProperties.y*a-r}px)`}else t.style.textAlign="left",t.style.transform=`translate(${e.spatialProperties.x*a-i+1}px,${e.spatialProperties.y*a-r}px)`})(e),p.focus(e.renderId),i=!0,r=s,s=e.id,u.remove(r)},m=()=>{const e=p.enter();e&&g(e)},h=e=>{const t=p.move(s,e);t&&g(t)},f=()=>{i=!1,u.exitElement.style.display="block",p.focus(u.exitElement.id),r=s,s=null,u.remove(r),document.getElementById("tooltip").classList.add("hidden")},b=e=>{const t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?"X":"Y",n=(Math.abs(e["delta"+t])+1e-9)/(Math.abs(e["delta"+("X"===t?"Y":"X")])+1e-9),a=e.deltaX<0,i=e.deltaX>0,r=e.deltaY<0,o=e.deltaY>0,l=n>.99&&n<=2?i&&r?"legend":i&&o?"child":a&&o?"previous":a&&r?"parent":null:i&&"X"===t?"right":o&&"Y"===t?"down":a&&"X"===t?"left":r&&"Y"===t?"up":null;s&&l&&h(l)},y=new Hammer(document.getElementById("root"),{});let v;y.get("pinch").set({enable:!1}),y.get("rotate").set({enable:!1}),y.get("pan").set({enable:!1}),y.get("swipe").set({direction:Hammer.DIRECTION_ALL,velocity:.2}),y.on("press",(e=>{})),y.on("pressup",(e=>{i?f():m()})),y.on("swipe",(e=>{b(e)}));let x=!1,w=!1,E=[];const L=document.getElementById("feed"),I=document.getElementById("canvas"),R=I.getContext("2d"),k={flipHorizontal:!0,iouThreshold:.5,scoreThreshold:.45,modelType:"ssd320fpnlite",modelSize:"small"},B=()=>{v.detect(L).then((e=>{if(e.length&&(v.renderPredictions(e,I,R,L),e.forEach((e=>{(w&&("point"===e.label||"open"===e.label)&&e.score>=.6||!w&&"closed"===e.label&&e.score>=.6)&&E.push(e)})),E.length>=8)){if(w){let e={};E.forEach((t=>{e[t.label]||(e[t.label]={},e[t.label].bbox=[0,0,0,0],e[t.label].count=0,e[t.label].total=0);let n=e[t.label];n.count++,n.total+=t.score,n.bbox[0]+=t.bbox[0],n.bbox[1]+=t.bbox[1],n.bbox[2]+=t.bbox[2],n.bbox[3]+=t.bbox[3]}));let t={score:0,label:""};Object.keys(e).forEach((n=>{(!t.label||t.score<e[n].total)&&(t.label=n,t.score=e[n].total)}));let n=e[t.label],a=n.count,i={bbox:[n.bbox[0]/a,n.bbox[1]/a,n.bbox[2]/a,n.bbox[3]/a],label:t.label,score:t.score/a};C(i)}else{let e=[0,0,0,0];E.forEach((t=>{e[0]+=t.bbox[0],e[1]+=t.bbox[1],e[2]+=t.bbox[2],e[3]+=t.bbox[3]})),P([e[0]/E.length,e[1]/E.length,e[2]/E.length,e[3]/E.length])}E=[]}x&&requestAnimationFrame(B)}))},P=e=>{w=e,document.getElementById("ready").innerText="Yes!",document.getElementById("fist").style.left=(w[0]+w[2])/2-16+"px",document.getElementById("fist").style.top=(w[1]+w[3])/2-5+"px",document.getElementById("fist").style.display="block"},C=e=>{if(w){if("point"===e.label){const t={deltaX:w[2]-w[0]-(e.bbox[2]-e.bbox[0]),deltaY:w[3]-w[1]-(e.bbox[3]-e.bbox[1])};b(t)}"open"!==e.label||i?"open"===e.label&&i&&f():m(),w=!1,document.getElementById("ready").innerText="No.",document.getElementById("fist").style.display="none"}};document.getElementById("loadModel").addEventListener("click",(()=>{document.getElementById("loadModel").disabled=!0,document.getElementById("status").classList.remove("hidden"),document.getElementById("ready").innerText="No. Loading model...",handTrack.load(k).then((e=>{v=e,document.getElementById("openWebcam").disabled=!1,document.getElementById("ready").innerText="No. Model loaded but webcam feed required."}))})),document.getElementById("openWebcam").addEventListener("click",(()=>{document.getElementById("openWebcam").disabled=!0,document.getElementById("closeWebcam").disabled=!1,document.getElementById("ready").innerText="No. Loading video feed...",handTrack.startVideo(L).then((e=>{document.getElementById("ready").innerText="Feed ready. Close your hand to prepare for gesture commands.",e&&(x=!0,document.getElementById("status").classList.remove("hidden"),document.getElementById("canvas").classList.remove("hidden"),B())}))})),document.getElementById("closeWebcam").addEventListener("click",(()=>{x=!1,handTrack.stopVideo(L),document.getElementById("openWebcam").remove(),document.getElementById("canvas").remove(),document.getElementById("loadModel").remove(),document.getElementById("closeWebcam").disabled=!0,document.getElementById("status").innerText="Video feed disabled. Model disposed! Reload page to try model again.",v.dispose()}));const A=e=>{d[e]?(N(e),h(e)):"enter"!==e||i?"exit"===e&&i?(N(e),f()):"exit"===e||"enter"===e?H(e,!0):H(e):(N(e),m())},N=e=>{document.getElementById("alert").classList.remove("alert"),document.getElementById("alert").innerText=`Command valid. Attempting "${e}."`},H=(e,t)=>{document.getElementById("alert").classList.add("alert");const n=t?`"${e}" already issued as a command!`:`"${e}" not recognized as a command!`;document.getElementById("alert").innerText=`${n} Try another. (Commands are: ${o}.)`};document.getElementById("form").addEventListener("submit",(e=>{e.preventDefault();const t=document.getElementById("textCommand").value.toLowerCase();A(t)}));const S=window.SpeechRecognition||window.webkitSpeechRecognition,_=window.SpeechGrammarList||window.webkitSpeechGrammarList;if(window.SpeechRecognitionEvent||window.webkitSpeechRecognitionEvent,S){const e=Object.keys(d);e.push("enter"),o=e.join(", ");const t=new S;if(_){const n=new _,a="#JSGF V1.0; grammar colors; public <color> = "+e.join(" | ")+" ;";n.addFromString(a,1),t.grammars=n}t.continuous=!1,t.lang="en-US",t.interimResults=!1,t.maxAlternatives=1;const n=()=>{t.start(),document.getElementById("alert").classList.remove("alert"),document.getElementById("alert").innerText="Ready! Please speak a command."};document.getElementById("enableSpeech").addEventListener("click",n),t.onresult=e=>{const t=e.results[0][0].transcript;+e.results[0][0].confidence>=.65?A(t):(e=>{document.getElementById("alert").classList.add("alert"),document.getElementById("alert").innerText=`We thought we heard "${e}" but aren't sure. Please try again! Possible commands are: ${o}.`})(t)},t.onspeechend=function(){t.stop()}}else document.getElementById("enableSpeech").setAttribute("disabled",!0),document.getElementById("alert").innerText='Speech recognition is disabled on your browser or device. (A default on Firefox). You may need to enable Web Speech API\'s "SpeechRecognition" in your browser settings to continue.';const T=()=>{const e=+document.getElementById("chart").getBoundingClientRect().width;a=e/1200;const t=(1200-e)/2,n=document.querySelector(".dn-entry-button"),i=n.getBoundingClientRect(),r=+i.height/(2*a)-9,s=(i.width*a*(1/a)-i.width*a)/2;document.querySelector(".dn-wrapper").style.transform=`scale(${a}) translate(${-t}px,${-r}px)`,n.style.transform=`scale(${1/a}) translate(${s}px,0px)`};let F;window.onresize=()=>{clearTimeout(F),F=setTimeout(T,50)},T()})()})();