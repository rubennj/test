(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3569],{64797:(o,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>t});var c=r(1799),e=r.n(c),s=r(82609),a=r.n(s)()(e());a.push([o.id,"/*\n\n    Name:       shadowfox\n    Author:     overdodactyl (http://github.com/overdodactyl)\n\n    Original shadowfox color scheme by Firefox\n\n*/\n\n.cm-s-shadowfox.CodeMirror { background: #2a2a2e; color: #b1b1b3; }\n.cm-s-shadowfox div.CodeMirror-selected { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::selection, .cm-s-shadowfox .CodeMirror-line > span::selection, .cm-s-shadowfox .CodeMirror-line > span > span::selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span > span::-moz-selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-gutters { background: #0c0c0d ; border-right: 1px solid #0c0c0d; }\n.cm-s-shadowfox .CodeMirror-guttermarker { color: #555; }\n.cm-s-shadowfox .CodeMirror-linenumber { color: #939393; }\n.cm-s-shadowfox .CodeMirror-cursor { border-left: 1px solid #fff; }\n\n.cm-s-shadowfox span.cm-comment { color: #939393; }\n.cm-s-shadowfox span.cm-atom { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-quote { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-builtin { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-attribute { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-keyword { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-error { color: #FF7DE9; }\n\n.cm-s-shadowfox span.cm-number { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string-2 { color: #6B89FF; }\n\n.cm-s-shadowfox span.cm-meta { color: #939393; }\n.cm-s-shadowfox span.cm-hr { color: #939393; }\n\n.cm-s-shadowfox span.cm-header { color: #75BFFF; }\n.cm-s-shadowfox span.cm-qualifier { color: #75BFFF; }\n.cm-s-shadowfox span.cm-variable-2 { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-property { color: #86DE74; }\n\n.cm-s-shadowfox span.cm-def { color: #75BFFF; }\n.cm-s-shadowfox span.cm-bracket { color: #75BFFF; }\n.cm-s-shadowfox span.cm-tag { color: #75BFFF; }\n.cm-s-shadowfox span.cm-link:visited { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-variable { color: #B98EFF; }\n.cm-s-shadowfox span.cm-variable-3 { color: #d7d7db; }\n.cm-s-shadowfox span.cm-link { color: #737373; }\n.cm-s-shadowfox span.cm-operator { color: #b1b1b3; }\n.cm-s-shadowfox span.cm-special { color: #d7d7db; }\n\n.cm-s-shadowfox .CodeMirror-activeline-background { background: rgba(185, 215, 253, .15) }\n.cm-s-shadowfox .CodeMirror-matchingbracket { outline: solid 1px rgba(255, 255, 255, .25); color: white !important; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/shadowfox.css"],names:[],mappings:"AAAA;;;;;;;CAOC;;AAED,6BAA6B,mBAAmB,EAAE,cAAc,EAAE;AAClE,0CAA0C,mBAAmB,EAAE;AAC/D,6JAA6J,mBAAmB,EAAE;AAClL,4KAA4K,mBAAmB,EAAE;AACjM,sCAAsC,oBAAoB,EAAE,+BAA+B,EAAE;AAC7F,2CAA2C,WAAW,EAAE;AACxD,yCAAyC,cAAc,EAAE;AACzD,qCAAqC,2BAA2B,EAAE;;AAElE,kCAAkC,cAAc,EAAE;AAClD,+BAA+B,cAAc,EAAE;AAC/C,gCAAgC,cAAc,EAAE;AAChD,kCAAkC,cAAc,EAAE;AAClD,oCAAoC,cAAc,EAAE;AACpD,kCAAkC,cAAc,EAAE;AAClD,gCAAgC,cAAc,EAAE;;AAEhD,iCAAiC,cAAc,EAAE;AACjD,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,cAAc,EAAE;;AAEnD,+BAA+B,cAAc,EAAE;AAC/C,6BAA6B,cAAc,EAAE;;AAE7C,iCAAiC,cAAc,EAAE;AACjD,oCAAoC,cAAc,EAAE;AACpD,qCAAqC,cAAc,EAAE;;AAErD,mCAAmC,cAAc,EAAE;;AAEnD,8BAA8B,cAAc,EAAE;AAC9C,kCAAkC,cAAc,EAAE;AAClD,8BAA8B,cAAc,EAAE;AAC9C,uCAAuC,cAAc,EAAE;;AAEvD,mCAAmC,cAAc,EAAE;AACnD,qCAAqC,cAAc,EAAE;AACrD,+BAA+B,cAAc,EAAE;AAC/C,mCAAmC,cAAc,EAAE;AACnD,kCAAkC,cAAc,EAAE;;AAElD,oDAAoD,qCAAqC;AACzF,8CAA8C,2CAA2C,EAAE,uBAAuB,EAAE",sourcesContent:["/*\n\n    Name:       shadowfox\n    Author:     overdodactyl (http://github.com/overdodactyl)\n\n    Original shadowfox color scheme by Firefox\n\n*/\n\n.cm-s-shadowfox.CodeMirror { background: #2a2a2e; color: #b1b1b3; }\n.cm-s-shadowfox div.CodeMirror-selected { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::selection, .cm-s-shadowfox .CodeMirror-line > span::selection, .cm-s-shadowfox .CodeMirror-line > span > span::selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span > span::-moz-selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-gutters { background: #0c0c0d ; border-right: 1px solid #0c0c0d; }\n.cm-s-shadowfox .CodeMirror-guttermarker { color: #555; }\n.cm-s-shadowfox .CodeMirror-linenumber { color: #939393; }\n.cm-s-shadowfox .CodeMirror-cursor { border-left: 1px solid #fff; }\n\n.cm-s-shadowfox span.cm-comment { color: #939393; }\n.cm-s-shadowfox span.cm-atom { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-quote { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-builtin { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-attribute { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-keyword { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-error { color: #FF7DE9; }\n\n.cm-s-shadowfox span.cm-number { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string-2 { color: #6B89FF; }\n\n.cm-s-shadowfox span.cm-meta { color: #939393; }\n.cm-s-shadowfox span.cm-hr { color: #939393; }\n\n.cm-s-shadowfox span.cm-header { color: #75BFFF; }\n.cm-s-shadowfox span.cm-qualifier { color: #75BFFF; }\n.cm-s-shadowfox span.cm-variable-2 { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-property { color: #86DE74; }\n\n.cm-s-shadowfox span.cm-def { color: #75BFFF; }\n.cm-s-shadowfox span.cm-bracket { color: #75BFFF; }\n.cm-s-shadowfox span.cm-tag { color: #75BFFF; }\n.cm-s-shadowfox span.cm-link:visited { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-variable { color: #B98EFF; }\n.cm-s-shadowfox span.cm-variable-3 { color: #d7d7db; }\n.cm-s-shadowfox span.cm-link { color: #737373; }\n.cm-s-shadowfox span.cm-operator { color: #b1b1b3; }\n.cm-s-shadowfox span.cm-special { color: #d7d7db; }\n\n.cm-s-shadowfox .CodeMirror-activeline-background { background: rgba(185, 215, 253, .15) }\n.cm-s-shadowfox .CodeMirror-matchingbracket { outline: solid 1px rgba(255, 255, 255, .25); color: white !important; }\n"],sourceRoot:""}]);const t=a},82609:o=>{"use strict";o.exports=function(o){var n=[];return n.toString=function(){return this.map((function(n){var r=o(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(o,r,c){"string"==typeof o&&(o=[[null,o,""]]);var e={};if(c)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(e[a]=!0)}for(var t=0;t<o.length;t++){var A=[].concat(o[t]);c&&e[A[0]]||(r&&(A[2]?A[2]="".concat(r," and ").concat(A[2]):A[2]=r),n.push(A))}},n}},1799:o=>{"use strict";function n(o,n){(null==n||n>o.length)&&(n=o.length);for(var r=0,c=new Array(n);r<n;r++)c[r]=o[r];return c}o.exports=function(o){var r,c,e=(c=4,function(o){if(Array.isArray(o))return o}(r=o)||function(o,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(o)){var r=[],c=!0,e=!1,s=void 0;try{for(var a,t=o[Symbol.iterator]();!(c=(a=t.next()).done)&&(r.push(a.value),!n||r.length!==n);c=!0);}catch(o){e=!0,s=o}finally{try{c||null==t.return||t.return()}finally{if(e)throw s}}return r}}(r,c)||function(o,r){if(o){if("string"==typeof o)return n(o,r);var c=Object.prototype.toString.call(o).slice(8,-1);return"Object"===c&&o.constructor&&(c=o.constructor.name),"Map"===c||"Set"===c?Array.from(o):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?n(o,r):void 0}}(r,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=e[1],a=e[3];if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(A," */"),d=a.sources.map((function(o){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(o," */")}));return[s].concat(d).concat([i]).join("\n")}return[s].join("\n")}},53569:(o,n,r)=>{var c=r(64797);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[o.id,c,""]]);r(46062)(c,{insert:"head",singleton:!1}),c.locals&&(o.exports=c.locals)},46062:(o,n,r)=>{"use strict";var c,e={},s=function(){var o={};return function(n){if(void 0===o[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(o){r=null}o[n]=r}return o[n]}}();function a(o,n){for(var r=[],c={},e=0;e<o.length;e++){var s=o[e],a=n.base?s[0]+n.base:s[0],t={css:s[1],media:s[2],sourceMap:s[3]};c[a]?c[a].parts.push(t):r.push(c[a]={id:a,parts:[t]})}return r}function t(o,n){for(var r=0;r<o.length;r++){var c=o[r],s=e[c.id],a=0;if(s){for(s.refs++;a<s.parts.length;a++)s.parts[a](c.parts[a]);for(;a<c.parts.length;a++)s.parts.push(h(c.parts[a],n))}else{for(var t=[];a<c.parts.length;a++)t.push(h(c.parts[a],n));e[c.id]={id:c.id,refs:1,parts:t}}}}function A(o){var n=document.createElement("style");if(void 0===o.attributes.nonce){var c=r.nc;c&&(o.attributes.nonce=c)}if(Object.keys(o.attributes).forEach((function(r){n.setAttribute(r,o.attributes[r])})),"function"==typeof o.insert)o.insert(n);else{var e=s(o.insert||"head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}return n}var i,d=(i=[],function(o,n){return i[o]=n,i.filter(Boolean).join("\n")});function l(o,n,r,c){var e=r?"":c.css;if(o.styleSheet)o.styleSheet.cssText=d(n,e);else{var s=document.createTextNode(e),a=o.childNodes;a[n]&&o.removeChild(a[n]),a.length?o.insertBefore(s,a[n]):o.appendChild(s)}}function m(o,n,r){var c=r.css,e=r.media,s=r.sourceMap;if(e&&o.setAttribute("media",e),s&&btoa&&(c+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),o.styleSheet)o.styleSheet.cssText=c;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(c))}}var f=null,u=0;function h(o,n){var r,c,e;if(n.singleton){var s=u++;r=f||(f=A(n)),c=l.bind(null,r,s,!1),e=l.bind(null,r,s,!0)}else r=A(n),c=m.bind(null,r,n),e=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(r)};return c(o),function(n){if(n){if(n.css===o.css&&n.media===o.media&&n.sourceMap===o.sourceMap)return;c(o=n)}else e()}}o.exports=function(o,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===c&&(c=Boolean(window&&document&&document.all&&!window.atob)),c));var r=a(o,n);return t(r,n),function(o){for(var c=[],s=0;s<r.length;s++){var A=r[s],i=e[A.id];i&&(i.refs--,c.push(i))}o&&t(a(o,n),n);for(var d=0;d<c.length;d++){var l=c[d];if(0===l.refs){for(var m=0;m<l.parts.length;m++)l.parts[m]();delete e[l.id]}}}}}}]);
//# sourceMappingURL=3569.aa43933c9c3bbacac2c4.js.map