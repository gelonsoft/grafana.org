define(["ModernizrProto","testPropsAll","cssToDOM","atRule"],function(e,t,n,i){var r=e.prefixed=function(e,r,o){return 0===e.indexOf("@")?i(e):(-1!=e.indexOf("-")&&(e=n(e)),r?t(e,r,o):t(e,"pfx"))};return r});