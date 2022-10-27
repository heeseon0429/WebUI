/**
 * 
 */
 $(function(){
	$('#signup > form').validate({
		rules : {
			name  : {required: true},
			email : {required: true,
						email : true //@ 같은 것들은 걸러줌
			},
			website : {url:true},
			password : {
						minlength : 6,
						maxlength : 12,
			},//password
			passconf : {equalTo : '#password'}
		},//rules
		success : function(label){  //
			label.addClass('valid');
			label.text('성공');
		}
	});
	
	//------------------------------------------------
	// attr() -> prop()
	$('.check-all').click(function(){			
		if($('.check-all').is(':checked')){	//check-all 클릭했을 때
			$("input[name=agree]").prop('checked',true);//check(O) : true
		}else{
			$("input[name=agree]").prop('checked',false);//check(X) : false
		}
	});//check 항목
	
	$('input.check-all').click(function(){ 
      $('input.agree').prop('checked', $('input.check-all').is(':checked')) 
   });
	
})//function