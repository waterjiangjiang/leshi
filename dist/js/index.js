"use strict";$.getJSON("json/bannerslider.json",function(t){for(var i=t.pic,n=i.length,e=t.color,c=t.pics1,s=t.pics2,h=t.pics3,l=t.pics4,o=t.pics5,a=t.pics6,p=0;p<n;p++)$(".pic").append('<div class="pic_box"><img src="img/'.concat(i[p],'" width = "1196px" height= "420px"></div>')),$(".pic_box").eq(p).css({width:$(window).width(),background:e[p]});var r=null,d=0,u=0;function m(){var t=parseInt($(".pic_box").css("width"))*d;$(".pic").animate({left:-t},500)}function f(){$(".small ul li").each(function(t){$(this).children("a").css("background","#ccc")}),$(".small ul li").eq(u).children("a").css("background","#2884c7")}function x(){clearInterval(r),r=setInterval(function(){n<=++d&&($(".pic").css("left","0"),d=1),n-1<=++u&&(u=0);var t=parseInt($(".pic_box").css("width"))*d;$(".pic").animate({left:-t},500),$(".small ul li").each(function(t){$(this).children("a").css("background","#ccc")}),$(".small ul li").eq(u).children("a").css("background","#2884c7"),f()},3e3)}x(),$(".small").mouseenter(function(){$(this).children("span").css("display","block")}),$(".small").mouseleave(function(){$(this).children("span").css("display","none")}),$(".lt_btn").click(function(){d--,--u<0&&(u=n-2),f(),d<0&&(d=n-2,$(".pic").css("left",-parseInt($(".pic_box").css("width"))*(d+1))),m()}),$(".lt_btn").mouseup(function(){x()}),$(".rt_btn").click(function(){d++,n-1<=++u&&(u=0),f(),n-1<d&&(d=1,$(".pic").css("left","0")),m()}),$(".rt_btn").mouseup(function(){x()}),$(".small ul li").each(function(t){$(this).click(function(){u=d=t,m(),f()}),$(this).mouseup(function(){x()})}),$(".super_tv .super_tv_bottom dl").each(function(t){$(this).children("h6").children("img").attr("src","img/"+c[t])}),$(".long_tv_pic").each(function(t){$(this).append($('<img src="img/'.concat(s[t],'" alt="" width="1196px" height="120px">')))}),$(".accessories .acs_r dl").each(function(t){$(this).children("h6").children("img").attr("src","img/"+h[t]+".jpg")}),$(".live_house_lpic").each(function(t){$(this).append($('<img src="img/'.concat(l[t],'.jpg" alt="">')))}),$(".live_house dl").each(function(t){$(this).children("h6").children("img").attr("src","img/"+o[t]+".jpg")});for(var g=0;g<a.length;g++)$(".waterfall").append($('<dl>\n\t\t\t\t\t\t<h6><img src="img/'.concat(a[g],'.jpg" alt=""></h6>\n\t\t\t\t\t\t<h4>超级电视 Zero65 艺术底座</h4>\n\t\t\t\t\t\t<dt>量身定制 | 单立柱式结构</dt>\n\t\t\t\t\t\t<dd>¥399</dd>\n\t\t\t\t\t\t<p><a href="jacascript:;">立即购买</a></p>\n\t\t\t\t\t</dl>')));$(".waterfall dl").each(function(t){$(this).mouseenter(function(){$(this).children("h6").children("img").css({position:"absolute"}),$(this).children("h6").children("img").animate({width:"164px",height:"164px",left:"-2px",top:"-2px"},300),$(this).children("p").animate({bottom:"40px"},200)}),$(this).mouseleave(function(){$(this).children("h6").children("img").animate({width:"160px",height:"160px",left:"0px",top:"0px"},300),$(this).children("p").animate({bottom:"-40px"},200)})})}),$(".live_type .live_type_case dl").each(function(t){$(this).mouseenter(function(){$(this).children("h6").children("img").css({position:"absolute"}),$(this).children("h6").children("img").animate({width:"164px",height:"164px",left:"-2px",top:"-2px"},300)}),$(this).mouseleave(function(){$(this).children("h6").children("img").animate({width:"160px",height:"160px",left:"0px",top:"0px"},300)})}),$(".super_tv .super_tv_bottom dl").each(function(t){$(this).mouseenter(function(){$(this).children("h6").children("img").css({position:"absolute"}),$(this).children("h6").children("img").animate({width:"234px",height:"234px",left:"-2px",top:"-2px"},300),$(this).children("p").animate({bottom:"40px"},200)}),$(this).mouseleave(function(){$(this).children("h6").children("img").animate({width:"230px",height:"230px",left:"0px",top:"0px"},300),$(this).children("p").animate({bottom:"-40px"},200)})}),$(".accessories .acs_r dl").each(function(t){$(this).mouseenter(function(){$(this).children("h6").children("img").css({position:"absolute"}),$(this).children("h6").children("img").animate({width:"164px",height:"164px",left:"-2px",top:"-2px"},300),$(this).children("p").animate({bottom:"20px"},200)}),$(this).mouseleave(function(){$(this).children("h6").children("img").animate({width:"160px",height:"160px",left:"0px",top:"0px"},300),$(this).children("p").animate({bottom:"-40px"},200)})}),$(".live_house dl").each(function(t){$(this).mouseenter(function(){$(this).children("h6").children("img").css({position:"absolute"}),$(this).children("h6").children("img").animate({width:"164px",height:"164px",left:"-2px",top:"-2px"},300),$(this).children("p").animate({bottom:"40px"},200)}),$(this).mouseleave(function(){$(this).children("h6").children("img").animate({width:"160px",height:"160px",left:"0px",top:"0px"},300),$(this).children("p").animate({bottom:"-40px"},200)})}),$("#main ul a").mouseenter(function(){$(this).css("color","#2884c7")}),$("#main ul a").mouseleave(function(){$(this).css("color","#333333")}),$("#main .live_type h2 a").mouseenter(function(){$(this).css("color","#2884c7")}),$("#main .live_type h2 a").mouseleave(function(){$(this).css("color","#333333")}),$(".banner_r dl dd a").mouseenter(function(){$(this).css("color","#2884c7")}),$(".banner_r dl dd a").mouseleave(function(){$(this).css("color","#333333")}),$(".banner_r dl dt a").mouseenter(function(){$(this).css("color","#2884c7")}),$(".banner_r dl dt a").mouseleave(function(){$(this).css("color","#999")}),$(".two_code p span").click(function(){$(this).parent("p").parent(".two_code").css("display","none"),$(".cart").animate({"margin-left":"50px"},200)}),$(".small ol li").each(function(t){$(this).mouseenter(function(){$(this).css("background","#2884c7"),$(this).children("span").animate({width:"10px",height:"15px",top:"26px"},100)})}),$(".small ol li").each(function(t){$(this).mouseleave(function(){$(this).css("background",""),$(this).children("span").animate({width:"8px",height:"12px",top:"28px"},100)})}),$(".small ol li").each(function(t){$(this).mouseenter(function(){$(this).parent("ol").children(".two_menu").css("display","block"),$(this).parent("ol").children(".two_menu").children("section").children("dl").hover(function(){$(this).children("dt").css("color","#2884c7")},function(){$(this).children("dt").css("color","#000")}),$(this).parent("ol").children(".two_menu").children("section").children("dl").click(function(){window.location="list.html"})}),$(this).parent("ol").children(".two_menu").mouseleave(function(){$(this).css("display","none")})});