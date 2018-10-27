// build time:Sat Oct 27 2018 21:00:39 GMT+0800 (CST)
function offset(t){for(var i=0,e=0;t.offsetParent;)i+=t.offsetTop,e+=t.offsetLeft,t=t.offsetParent;return{top:i,left:e}}$(document).ready(function(){function t(t){this.el=$(t.el),this.status=$.extend({},{init:{width:"100%",opacity:1,left:0,rotateZ:0,top:0}},t.status)}NexT.motion={};var i={lines:[],push:function(t){this.lines.push(t)},init:function(){this.lines.forEach(function(t){t.init()})},arrow:function(){this.lines.forEach(function(t){t.arrow()})},close:function(){this.lines.forEach(function(t){t.close()})}};t.prototype.init=function(){this.transform("init")},t.prototype.arrow=function(){this.transform("arrow")},t.prototype.close=function(){this.transform("close")},t.prototype.transform=function(t){this.el.velocity("stop").velocity(this.status[t])};var e=new t({el:".sidebar-toggle-line-first",status:{arrow:{width:"50%",rotateZ:"-45deg",top:"2px"},close:{width:"100%",rotateZ:"-45deg",top:"5px"}}}),o=new t({el:".sidebar-toggle-line-middle",status:{arrow:{width:"90%"},close:{opacity:0}}}),n=new t({el:".sidebar-toggle-line-last",status:{arrow:{width:"50%",rotateZ:"45deg",top:"-2px"},close:{width:"100%",rotateZ:"45deg",top:"-5px"}}});i.push(e),i.push(o),i.push(n);var s,r,a="320px",l=200,c={toggleEl:$(".sidebar-toggle"),dimmerEl:$("#sidebar-dimmer"),sidebarEl:$(".sidebar"),isSidebarVisible:!1,init:function(){this.toggleEl.on("click",this.clickHandler.bind(this)),this.dimmerEl.on("click",this.clickHandler.bind(this)),this.toggleEl.on("mouseenter",this.mouseEnterHandler.bind(this)),this.toggleEl.on("mouseleave",this.mouseLeaveHandler.bind(this)),this.sidebarEl.on("touchstart",this.touchstartHandler.bind(this)),this.sidebarEl.on("touchend",this.touchendHandler.bind(this)),this.sidebarEl.on("touchmove",function(t){t.preventDefault()}),$(document).on("sidebar.isShowing",function(){NexT.utils.isDesktop()&&$("body").velocity("stop").velocity({paddingLeft:a,paddingRight:"240px"},l)}).on("sidebar.isHiding",function(){})},clickHandler:function(){this.isSidebarVisible?this.hideSidebar():this.showSidebar(),this.isSidebarVisible=!this.isSidebarVisible},mouseEnterHandler:function(){this.isSidebarVisible||i.arrow()},mouseLeaveHandler:function(){this.isSidebarVisible||i.init()},touchstartHandler:function(t){s=t.originalEvent.touches[0].clientX,r=t.originalEvent.touches[0].clientY},touchendHandler:function(t){var i=t.originalEvent.changedTouches[0].clientX,e=t.originalEvent.changedTouches[0].clientY;i-s>30&&Math.abs(e-r)<20&&this.clickHandler()},showSidebar:function(){var t=this;i.close(),this.sidebarEl.velocity("stop").velocity({width:a},{display:"block",duration:l,begin:function(){$(".sidebar .motion-element").velocity("transition.slideRightIn",{stagger:50,drag:!0,complete:function(){t.sidebarEl.trigger("sidebar.motion.complete")}})},complete:function(){t.sidebarEl.addClass("sidebar-active"),t.sidebarEl.trigger("sidebar.didShow")}}),this.sidebarEl.trigger("sidebar.isShowing")},hideSidebar:function(){NexT.utils.isDesktop()&&$("body").velocity("stop").velocity({paddingRight:0}),this.sidebarEl.find(".motion-element").velocity("stop").css("display","none"),this.sidebarEl.velocity("stop").velocity({width:0},{display:"none"}),i.init(),this.sidebarEl.removeClass("sidebar-active"),this.sidebarEl.trigger("sidebar.isHiding"),$(".post-toc-wrap")&&("block"===$(".site-overview-wrap").css("display")?$(".post-toc-wrap").removeClass("motion-element"):$(".post-toc-wrap").addClass("motion-element"))}};c.init(),NexT.motion.integrator={queue:[],cursor:-1,add:function(t){return this.queue.push(t),this},next:function(){this.cursor++;var t=this.queue[this.cursor];$.isFunction(t)&&t(NexT.motion.integrator)},bootstrap:function(){this.next()}},NexT.motion.middleWares={logo:function(t){function i(t,i){return{e:$(t),p:{translateX:i},o:{duration:500,sequenceQueue:!1}}}function e(t){return t=Array.isArray(t)?t:[t],t.every(function(t){return $.isFunction(t.size)&&t.size()>0})}var o=[],n=$(".brand"),s=$(".site-title"),r=$(".site-subtitle"),a=$(".logo-line-before i"),l=$(".logo-line-after i");n.size()>0&&o.push({e:n,p:{opacity:1},o:{duration:200}}),NexT.utils.isMist()&&e([a,l])&&o.push(i(a,"100%"),i(l,"-100%")),e(s)&&o.push({e:s,p:{opacity:1,top:0},o:{duration:200}}),e(r)&&o.push({e:r,p:{opacity:1,top:0},o:{duration:200}}),CONFIG.motion.async&&t.next(),o.length>0?(o[o.length-1].o.complete=function(){t.next()},$.Velocity.RunSequence(o)):t.next()},menu:function(t){CONFIG.motion.async&&t.next(),$(".menu-item").velocity("transition.slideDownIn",{display:null,duration:200,complete:function(){t.next()}})},postList:function(t){function i(){var i=window.postMotionOptions||{stagger:100,drag:!0};i.complete=function(){CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())&&d.css({transform:"initial"}),t.next()},CONFIG.motion.transition.post_block&&e.velocity("transition."+o,i),CONFIG.motion.transition.post_header&&n.velocity("transition."+s,i),CONFIG.motion.transition.post_body&&r.velocity("transition."+a,i),CONFIG.motion.transition.coll_header&&l.velocity("transition."+c,i),CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())&&d.velocity("transition."+u,i)}var e=$(".post-block, .pagination, .comments"),o=CONFIG.motion.transition.post_block,n=$(".post-header"),s=CONFIG.motion.transition.post_header,r=$(".post-body"),a=CONFIG.motion.transition.post_body,l=$(".collection-title, .archive-year"),c=CONFIG.motion.transition.coll_header,d=$(".sidebar-inner"),u=CONFIG.motion.transition.sidebar,h=e.size()>0;h?i():t.next(),CONFIG.motion.async&&t.next()},sidebar:function(t){"always"===CONFIG.sidebar.display&&NexT.utils.displaySidebar(),t.next()}}}),window.onload=function(){var t=document.getElementsByClassName("sfix")[0];t.offset=offset(t),window.onscroll=function(t){var i=document.getElementsByClassName("sfix")[0];window.pageYOffset&&i.offset&&window.pageYOffset>i.offset.top?(i.style.position="fixed",i.style.left=i.offset.left+"px",i.style.right="auto"):(i.style.position="absolute",i.style.left="auto",i.style.right="-240px")}};
//rebuild by neat 