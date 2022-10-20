  window.onload = function () {
	  
//	  let a = document.getElementById('tbl');
//  a.onclick = function(){
//	alert('ok');
//}
		let a = document.getElementById('tbl')
		a.onclick = function(evt){
			let b = evt.target.getAttribute('data-price')
			alert(b);
		}
			}