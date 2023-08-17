$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//----------------gotop功能-----------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) { //若目前的位置距離網頁頂端>...
			$(".js-gotop").addClass("show");
		} else {
			$(".js-gotop").removeClass("show");
		}
	});
	
})//JS尾端	
