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
スクロールのフェードイン
************************/

$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight){
				$(this).addClass('scrollin');
			}
		});
	});
});
