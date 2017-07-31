webpackJsonp([5],{975:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(17),o=(r.n(n),r(976));t.default=r.i(n.createScene)({name:"examplesGithub",component:o.a})},976:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=r(978),u=(r.n(i),r(1)),c=r.n(u),f=r(15),l=r.n(f),p=r(8),m=r(16),h=r(57);r.d(t,"a",function(){return y});var g,b,d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),v="https://api.github.com",y=(g=r.i(p.a)({actions:function(){return{setUsername:function(e){return{username:e}},setRepositories:function(e){return{repositories:e}},setFetchError:function(e){return{message:e}}}},reducers:function(e){var t,r,n,o=e.actions;return{username:["keajs",l.a.string,a({},o.setUsername,function(e,t){return t.username})],repositories:[[],l.a.array,(t={},a(t,o.setUsername,function(){return[]}),a(t,o.setRepositories,function(e,t){return t.repositories}),t)],isLoading:[!0,l.a.bool,(r={},a(r,o.setUsername,function(){return!0}),a(r,o.setRepositories,function(){return!1}),a(r,o.setFetchError,function(){return!1}),r)],error:[null,l.a.string,(n={},a(n,o.setUsername,function(){return null}),a(n,o.setFetchError,function(e,t){return t.message}),n)]}},selectors:function(e){var t=e.selectors;return{sortedRepositories:[function(){return[t.repositories]},function(e){return e.sort(function(e,t){return t.stargazers_count-e.stargazers_count})},l.a.array]}},start:regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.actions.setUsername,e.next=3,this.get("username");case 3:return n=e.sent,e.next=6,r.i(m.put)(t(n));case 6:case"end":return e.stop()}},e,this)}),takeLatest:function(e){var t=e.actions,r=e.workers;return a({},t.setUsername,r.fetchRepositories)},workers:{fetchRepositories:regeneratorRuntime.mark(function e(t){var n,o,s,a,i,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.actions,o=n.setRepositories,s=n.setFetchError,a=t.payload.username,e.next=4,r.i(h.delay)(100);case 4:return e.next=6,window.fetch(v+"/users/"+a+"/repos?per_page=250");case 6:if(i=e.sent,200!==i.status){e.next=15;break}return e.next=10,i.json();case 10:return u=e.sent,e.next=13,r.i(m.put)(o(u));case 13:e.next=20;break;case 15:return e.next=17,i.json();case 17:return c=e.sent,e.next=20,r.i(m.put)(s(c.message));case 20:case"end":return e.stop()}},e,this)})}}),g(b=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.username,r=e.isLoading,n=e.repositories,o=e.sortedRepositories,s=e.error,a=this.actions.setUsername;return c.a.createElement("div",{className:"example-github-scene"},c.a.createElement("div",{style:{marginBottom:20}},c.a.createElement("h1",null,"Search for a github user"),c.a.createElement("input",{value:t,autoFocus:!0,type:"text",onChange:function(e){return a(e.target.value)}})),r?c.a.createElement("div",null,"Loading..."):n.length>0?c.a.createElement("div",null,"Found ",n.length," repositories for user ",t,"!",o.map(function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("a",{href:e.html_url,target:"_blank"},e.full_name)," - ",e.stargazers_count," stars, ",e.forks," forks.")})):c.a.createElement("div",null,s?"Error: "+s:"No repositories found"))}}]),t}(u.Component))||b)},977:function(e,t,r){t=e.exports=r(24)(),t.push([e.i,".example-github-scene {\n  padding: 20px;\n}\n",""])},978:function(e,t,r){var n=r(977);"string"==typeof n&&(n=[[e.i,n,""]]);r(25)(n,{});n.locals&&(e.exports=n.locals)}});