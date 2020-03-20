/***********************
押した時プニュっとなるアニメーション
***********************/
function animation(ele){
  anime({
    targets: ele,
    scale:0.8,
    direction: 'alternate'
  });
};

/************************
スクロールのフェードインとロード時のフェードイン
************************/

window.onload = function(){
  fadein_animation();

  $(window).scroll(function(){
    fadein_animation();
  });

  function fadein_animation(){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('scrollin');
      }
    })
  }
}
