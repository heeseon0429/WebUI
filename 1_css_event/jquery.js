$(function(){
	
	$('#hideButton').click(function(){
		$('#celebs').hide()
		$('#intro img').hide()
		$('#navygation').hide()
	});
	
	$('#showButton').click(function(){
		$('#celebs').show()
		$('#intro img').show()
		$('#navygation').show()
	});
	
	$('#toggleButton').click(function(){
		if( $('#celebs').is(':visible'))
		{
			$('#celebs').fadeOut(1000);
		}else{
		$('#celebs').fadeIn(1000);
		}
	});
	
	// 테이블의 내용 중 홀수행 배경색 지정
	// index가 0부터 시작하므로 반대로 지정해줘야 함(짝수:odd, 홀수:even) 
	$('#celebs table.data > tbody > tr:even').css({'background':'lightblue'}) // > 자식
	$('#celebs table.data > tbody > tr:even').addClass('table_striping') 
	
	//마우스가 올라갔을 때 배경색 바뀌고 다시 나오면 원래색으로 
	$('#celebs tr').hover(function(){
		$(this).addClass('td_mouseover');
	}, function(){
		$(this).removeClass('td_mouseover');
	})
	
})