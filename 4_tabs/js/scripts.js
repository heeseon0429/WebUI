$(function(){
	
	var topDiv = $('.tabSet');
	var anchors = topDiv.find('ul.tabs a');
	var panelDivs= topDiv.find('div.panels>div.panel');
	
	anchors.show();
	panelDivs.hide();
	
	var lastAnchor = anchors.filter('.on') // on 속성값을 찾아주기 위해 filter 사용
	var lastPanel = $(lastAnchor.attr('href'));
	//alert(lastPanel);
	lastPanel.show();
	
	//선택했던 패널을 currentAnchor라 하고 그에 해당하는 패널을 currentPanel이라한다.
	anchors.click(function(){
		var currentAnchor = $(this);
		var currentPanel = $(currentAnchor.attr('href'));
		
		//마지막에 선택했던 panel을 숨기고 최근에 선택한 panel을 보여준다.
		lastPanel.hide();
		currentPanel.show();
		
		//lastAnchor의 on을 지우고 currentAnchors의 on을 추가해준다.
		lastAnchor.removeClass('on');
		currentAnchor.addClass('on');
		
		//첫번째를 클릭했다가 두번째를 클릭하면 첫번째는 lastAnchor 두번째는 currentAnchor가 된다.
		lastAnchor = currentAnchor;
		lastPanel = currentPanel; 
	})
})