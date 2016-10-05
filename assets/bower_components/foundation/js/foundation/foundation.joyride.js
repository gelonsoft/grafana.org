!function(t,e,n,i){"use strict";Foundation.libs.joyride={name:"joyride",version:"5.4.7",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',prev_button:'<a href="#" class="small button joyride-prev-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(e,n,i){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||t.extend({},this.defaults,i||n),this.bindings(n,i)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var n=this;t(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(t){t.preventDefault(),this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(t){t.preventDefault(),this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(t){t.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.fndtn.joyride",function(t){if(this.settings.keyboard&&this.settings.riding)switch(t.which){case 39:t.preventDefault(),this.go_next();break;case 37:t.preventDefault(),this.go_prev();break;case 27:t.preventDefault(),this.end(this.settings.abort_on_close)}}.bind(this)),t(e).off(".joyride").on("resize.fndtn.joyride",n.throttle(function(){if(t("["+n.attr_name()+"]").length>0&&n.settings.$next_tip&&n.settings.riding){if(n.settings.exposed.length>0){var e=t(n.settings.exposed);e.each(function(){var e=t(this);n.un_expose(e),n.expose(e)})}n.is_phone()?n.pos_phone():n.pos_default(!1)}},100))},start:function(){var e=this,n=t("["+this.attr_name()+"]",this.scope),i=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],r=i.length;!n.length>0||(this.settings.init||this.events(),this.settings=n.data(this.attr_name(!0)+"-init"),this.settings.$content_el=n,this.settings.$body=t(this.settings.tip_container),this.settings.body_offset=t(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,"function"!=typeof t.cookie&&(this.settings.cookie_monster=!1),(!this.settings.cookie_monster||this.settings.cookie_monster&&!t.cookie(this.settings.cookie_name))&&(this.settings.$tip_content.each(function(n){var o=t(this);this.settings=t.extend({},e.defaults,e.data_options(o));for(var a=r;a--;)e.settings[i[a]]=parseInt(e.settings[i[a]],10);e.create({$li:o,index:n})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li(),this.show()},tip_template:function(e){var n,i;return e.tip_class=e.tip_class||"",n=t(this.settings.template.tip).addClass(e.tip_class),i=t.trim(t(e.li).html())+this.prev_button_text(e.prev_button_text,e.index)+this.button_text(e.button_text)+this.settings.template.link+this.timer_instance(e.index),n.append(t(this.settings.template.wrapper)),n.first().attr(this.add_namespace("data-index"),e.index),t(".joyride-content-wrapper",n).append(i),n[0]},timer_instance:function(e){var n;return n=0===e&&this.settings.start_timer_on_click&&this.settings.timer>0||0===this.settings.timer?"":t(this.settings.template.timer)[0].outerHTML},button_text:function(e){return this.settings.tip_settings.next_button?(e=t.trim(e)||"Next",e=t(this.settings.template.button).append(e)[0].outerHTML):e="",e},prev_button_text:function(e,n){return this.settings.tip_settings.prev_button?(e=t.trim(e)||"Previous",e=0==n?t(this.settings.template.prev_button).append(e).addClass("disabled")[0].outerHTML:t(this.settings.template.prev_button).append(e)[0].outerHTML):e="",e},create:function(e){this.settings.tip_settings=t.extend({},this.settings,this.data_options(e.$li));var n=e.$li.attr(this.add_namespace("data-button"))||e.$li.attr(this.add_namespace("data-text")),i=e.$li.attr(this.add_namespace("data-button-prev"))||e.$li.attr(this.add_namespace("data-prev-text")),r=e.$li.attr("class"),o=t(this.tip_template({tip_class:r,index:e.index,button_text:n,prev_button_text:i,li:e.$li}));t(this.settings.tip_container).append(o)},show:function(e,n){var r=null;this.settings.$li===i||-1===t.inArray(this.settings.$li.index(),this.settings.pause_after)?(this.settings.paused?this.settings.paused=!1:this.set_li(e,n),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0?(e&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=t.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],/body/i.test(this.settings.$target.selector)||this.scroll_to(),this.is_phone()?this.pos_phone(!0):this.pos_default(!0),r=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(r.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){r.animate({width:r.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(r.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){r.animate({width:r.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip):this.settings.$li&&this.settings.$target.length<1?this.show(e,n):this.end()):this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||t(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(t.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(t,e){t?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(e?this.settings.$li=this.settings.$li.prev():this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=t(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var e=this.settings.$li.attr(this.add_namespace("data-class")),i=this.settings.$li.attr(this.add_namespace("data-id")),r=function(){return i?t(n.getElementById(i)):e?t("."+e).first():t("body")};this.settings.$target=r()},scroll_to:function(){var n,i;n=t(e).height()/2,i=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),0!=i&&t("html, body").stop().animate({scrollTop:i},this.settings.scroll_speed,"swing")},paused:function(){return-1===t.inArray(this.settings.$li.index()+1,this.settings.pause_after)},restart:function(){this.hide(),this.settings.$li=i,this.show("init")},pos_default:function(t){var e=this.settings.$next_tip.find(".joyride-nub"),n=Math.ceil(e.outerWidth()/2),i=Math.ceil(e.outerHeight()/2),r=t||!1;if(r&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector))this.settings.$li.length&&this.pos_modal(e);else{var o=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,a=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+i+this.settings.$target.outerHeight()+o,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+a}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+i+this.settings.$target.outerHeight()+o,left:this.settings.$target.offset().left+a}),this.nub_position(e,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-i+o,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-i+o,left:this.settings.$target.offset().left+a}),this.nub_position(e,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+o,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+n+a}),this.nub_position(e,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+o,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-n+a}),this.nub_position(e,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}r&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(e){var n=this.settings.$next_tip.outerHeight(),i=(this.settings.$next_tip.offset(),this.settings.$target.outerHeight()),r=t(".joyride-nub",this.settings.$next_tip),o=Math.ceil(r.outerHeight()/2),a=e||!1;r.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),a&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(r):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-n-o}),r.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+i+o}),r.addClass("top")),a&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(t){this.center(),t.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var e=t(".joyride-modal-bg");e.length<1&&t("body").append(this.settings.template.modal).show(),/pop/i.test(this.settings.tip_animation)?e.show():e.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var n,i,r,o,a,s="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof t)r=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;r=this.settings.$target}return r.length<1?(e.console&&console.error("element not valid",r),!1):(n=t(this.settings.template.expose),this.settings.$body.append(n),n.css({top:r.offset().top,left:r.offset().left,width:r.outerWidth(!0),height:r.outerHeight(!0)}),i=t(this.settings.template.expose_cover),o={zIndex:r.css("z-index"),position:r.css("position")},a=null==r.attr("class")?"":r.attr("class"),r.css("z-index",parseInt(n.css("z-index"))+1),"static"==o.position&&r.css("position","relative"),r.data("expose-css",o),r.data("orig-class",a),r.attr("class",a+" "+this.settings.expose_add_class),i.css({top:r.offset().top,left:r.offset().left,width:r.outerWidth(!0),height:r.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(i),n.addClass(s),i.addClass(s),r.data("expose",s),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,r),void this.add_exposed(r))},un_expose:function(){var n,i,r,o,a,s=!1;if(arguments.length>0&&arguments[0]instanceof t)i=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;i=this.settings.$target}return i.length<1?(e.console&&console.error("element not valid",i),!1):(n=i.data("expose"),r=t("."+n),arguments.length>1&&(s=arguments[1]),s===!0?t(".joyride-expose-wrapper,.joyride-expose-cover").remove():r.remove(),o=i.data("expose-css"),"auto"==o.zIndex?i.css("z-index",""):i.css("z-index",o.zIndex),o.position!=i.css("position")&&("static"==o.position?i.css("position",""):i.css("position",o.position)),a=i.data("orig-class"),i.attr("class",a),i.removeData("orig-classes"),i.removeData("expose"),i.removeData("expose-z-index"),void this.remove_exposed(i))},add_exposed:function(e){this.settings.exposed=this.settings.exposed||[],e instanceof t||"object"==typeof e?this.settings.exposed.push(e[0]):"string"==typeof e&&this.settings.exposed.push(e)},remove_exposed:function(e){var n,i;for(e instanceof t?n=e[0]:"string"==typeof e&&(n=e),this.settings.exposed=this.settings.exposed||[],i=this.settings.exposed.length;i--;)if(this.settings.exposed[i]==n)return void this.settings.exposed.splice(i,1)},center:function(){var n=t(e);return this.settings.$next_tip.css({top:(n.height()-this.settings.$next_tip.outerHeight())/2+n.scrollTop(),left:(n.width()-this.settings.$next_tip.outerWidth())/2+n.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(n){var i=t(e),r=i.height()/2,o=Math.ceil(this.settings.$target.offset().top-r+this.settings.$next_tip.outerHeight()),a=i.width()+i.scrollLeft(),s=i.height()+o,u=i.height()+i.scrollTop(),l=i.scrollTop();return l>o&&(l=0>o?0:o),s>u&&(u=s),[n.offset().top<l,a<n.offset().left+n.outerWidth(),u<n.offset().top+n.outerHeight(),i.scrollLeft()>n.offset().left]},visible:function(t){for(var e=t.length;e--;)if(t[e])return!1;return!0},nub_position:function(t,e,n){"auto"===e?t.addClass(n):t.addClass(e)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(e){this.settings.cookie_monster&&t.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),t(this.scope).off("keyup.joyride"),this.settings.$next_tip.data("closed",!0),this.settings.riding=!1,t(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),("undefined"==typeof e||e===!1)&&(this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip)),t(".joyride-tip-guide").remove()},off:function(){t(this.scope).off(".joyride"),t(e).off(".joyride"),t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),t(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate),this.settings={}},reflow:function(){}}}(jQuery,window,window.document);