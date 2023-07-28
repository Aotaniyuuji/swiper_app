let title = "javascriptが使えました";
alert(title);

$(document).ready(function() {
  $('.jquery').on('click',function(){
    $(this).css('color','red');
  });
});

// Swiperのオプションの定数化
const opt = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navgation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

//  Swiperを実行（初期化）
$(document).on('turbolinks:load', function() {
  let swiper = new Swiper('.swiper',opt);
});