Modernizr.addTest("formattribute",function(){var e,t=document.createElement("form"),n=document.createElement("input"),r=document.createElement("div"),d="formtest"+(new Date).getTime(),i=!1;return t.id=d,document.createAttribute&&(e=document.createAttribute("form"),e.nodeValue=d,n.setAttributeNode(e),r.appendChild(t),r.appendChild(n),document.documentElement.appendChild(r),i=1===t.elements.length&&n.form==t,r.parentNode.removeChild(r)),i});