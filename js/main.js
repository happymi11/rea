/////// 메인 페이지 JS - main.js /////////

$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");

    $(".gnb").hover(function () {
            $(".sub").stop().slideDown();
            $(".gnb").css({
                height: "150px",
                backgroundColor: "#68c8c6"
            });
        },
        function () {
            $(".sub").stop().slideUp();
            $(".gnb").css({
                height: "45px",
                backgroundColor: "#fff"
            });

        }); //////hover

    //햄버거 메뉴클릭시
    $("#ham").click(function(){
        $(".gnb").toggleClass("on");
    });/////click/////

    // 배너 슬라이드
    var sld;
    // 배너 이동수치
    var sldLeft;
    // 광클 금지
    var sldsts = 0;

    // 슬라이드 이동함수
    /*////////////////////////////////
        함수명: 함수명
        기능: goSlide
    */ ////////////////////////////////
    var goSlide = function (dir) { //dir(1-next,0-prev)
        console.log("함수호출!");

        // 광클금지 ///
        if (sldsts) return false;
        sldsts = 1; //잠금!
        setTimeout(function () {
            sldsts = 0;
        }, 650); ////// setTimeout ///


        if (dir) { /// next
            // 먼저 이동 애니
            sld.animate({
                left: sldLeft + "%"
            }, 600, "easeOutQuint", function () {
                // 애니후 뒤로 잘라붙이기
                sld.append(sld.find("li").first())
                    .css({
                        left: "0%"
                    });
            })
        } ///////// if ///////
        else { // prev
            //먼저 앞에 붙이고
            sld.prepend(sld.find("li").last())
                .css({
                    left: sldLeft + "%"
                });

            // 들어오기 애니
            sld.animate({
                left: "0%"
            }, 600, "easeOutQuint");
        } /////// else /////////

    }; /////// goSlide 함수 ////////////
    //////////////////////////////////



    // 배너이동 버튼 클릭시
    $(".next").click(function () {
        sld = $(".ban");
        sldLeft = "-100";
        goSlide(1);
    }); ///////// click ////////////

    // 배너이동 버튼 클릭시
    $(".prev").click(function () {
        sld = $(".ban");
        sldLeft = "-100";
        goSlide(0);
    }); ///////// click ////////////


    $(".btn_navi_wrap li").click(function () {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        //        $(".ban").find("li").fadeIn;
    }); /////click

    $(".btn_navi_wrap li").last().click(function () {
        $(".ban li").first().fadeOut();
        $(".ban li").last().fadeIn();
    }); /////////// click ///

    $(".btn_navi_wrap li").first().click(function () {
        $(".ban li").first().fadeIn();
        $(".ban li").last().fadeOut();
    }); /////////// click ///


    // 청약 동그라미 버튼 클릭시
    $(".gallery_move li").click(function () {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        //        $(".ban").find("li").fadeIn;
    }); /////click

    $(".gallery_move li").first().click(function () {
        sld = $(".gallery_box");
        sldLeft = "-33.33";
        goSlide(0);
    }); ///////// click ////////////

    $(".gallery_move li").last().click(function () {
        sld = $(".gallery_box");
        sldLeft = "-33.33";
        goSlide(1);
    }); ///////// click ////////////

    ///화살표버튼
    $(".btn_next").click(function () {
        sld = $(".gallery_box");
        sldLeft = "-33.33";
        goSlide(1);
    }); //////click
    $(".btn_pre").click(function () {
        sld = $(".gallery_box");
        sldLeft = "-33.33";
        goSlide(0);
    }); //////click


    /// 뉴스 넘기기
    var nlst = $(".news_list");
    setInterval(function () {
        nlst.animate({
            top: "-100%"
        }, 500, function () {
            nlst.append(nlst.find("li").first())
                .css({
                    top: "0"
                });
        });
    }, 3000);


    /// 맨위로 이동
    $("#tbtn").hide()
        .click(function () {
            $("html,body").animate({
                scrollTop: "0"
            }, 600, "easeOutQuint");
        }); ////////// click ///////////



    ////////// 스크롤 액션 구역 ////////////////

    // 스크롤 타겟 요소
    var sctg = $(".sctg");



    sctg.eq(0).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all 1.2s ease-in-out"
    }); ///// css ////////////

    sctg.eq(2).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all .8s ease-in-out"
    }); ///// css ////////////

    /*sctg.eq(3).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all 1.2s ease-in-out"
    }); ///// css ////////////*/

    sctg.eq(4).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all 1.2s ease-in-out"
    }); ///// css ////////////
    /*sctg.eq(5).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all 1.2s ease-in-out"
    }); ///// css ////////////*/
    sctg.eq(5).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all .8s ease-in-out"
    }); ///// css ////////////
    sctg.eq(7).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all .7s ease-in-out"
    }); ///// css ////////////


    // 스크롤 타겟 초기셋팅

    //분양정보
    sctg.eq(1).find("li").eq(0).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all .8s ease-in-out"
    }); ///// css ////////////
    sctg.eq(1).find("li").eq(1).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all .8s ease-in-out .5s"
    }); ///// css ////////////
    sctg.eq(1).find("li").eq(2).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all .8s ease-in-out 1s"
    }); ///// css ////////////

    //gallery 
    sctg.eq(3).find("li").eq(0).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all .4s ease-in-out"
    }); ///// css ////////////
    sctg.eq(3).find("li").eq(1).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all .4s ease-in-out .5s"
    }); ///// css ////////////

    //times 정보
    sctg.eq(6).find("li").eq(0).css({
        position: "relative",
        top: "-100px",
        opacity: 0,
        transition: "all .8s ease-in-out"
    }); ///// css ////////////
    sctg.eq(6).find("li").eq(1).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all .8s ease-in-out .2s"
    }); ///// css ////////////
    sctg.eq(6).find("li").eq(2).css({
        position: "relative",
        top: "-100px",
        opacity: 0,
        transition: "all .8s ease-in-out  .4s"
    }); ///// css ////////////
    sctg.eq(6).find("li").eq(3).css({
        position: "relative",
        top: "100px",
        opacity: 0,
        transition: "all .8s ease-in-out .6s"
    }); ///// css ////////////


    // 스크롤 타겟 위치
    var scpos = [];
    for (var i = 0; i < sctg.length; i++) {
        scpos[i] = sctg.eq(i).offset().top;
    } ////// for ///////////////////

    console.log("타겟위치:" + scpos);


    $(window).scroll(function () {
        var scTop = $(this).scrollTop();
        console.log("스위:" + scTop);

        //// 탑이동 버튼 보이기/숨기기
        if (scTop > 100) {
            $("#tbtn").show();
        } else {
            $("#tbtn").hide();
        }


        // 등장액션
        if (scTop > scpos[0] - 700 && scTop < scpos[0]) {
            sctg.eq(0).css({
                top: "0px",
                opacity: 1
            }); ///// css ////////////

        } //// if ///////////////////////////
        else if (scTop > scpos[1] - 600 && scTop < scpos[1]) {
            // 스크롤 타겟 초기셋팅
            sctg.eq(1).find("li").css({
                top: "0px",
                opacity: 1
            }); ///// css ////////////

        } //// else if ///////////////////////////
        else if (scTop > scpos[2] - 600 && scTop < scpos[2]) {
            sctg.eq(2).css({
                top: "0px",
                opacity: 1
            }); ///// css ////////////

        } //// else if ///////////////////////////
        else if (scTop > scpos[3] - 800 && scTop < scpos[3]) {
            sctg.eq(3).find("li").css({
                top: "0px",
                opacity: 1
            }); ///// css ////////////

        } //// else if ///////////////////////////
        else if (scTop > scpos[4] - 700 && scTop < scpos[4]) {
            sctg.eq(4).css({
                top: "0px",
                opacity: 1
            }); ///// css ////////////

        } //// else if ///////////////////////////
        else if (scTop > scpos[5] - 700 && scTop < scpos[5]) {
            sctg.eq(5).css({
                top: "0px",
                opacity: 1
            }); ///// css ////////////
        } //// else if ///////////////////////////
        else if (scTop > scpos[6] - 700 && scTop < scpos[6]) {
            // 스크롤 타겟 초기셋팅
            sctg.eq(6).find("li").css({
                top: "0px",
                opacity: 1
            }); ///// css ////////////

        } //// else if ///////////////////////////
        else if (scTop > scpos[7] - 600 && scTop < scpos[7]) {
            sctg.eq(7).css({
                top: "0px",
                opacity: 1
            }); ///// css ////////////

        } //// else if /////////////////////////// 
       
    }); ////////// scroll ////////////////

/*스와이퍼*/
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });


}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
