/*! http://mths.be/placeholder v2.0.7 by @mathias */
!function(t,n,e){function r(t){var n={},r=/^jQuery\d+$/;return e.each(t.attributes,function(t,e){e.specified&&!r.test(e.name)&&(n[e.name]=e.value)}),n}function o(t,r){var o=this,i=e(o);if(o.value==i.attr("placeholder")&&i.hasClass("placeholder"))if(i.data("placeholder-password")){if(i=i.hide().next().show().attr("id",i.removeAttr("id").data("placeholder-id")),t===!0)return i[0].value=r;i.focus()}else o.value="",i.removeClass("placeholder"),o==n.activeElement&&o.select()}function i(){var t,n=this,i=e(n),u=this.id;if(""==n.value){if("password"==n.type){if(!i.data("placeholder-textinput")){try{t=i.clone().attr({type:"text"})}catch(a){t=e("<input>").attr(e.extend(r(this),{type:"text"}))}t.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":u}).bind("focus.placeholder",o),i.data({"placeholder-textinput":t,"placeholder-id":u}).before(t)}i=i.removeAttr("id").hide().prev().attr("id",u).show()}i.addClass("placeholder"),i[0].value=i.attr("placeholder")}else i.removeClass("placeholder")}var u,a,c="placeholder"in n.createElement("input"),l="placeholder"in n.createElement("textarea"),f=e.fn,s=e.valHooks;c&&l?(a=f.placeholder=function(){return this},a.input=a.textarea=!0):(a=f.placeholder=function(){var t=this;return t.filter((c?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":o,"blur.placeholder":i}).data("placeholder-enabled",!0).trigger("blur.placeholder"),t},a.input=c,a.textarea=l,u={get:function(t){var n=e(t);return n.data("placeholder-enabled")&&n.hasClass("placeholder")?"":t.value},set:function(t,r){var u=e(t);return u.data("placeholder-enabled")?(""==r?(t.value=r,t!=n.activeElement&&i.call(t)):u.hasClass("placeholder")?o.call(t,!0,r)||(t.value=r):t.value=r,u):t.value=r}},c||(s.input=u),l||(s.textarea=u),e(function(){e(n).delegate("form","submit.placeholder",function(){var t=e(".placeholder",this).each(o);setTimeout(function(){t.each(i)},10)})}),e(t).bind("beforeunload.placeholder",function(){e(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);