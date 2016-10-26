$(document).ready(function () {
    //选项卡
    function tabS(clickBtn, showMain, siblingsC) {
        var abstractMenuA = $(clickBtn);
        var MTextOne = $(showMain);
        abstractMenuA.bind("click", function () {
            var this_ = $(this);
            if (this_.hasClass("on")) {
                MTextOne.eq(abstractMenuA.index(this)).show().siblings().hide();
            } else {
                this_.addClass("on").siblings(siblingsC).removeClass("on");
                MTextOne.eq(abstractMenuA.index(this)).show().siblings().hide();
            }
        });
    }
    tabS("ul.slideTit li", "div.slideList", "li");
    tabS("ul.slidesTit li", "ul.slidesList", "li");

    //下拉导航菜单
    $(".menu").bind("click", function () {
        var this_ = $(this);
        if (this_.hasClass("zk")) {
            $(".menuList").slideUp(100);
            this_.removeClass("zk");
        } else {
            this_.addClass("zk");
            $(".menuList").slideDown(100, function () {
                var this_s = $(this);
                this_s.find("li").click(function () {
                    this_s.slideUp(100);
                });
            });
        }
    });

    //轮播图
    TouchSlide({
        slideCell: "#slider",
        titCell: ".sliderBtn ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".sliderM ul",
        effect: "left",
        autoPlay: true,//自动播放
        autoPage: true, //自动分页
        switchLoad: "_src" //切换加载，真实图片路径为"_src"
    });

    //英才招聘模拟下拉
    $(".xiala").bind("click", function () {
        var this_ = $(this);
        var mainMH = this_.siblings(".mainM").height();
        var zjd = this_.parents(".module").siblings();
        var tjA = zjd.find(".xiala");
        if (tjA.hasClass("cli")) {
            this_.css("display", "none").addClass("cli");
            this_.parent(".contentMain").animate({
                height: mainMH + "px"
            }, 150);
            this_.siblings(".mainM").find(".onlineZp").css("visibility", "visible");
            tjA.css("display", "block").removeClass("cli");
            tjA.parent(".contentMain").animate({
                height: "5.15rem"
            }, 150);
            this_.parents(".module").siblings().find(".onlineZp").css("visibility", "hidden");
        } else {
            this_.css("display", "none").addClass("cli");
            this_.parent(".contentMain").animate({
                height: mainMH + "px"
            }, 150);
            this_.siblings(".mainM").find(".onlineZp").css("visibility", "visible");
        }
    });

    //大事记下拉
    $(".eventsTit").bind("click", function () {
        var this_ = $(this);
        if (this_.hasClass("eventsNor")) {
            this_.removeClass("eventsNor").addClass("eventsCli");
            this_.siblings().slideDown(150);
        } else {
            this_.removeClass("eventsCli").addClass("eventsNor");
            this_.siblings().slideUp(150);
        }
    });

    //分布平面图轮播
    TouchSlide({
        slideCell: "#areaPicM",
        mainCell: ".areaPicSlid ul",
        effect: "leftLoop",
        titCell: ".areaPicBtn ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        autoPlay: true,//自动播放
        autoPage: true //自动分页
    });

    //返回顶部
    $(".backTop").click(function () {
        $(window).scrollTop(0);
    });
    
});