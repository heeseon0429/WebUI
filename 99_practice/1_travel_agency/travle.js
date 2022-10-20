
		// oninput 이벤트 연결도 가능
		window.onload = function(){
		var adult = document.frm.adult;
		var child = document.frm.child;
		var baby = document.frm.baby;
		
		adult.onchange=calc;
		child.onchange=calc;
		baby.onchange=calc;
		}
		function calc(){
			frm.avg.value = adult.value*39000 + child.value*29000 + baby.value*19000;
		}
		
		
			
		
		
		
