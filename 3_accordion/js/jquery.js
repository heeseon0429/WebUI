$(function(){
	$('.accordion').each(function(){  //each : 각자 따로
	
	var allDt = $(this).find('dt');
	var allDd = $(this).find('dd');
	
	allDd.hide(); //Dd 내용을 숨긴다.
	
	allDd.first().show(); //첫번째를 찾아서 보여준다.
	
	allDt.css({'cursor':'pointer'}); //커서를 올리면 손모양이 나타나게
	
	allDt.click(function(){//클릭 이벤트 : 전부 닫고 이벤트 발생한 아이만 열리게
		//alert('즐거운 하룽')
		allDd.hide();
		$(this).next().show(); // 보여주기
		//$(this).next().fadeIn(); // 투명도
		//$(this).next().slideDown(); //내려오면서 보여주기
		//$(this).next().toggle(); // show toggle 차이 모르겠당
	});
	}) 
		
})