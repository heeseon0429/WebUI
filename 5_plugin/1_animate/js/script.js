$(function(){
	
	$('#bio h3').css({'cursor':'pointer'});
	
	$('div#bio>div').hide();
	$('div#bio>div:eq(0)').show();
	//$('div#bio>div').first().show();
	
	//이름을 클릭하면 해당 사진만 나오도록
	$('div#bio>h3').click(function(){
		//$(this).next().show();
		$(this).next().animate({'height':'toggle'}, 2000, 'easeOutBounce');
	}) 
})