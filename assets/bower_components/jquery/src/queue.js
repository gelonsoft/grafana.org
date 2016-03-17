define(["./core","./data/var/data_priv","./deferred","./callbacks"],function(e,t){return e.extend({queue:function(n,r,i){var o;return n?(r=(r||"fx")+"queue",o=t.get(n,r),i&&(!o||e.isArray(i)?o=t.access(n,r,e.makeArray(i)):o.push(i)),o||[]):void 0},dequeue:function(t,n){n=n||"fx";var r=e.queue(t,n),i=r.length,o=r.shift(),a=e._queueHooks(t,n),s=function(){e.dequeue(t,n)};"inprogress"===o&&(o=r.shift(),i--),o&&("fx"===n&&r.unshift("inprogress"),delete a.stop,o.call(t,s,a)),!i&&a&&a.empty.fire()},_queueHooks:function(n,r){var i=r+"queueHooks";return t.get(n,i)||t.access(n,i,{empty:e.Callbacks("once memory").add(function(){t.remove(n,[r+"queue",i])})})}}),e.fn.extend({queue:function(t,n){var r=2;return"string"!=typeof t&&(n=t,t="fx",r--),arguments.length<r?e.queue(this[0],t):void 0===n?this:this.each(function(){var r=e.queue(this,t,n);e._queueHooks(this,t),"fx"===t&&"inprogress"!==r[0]&&e.dequeue(this,t)})},dequeue:function(t){return this.each(function(){e.dequeue(this,t)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(n,r){var i,o=1,a=e.Deferred(),s=this,u=this.length,l=function(){--o||a.resolveWith(s,[s])};for("string"!=typeof n&&(r=n,n=void 0),n=n||"fx";u--;)i=t.get(s[u],n+"queueHooks"),i&&i.empty&&(o++,i.empty.add(l));return l(),a.promise(r)}}),e});