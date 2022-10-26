$(function(){
   
   let count = 0;
   
   $('.menu > img').click(function(){
      
      // alert($(this).parent().find('span:eq(1)').attr('value'));
      
      if(count<1){
         $('#here').append("<iframe src='./menu_option.html' title='menu' height='950' width='800' style='border:none;''></iframe>")
         count++;
      }
      let ifrm = $('div#here > iframe').contents();
      
      let oriPrice = $(this).parent().find('span:eq(1)').attr('value');
      let name = $(this).parent().find('span:eq(0)').attr('value');
      
      let hotCold = ifrm.find("tr.option1 input:radio[name='hot_cold']:checked").val();
      let sizeP = Number(ifrm.find("tr.size input:radio[name='size']:checked").val());
      let syruP = Number(ifrm.find("tr.option2 input:radio[name='syrup']:checked").val());
      let shotP = Number(ifrm.find("tr.option3 input:radio[name='shot']:checked").val());
      
      
      //hot/iced
      ifrm.find("tr.option1 input:radio[name='hot_cold']").click(function(){
         hotCold = Number($(this).val());
      });
      //size
      ifrm.find("tr.size input:radio[name='size']").click(function(){
         sizeP = Number($(this).val());
      });
      //syrup
      ifrm.find("tr.option2 input:radio[name='syrup']").click(function(){
         syruP = Number($(this).val());
      });
      //shot
      ifrm.find("tr.option3 input:radio[name='shot']").click(function(){
         shotP = Number($(this).val());
      });
      
      let addedP = oriPrice + sizeP + syruP + shotP;
      let Fname = name + "(" + hotCold + ")";
      
      let total = $('totallist > td').text();
      
      ifrm.find("#damgi").click(function(){
         
         for (let i=0 ; i<15 ; i++) {
            if($('tr.list:eq(' + i + ') > td:eq(0)').text() != '') {
            } else {
               $('tr.list:eq(' + i + ') > td:eq(0)').text(Fname);
               // $('tr.list:eq(' + i + ') > td:eq(1)').append
               // $('tr.list:eq(' + i + ') > td:eq(2)').append()
               
               $('#totallist > td').text(total + addedP, '원');
               break;
            }
         }
         
         
         /*
         alert(oriPrice);
         alert(name);
         alert(hotCold);
         alert(sizeP);
         alert(syruP);
         alert(shotP);
         */
         
      });
      
   });
   
   
   
});