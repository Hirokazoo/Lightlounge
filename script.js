$(window).on('load', function(){
  // 画像の入れ替えのアニメーション
  $('#image-1').animate({
    'opacity': 0
  }, 2500);

  $('.header_nav').delay(500).fadeIn(2000);
});



// $(function(){
  $(window).scroll(function (){
      $('.plan_menu').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
            }
          });
        });

        $(window).scroll(function (){
          $('.service_menu').each(function(){
              var targetElement = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > targetElement - windowHeight + 200){
                  $(this).css('opacity','1');
                  $(this).css('transform','translateY(0)');
                }
              });
            });

window.addEventListener( "scroll", function() {

  var headerElement = document.getElementById( "header" ) ; // `#header`セレクタを取得
  var rect = headerElement.getBoundingClientRect() ; // 
  var y = rect.top + window.pageYOffset ; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
  if (y > 0) { // 変数yの値が0よりも
    headerElement.classList.remove('hidden'); // 大きければhiddensセレクタを削除する
  } else {
    headerElement.classList.add('hidden'); // そうでなければhiddensセレクタを追加する
  }
} ) ;

$(function() {
  $('.creative_pic').hover(function() {
    $(this).attr('src', 'images/creative_color.png');
  }, function() {
    $(this).attr('src', 'images/creative.svg');

  });
});

$(function() {
  $('.comfortable_pic').hover(function() {
    $(this).attr('src', 'images/comfortable_color.png');
  }, function() {
    $(this).attr('src', 'images/comfortable.svg');

  });
});
$(function() {
  $('.costless_pic').hover(function() {
    $(this).attr('src','images/costless_color.png');
  }, function() {
    $(this).attr('src', 'images/costless.svg');

  });

$('.btn_trigger').on('click',function(){
  $('.btn_trigger').toggleClass('close');//ボタンのアニメーション
  $('.nav-wrapper').fadeToggle(300);//メニューのフェードイン・フェードアウト
  $('body').toggleClass('noscroll');//スクロールを固定
});


if( $(window).width() <= 999 ){
  $('.header_list>a').on('click',function(){
    $('.nav-wrapper').fadeOut(300);
    $('.btn_trigger').removeClass('close');
    $('body').removeClass('noscroll');
  });
}

if( $(window).width() <=480 ){
$(function() {
  $('.gallery_menu').slick({
    swipe: true,
    dots:true,
    centerMode:true,
    // dotsClass: 'slide-dots'
  }); 
});
}

});