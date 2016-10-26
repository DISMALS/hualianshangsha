"use stract";
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
    tabS("ul.tabBtn li", "div.tabMainM", "li");
    tabS("ul.tabBtns li", "div.newsListMm", "li");



    
    //右侧浮动
    function rightFloat() {
        $("a.marb").bind("mouseover", function () {
            var this_ = $(this);
            this_.children("b").animate({
                width: "104px",
                left:"-104px"
            }, 300);
        });
        $("a.marb").bind("mouseout", function () {
            var this_ = $(this);
            this_.children("b").animate({
                width: "0px",
                left:"0px"
            }, 300);
        });
        $("a.ewm").bind("mouseover", function () {
            var this_ = $(this);
            this_.siblings(".rightEwm").show(0);
        });
        $("a.ewm").bind("mouseout", function () {
            var this_ = $(this);
            this_.siblings(".rightEwm").hide(0);
        });
    }
    rightFloat();


    //详情弹窗
    $(".moreBtn").click(function () {
        var winWid = $(window).width();
        var winHei = $(window).height();
        var this_ = $(this);
        $("body").eq(0).css("overflow", "hidden");
        this_.parent().next(".pop").css({
            width: winWid + "px",
            height: winHei + "px",
            top: $(window).scrollTop()
        }).fadeIn(function () {
            
            var _this = $(this);
            var mainHei = _this.children(".popFloor").height();
            _this.children(".popFloor").css({
                left: (winWid - 660) / 2 + "px",
                top: (winHei - mainHei) / 2 + "px"
            }).slideDown(200);
            $(".closeBtn").click(function () {
                _this.children(".popFloor").slideUp(200);
                _this.fadeOut();
                $("body").eq(0).css("overflow", "auto");
            });
            $(".onlineRecruit").click(function () {
                _this.children(".popFloor").slideUp(200);
                _this.fadeOut();
                $("body").eq(0).css("overflow", "auto");
            });
        });
    });

    //新闻模块鼠标滑过变色
    $(".otherNewM li").bind({
        mouseenter: function () {
            $(this).children().css("color","#fff");
        },
        mouseleave: function () {
            $(this).children(".otherNewTime").css("color", "#999");
            $(this).children(".newTit").css("color", "#333");
            $(this).children(".newDis").css("color", "#888");
            $(this).children(".newMore").css("color", "#444");
        }
    });

    //走进华联页面鼠标滑过
    $(".jdBot").bind({
        mouseenter: function () {
            var this_ = $(this);
            this_.find(".yuanN").addClass("yuanO");
            this_.find(".jdTitN").addClass("jdTitO");
            this_.find(".jiantouN").addClass("jiantouO");
        },
        mouseleave: function () {
            var this_ = $(this);
            this_.find(".yuanN").removeClass("yuanO");
            this_.find(".jdTitN").removeClass("jdTitO");
            this_.find(".jiantouN").removeClass("jiantouO");
        }
    });
    $(".jdTop").bind({
        mouseenter: function () {
            var this_ = $(this);
            this_.find(".yuanN").addClass("yuanO");
            this_.find(".jdTitN").addClass("jdTitO");
            this_.find(".jiantouN").addClass("jiantouO");
        },
        mouseleave: function () {
            var this_ = $(this);
            this_.find(".yuanN").removeClass("yuanO");
            this_.find(".jdTitN").removeClass("jdTitO");
            this_.find(".jiantouN").removeClass("jiantouO");
        }
    });

    //鼠标滑过导航下拉菜单
    $(".foucs").bind({
        mouseenter: function () {
            $(this).addClass("on").children(".childList").slideDown(150);
            $(this).siblings(".foucs").removeClass("on").children(".childList").slideUp(150);
        },
        mouseleave: function () {
            $(this).removeClass("on").children(".childList").slideUp(150);
        }
    });

    //鼠标滑过显示二维码
    $(".phon").bind({
        mouseenter: function () {
            var this_ = $(this);
            this_.children(".wx").slideDown(200);
        },
        mouseleave: function () {
            var this_s = $(this);
            this_s.children(".wx").slideUp(200);
        }
    });

});