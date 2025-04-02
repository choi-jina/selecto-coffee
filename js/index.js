$(function () {

  //popup
  $('.popupX').click(function(){
    $('.popup').hide();
  })

  // header
  $('.mo-btn').click(function(){
    $('.mobile').toggleClass('show');
  });

  $('.mo-btn').click(function(){
    $(this).children().toggleClass('toggle');
  })

  $('.mobile .gnb > li > a').click(function(e){
    e.preventDefault();
    $(this).toggleClass('down').next().stop().toggle();
    $(this).parent().siblings().find('.lnb').hide().siblings();
    $(this).parent().siblings().children().removeClass('down');
  });


  //banner
  let oldInx = 0;
  $('.control .btn_icon').click(function (e) {
      e.preventDefault();

      clearInterval(autoID);
      let newInx = $(this).index();
      if(oldInx != newInx) {
        $(this).addClass('on')
                .siblings().removeClass('on');

        if(newInx > oldInx) {
          $('.banner_item').eq(oldInx).stop().animate({left: '-100%'},600);
          $('.banner_item').eq(newInx).css('left', '100%').stop().animate({ left: 0 }, 600);
        }else{
          $('.banner_item').eq(oldInx).stop().animate({ left: '100%' }, 600);
          $('.banner_item').eq(newInx).css('left', '-100%').stop().animate({ left: 0}, 600);
        }
        oldInx = newInx;
      }  
    });

    // 배너 img length 가져옴
    let bannerNum = $('.banner_item').length;
    // console.log(bannerNum);
    $('.cntCount').text(`01`); // 로드시에 첫번째 카운트 안됨 초기값
    $('.allCount').text(`/ 0${bannerNum}`);

    let autoInx = 0;
    let autoID = setInterval(function(){
      autoInx++;
      if(autoInx >2){autoInx=0};
      $('.control .btn_icon').eq(autoInx).addClass('on').siblings().removeClass('on');
      let now = $('.btn_icon.on').index();
      // console.log(now);

      $('.banner_item').eq(oldInx).stop().animate({ left: '-100%' }, 500);
      $('.banner_item').eq(autoInx).css('left','100%').stop().animate({left:0},500);
      oldInx = autoInx;

      // 배너 숫자 출력
      $('.cntCount').text(`0${autoInx+1} `);
    },2000);


    // 배너 교체
    let resizeTimeout;

    $(window).resize(function(){
        // 리사이즈 이벤트가 발생할 때마다 이전 타이머 삭제하고 새로운 타이머 실행
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 100); //0.1초후에 handleResize 함수 호출
    }).trigger('resize'); //페이지 로드 시 초기 호출

    // 모바일용 , 데스크탑용 이미지 교체
    function handleResize(){
        let windowSize = $(window).width(); // 윈도우의 너비에 따라
        if( windowSize <= 500 ){ // 모바일용
            $('.banner_item:eq(0) img').attr('src','imgs/m20240910085823_ow0sti.jpg');
            $('.banner_item:eq(1) img').attr('src','imgs/m20220926135835_mz0xxm.jpg');    
            $('.banner_item:eq(2) img').attr('src','imgs/20220926134051_6jrotl.jpg');     
        }else { // 데스크탑
            $('.banner_item:eq(0) img').attr('src','imgs/20240910085813_njlo81.jpg').css('object-fit','cover');
            $('.banner_item:eq(1) img').attr('src','imgs/20220926134050_tnadwv.jpg').css('object-fit','cover');
            $('.banner_item:eq(2) img').attr('src','imgs/20220926135834_w6aozi.jpg').css('object-fit','cover');
        }
    }; 

  //product tab메뉴
  $('.product_list ul li a').first().addClass('product_tab_show');
  $('.product_menu > div:nth-child(1)').addClass('product_menu_show');

  $('.product_list ul > li > a').click(function(e){
      e.preventDefault();
      let tabNum = $(this).parent().index();
      // console.log(tabNum);
      $(this).addClass('product_tab_show').parent().siblings().children().removeClass('product_tab_show');
      $('.product_menu > div').eq(tabNum).addClass('product_menu_show').siblings().removeClass('product_menu_show');

    if(tabNum==0){
        $('.product_list').css({backgroundImage: 'url(imgs/product_list_signature.jpg)'});
      } else if(tabNum==1){
        $('.product_list').css({backgroundImage: 'url(imgs/product_list_beverage.jpg)'});
      } else if(tabNum==2){
        $('.product_list').css({backgroundImage: 'url(imgs/product_list_coffee.png)'});
      } else {
        $('.product_list').css({backgroundImage: 'url(imgs/product_list_crogle.jpg)'});
    }
  })

  // footer top버튼 
  $(window).scroll(function(){
    let windowTop = $(window).scrollTop();
    $('.f_top').click(function(e){
      e.preventDefault();
      $('html,body').stop().animate({scrollTop:0},500)
    })
  })

});//jq end
