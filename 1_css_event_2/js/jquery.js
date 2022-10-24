$(function(){
$('.header > .menu img').hover(function(){
	var src = $(this).attr('src'); // 마우스 작동
	$(this).attr('src', src.replace('off', 'on')); // 마우스 작동에 대한 액션
}, function(){
	var src = $(this).attr('src');
	$(this).attr('src', src.replace('on', 'off'));
});
	
})


/*

$(function() {
	$(".header .menu li img").hover(function() {
		var src = $(this).attr("src");
		$(this).attr("src", src.replace("off", "on"));
	}, function() {
		var src = $(this).attr("src");
		$(this).attr("src", src.replace("on", "off"));
	});
});
*/









