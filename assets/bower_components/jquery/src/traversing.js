define(["./core","./var/indexOf","./traversing/var/dir","./traversing/var/siblings","./traversing/var/rneedsContext","./core/init","./traversing/findFilter","./selector"],function(t,e,n,i,r){function o(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}var s=/^(?:parents|prev(?:Until|All))/,a={children:!0,contents:!0,next:!0,prev:!0};return t.fn.extend({has:function(e){var n=t(e,this),i=n.length;return this.filter(function(){for(var e=0;i>e;e++)if(t.contains(this,n[e]))return!0})},closest:function(e,n){for(var i,o=0,s=this.length,a=[],l=r.test(e)||"string"!=typeof e?t(e,n||this.context):0;s>o;o++)for(i=this[o];i&&i!==n;i=i.parentNode)if(i.nodeType<11&&(l?l.index(i)>-1:1===i.nodeType&&t.find.matchesSelector(i,e))){a.push(i);break}return this.pushStack(a.length>1?t.uniqueSort(a):a)},index:function(n){return n?"string"==typeof n?e.call(t(n),this[0]):e.call(this,n.jquery?n[0]:n):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,n){return this.pushStack(t.uniqueSort(t.merge(this.get(),t(e,n))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),t.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return n(t,"parentNode")},parentsUntil:function(t,e,i){return n(t,"parentNode",i)},next:function(t){return o(t,"nextSibling")},prev:function(t){return o(t,"previousSibling")},nextAll:function(t){return n(t,"nextSibling")},prevAll:function(t){return n(t,"previousSibling")},nextUntil:function(t,e,i){return n(t,"nextSibling",i)},prevUntil:function(t,e,i){return n(t,"previousSibling",i)},siblings:function(t){return i((t.parentNode||{}).firstChild,t)},children:function(t){return i(t.firstChild)},contents:function(e){return e.contentDocument||t.merge([],e.childNodes)}},function(e,n){t.fn[e]=function(i,r){var o=t.map(this,n,i);return"Until"!==e.slice(-5)&&(r=i),r&&"string"==typeof r&&(o=t.filter(r,o)),this.length>1&&(a[e]||t.uniqueSort(o),s.test(e)&&o.reverse()),this.pushStack(o)}}),t});