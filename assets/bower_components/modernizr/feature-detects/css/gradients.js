/*!
{
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "http://webkit.org/blog/175/introducing-css-gradients/"
  },{
    "name": "Mozilla Linear Gradient Syntax",
    "href": "http://developer.mozilla.org/en/CSS/-moz-linear-gradient"
  },{
    "name": "Mozilla Radial Gradient Syntax",
    "href": "http://developer.mozilla.org/en/CSS/-moz-radial-gradient"
  },{
    "name": "W3C Gradient Spec",
    "href": "dev.w3.org/csswg/css3-images/#gradients-"
  }]
}
!*/
define(["Modernizr","prefixes","createElement"],function(e,t,n){e.addTest("cssgradients",function(){var i="background-image:",r="gradient(linear,left top,right bottom,from(#9f9),to(white));",s="linear-gradient(left top,#9f9, white);",d=i+t.join(s+i).slice(0,-i.length);e._config.usePrefixes&&(d+=i+"-webkit-"+r);var o=n("a"),a=o.style;return a.cssText=d,(""+a.backgroundImage).indexOf("gradient")>-1})});