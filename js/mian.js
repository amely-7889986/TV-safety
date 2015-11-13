// search
$(function(){
  $("#searchSelected").click(function(){
    $("#searchTab").show();
    $(this).addClass("searchOpen");
  });

  $("#searchTab li").hover(function(){
    $(this).addClass("selected");
  },function(){
    $(this).removeClass("selected");
  });

  $("#searchTab li").click(function(){
    $("#searchSelected").html($(this).html());
    $("#searchTab").hide();
    $("#searchSelected").removeClass("searchOpen");
  });
});
// banner
$(function() {
        $('#video-marquee').marquee({
            auto: false,
            interval: 5000 ,
            speed: 500,
            showNum: 3,
            stepLen: 1,
            prevElement: $('#video-next'),
            nextElement: $('#video-prev')
        });
    });
// marquee
$(function() {
    $('#shopping-marquee').marquee({
      auto: false,
      interval: 5000,
      speed: 500,
      showNum: 3,
      stepLen: 1,
      type: 'vertical',
      prevElement: $('#shopping-next'),
      nextElement: $('#shopping-prev')
    });
  });
$(function() {
    $('#banner-marquee-box').marquee({
      auto: false,
      interval: 5000,
      speed: 500,
      showNum: 1,
      stepLen: 1,
      prevElement: $('#banner-next'),
      nextElement: $('#banner-prev')
    });
  });
$(function() {
        $('#slider-marquee').marquee({
            auto: false,
            interval: 5000 ,
            speed: 500,
            showNum: 4,
            stepLen: 4,
            prevElement: $('#slider-next'),
            nextElement: $('#slider-prev')
        });
    });
// shopcity marquee

$(function() {
        $('#u-shopcity-marquee1').marquee({
            auto: false,
            interval: 5000 ,
            speed: 500,
            showNum: 1,
            stepLen: 1,
            prevElement: $('#shopcity-next1'),
            nextElement: $('#shopcity-prev1')
        });
    });
$(function() {
        $('#u-shopcity-marquee2').marquee({
            auto: false,
            interval: 5000 ,
            speed: 500,
            showNum: 1,
            stepLen: 1,
            prevElement: $('#shopcity-next2'),
            nextElement: $('#shopcity-prev2')
        });
    });
$(function() {
        $('#u-shopcity-marquee3').marquee({
            auto: false,
            interval: 5000 ,
            speed: 500,
            showNum: 1,
            stepLen: 1,
            prevElement: $('#shopcity-next3'),
            nextElement: $('#shopcity-prev3')
        });
    });
$(function() {
        $('#u-shopcity-marquee4').marquee({
            auto: false,
            interval: 5000 ,
            speed: 500,
            showNum: 1,
            stepLen: 1,
            prevElement: $('#shopcity-next4'),
            nextElement: $('#shopcity-prev4')
        });
    });

$(function() {
        $('#m-content').marquee({
            auto: false,
            interval: 5000 ,
            speed: 500,
            showNum: 6,
            stepLen: 1,
            prevElement: $('#content-next'),
            nextElement: $('#content-prev')
        });
    });
// tab
$(function() {
  function tabs(tabTit, on, tabCon) {
    $(tabCon).each(function() {
      $(this).children().eq(0).show();
    });
    $(tabTit).each(function() {
      $(this).children().eq(0).addClass(on);
    });
    $(tabTit).children().hover(function() {
      $(this).addClass(on).siblings().removeClass(on);
      var index = $(tabTit).children().index(this);
      $(tabCon).children().eq(index).show().siblings().hide();
    });
  }
  tabs(".tab-hd-h", "active", ".tab-bd-h");
});
$(function(){
  $('.l-list5 .smalllist').hover(function(){
    $(this).children('.box').stop(true,true).delay(100).animate({'bottom':0,opacity:1},300);
  },function(){
    $(this).children('.box').stop(true,true).animate({'bottom':-112,opacity:0},200);
  })
})
$(function(){

  $('.bottom-video-img ul li').hover(function(){
    $(this).children('.box').stop(true,true).delay(100).animate({'bottom':0,opacity:1},300);
  },function(){
    $(this).children('.box').stop(true,true).animate({'bottom':-68},200);
  })
})

$(function(){

  $('#u-weixin').hover(function(){
    $(this).children('.box').stop(true,true).delay(100).animate({'bottom':0,opacity:1},300);
  },function(){
    $(this).children('.box').stop(true,true).animate({'bottom':-188},200);
  })
})
$(function(){

  $('.abox').hover(function(){
    $(this).children('.popupbox').stop(true,true).delay(100).animate({'bottom':0,opacity:1},300);
  },function(){
    $(this).children('.popupbox').stop(true,true).animate({'bottom':-282},200);
  })
})

 $(document).ready(function() {

      //Default Action
      $(".tab_content").hide(); //Hide all content
      $("ul.tabs li:first").addClass("active").show(); //Activate first tab
      $(".tab_content:first").show(); //Show first tab content
      //On Click Event
      $("ul.tabs li").click(function() {
        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
        });

  });
function openShutManager(oSourceObj,oTargetObj,shutAble,oOpenTip,oShutTip){
var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
var openTip = oOpenTip || "";
var shutTip = oShutTip || "";
if(targetObj.style.display!="none"){
   if(shutAble) return;
   targetObj.style.display="none";
   if(openTip  &&  shutTip){
    sourceObj.innerHTML = shutTip;
   }
} else {
   targetObj.style.display="block";
   if(openTip  &&  shutTip){
    sourceObj.innerHTML = openTip;
   }
}
}
