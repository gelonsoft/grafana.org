define(["./core","./var/document","./var/rnotwhite","./var/slice","./data/var/dataPriv","./core/init","./selector"],function(t,e,n,i,r){function o(){return!0}function s(){return!1}function a(){try{return e.activeElement}catch(t){}}function l(e,n,i,r,o,a){var u,c;if("object"==typeof n){"string"!=typeof i&&(r=r||i,i=void 0);for(c in n)l(e,c,i,r,n[c],a);return e}if(null==r&&null==o?(o=i,r=i=void 0):null==o&&("string"==typeof i?(o=r,r=void 0):(o=r,r=i,i=void 0)),o===!1)o=s;else if(!o)return e;return 1===a&&(u=o,o=function(e){return t().off(e),u.apply(this,arguments)},o.guid=u.guid||(u.guid=t.guid++)),e.each(function(){t.event.add(this,n,o,r,i)})}var u=/^key/,c=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,d=/^([^.]*)(?:\.(.+)|)/;return t.event={global:{},add:function(e,i,o,s,a){var l,u,c,f,h,p,g,m,v,y,_,b=r.get(e);if(b)for(o.handler&&(l=o,o=l.handler,a=l.selector),o.guid||(o.guid=t.guid++),(f=b.events)||(f=b.events={}),(u=b.handle)||(u=b.handle=function(n){return"undefined"!=typeof t&&t.event.triggered!==n.type?t.event.dispatch.apply(e,arguments):void 0}),i=(i||"").match(n)||[""],h=i.length;h--;)c=d.exec(i[h])||[],v=_=c[1],y=(c[2]||"").split(".").sort(),v&&(g=t.event.special[v]||{},v=(a?g.delegateType:g.bindType)||v,g=t.event.special[v]||{},p=t.extend({type:v,origType:_,data:s,handler:o,guid:o.guid,selector:a,needsContext:a&&t.expr.match.needsContext.test(a),namespace:y.join(".")},l),(m=f[v])||(m=f[v]=[],m.delegateCount=0,g.setup&&g.setup.call(e,s,y,u)!==!1||e.addEventListener&&e.addEventListener(v,u)),g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=o.guid)),a?m.splice(m.delegateCount++,0,p):m.push(p),t.event.global[v]=!0)},remove:function(e,i,o,s,a){var l,u,c,f,h,p,g,m,v,y,_,b=r.hasData(e)&&r.get(e);if(b&&(f=b.events)){for(i=(i||"").match(n)||[""],h=i.length;h--;)if(c=d.exec(i[h])||[],v=_=c[1],y=(c[2]||"").split(".").sort(),v){for(g=t.event.special[v]||{},v=(s?g.delegateType:g.bindType)||v,m=f[v]||[],c=c[2]&&new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=l=m.length;l--;)p=m[l],!a&&_!==p.origType||o&&o.guid!==p.guid||c&&!c.test(p.namespace)||s&&s!==p.selector&&("**"!==s||!p.selector)||(m.splice(l,1),p.selector&&m.delegateCount--,g.remove&&g.remove.call(e,p));u&&!m.length&&(g.teardown&&g.teardown.call(e,y,b.handle)!==!1||t.removeEvent(e,v,b.handle),delete f[v])}else for(v in f)t.event.remove(e,v+i[h],o,s,!0);t.isEmptyObject(f)&&r.remove(e,"handle events")}},dispatch:function(e){e=t.event.fix(e);var n,o,s,a,l,u=[],c=i.call(arguments),d=(r.get(this,"events")||{})[e.type]||[],f=t.event.special[e.type]||{};if(c[0]=e,e.delegateTarget=this,!f.preDispatch||f.preDispatch.call(this,e)!==!1){for(u=t.event.handlers.call(this,e,d),n=0;(a=u[n++])&&!e.isPropagationStopped();)for(e.currentTarget=a.elem,o=0;(l=a.handlers[o++])&&!e.isImmediatePropagationStopped();)(!e.rnamespace||e.rnamespace.test(l.namespace))&&(e.handleObj=l,e.data=l.data,s=((t.event.special[l.origType]||{}).handle||l.handler).apply(a.elem,c),void 0!==s&&(e.result=s)===!1&&(e.preventDefault(),e.stopPropagation()));return f.postDispatch&&f.postDispatch.call(this,e),e.result}},handlers:function(e,n){var i,r,o,s,a=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],i=0;l>i;i++)s=n[i],o=s.selector+" ",void 0===r[o]&&(r[o]=s.needsContext?t(o,this).index(u)>-1:t.find(o,this,null,[u]).length),r[o]&&r.push(s);r.length&&a.push({elem:u,handlers:r})}return l<n.length&&a.push({elem:this,handlers:n.slice(l)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,n){var i,r,o,s=n.button;return null==t.pageX&&null!=n.clientX&&(i=t.target.ownerDocument||e,r=i.documentElement,o=i.body,t.pageX=n.clientX+(r&&r.scrollLeft||o&&o.scrollLeft||0)-(r&&r.clientLeft||o&&o.clientLeft||0),t.pageY=n.clientY+(r&&r.scrollTop||o&&o.scrollTop||0)-(r&&r.clientTop||o&&o.clientTop||0)),t.which||void 0===s||(t.which=1&s?1:2&s?3:4&s?2:0),t}},fix:function(n){if(n[t.expando])return n;var i,r,o,s=n.type,a=n,l=this.fixHooks[s];for(l||(this.fixHooks[s]=l=c.test(s)?this.mouseHooks:u.test(s)?this.keyHooks:{}),o=l.props?this.props.concat(l.props):this.props,n=new t.Event(a),i=o.length;i--;)r=o[i],n[r]=a[r];return n.target||(n.target=e),3===n.target.nodeType&&(n.target=n.target.parentNode),l.filter?l.filter(n,a):n},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==a()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===a()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&t.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return t.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},t.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},t.Event=function(e,n){return this instanceof t.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?o:s):this.type=e,n&&t.extend(this,n),this.timeStamp=e&&e.timeStamp||t.now(),void(this[t.expando]=!0)):new t.Event(e,n)},t.Event.prototype={constructor:t.Event,isDefaultPrevented:s,isPropagationStopped:s,isImmediatePropagationStopped:s,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=o,t&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=o,t&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=o,t&&t.stopImmediatePropagation(),this.stopPropagation()}},t.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,n){t.event.special[e]={delegateType:n,bindType:n,handle:function(e){var i,r=this,o=e.relatedTarget,s=e.handleObj;return(!o||o!==r&&!t.contains(r,o))&&(e.type=s.origType,i=s.handler.apply(this,arguments),e.type=n),i}}}),t.fn.extend({on:function(t,e,n,i){return l(this,t,e,n,i)},one:function(t,e,n,i){return l(this,t,e,n,i,1)},off:function(e,n,i){var r,o;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,t(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(i=n,n=void 0),i===!1&&(i=s),this.each(function(){t.event.remove(this,e,i,n)})}}),t});