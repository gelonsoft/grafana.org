define(["../core"],function(e){var t=e.access=function(t,n,r,i,o,a,s){var u=0,l=t.length,c=null==r;if("object"===e.type(r)){o=!0;for(u in r)e.access(t,n,u,r[u],!0,a,s)}else if(void 0!==i&&(o=!0,e.isFunction(i)||(s=!0),c&&(s?(n.call(t,i),n=null):(c=n,n=function(t,n,r){return c.call(e(t),r)})),n))for(;l>u;u++)n(t[u],r,s?i:i.call(t[u],u,n(t[u],r)));return o?t:c?n.call(t):l?n(t[0],r):a};return t});