form.addEventListener('submit', function(e) {
    e.preventDefault();
   
    var fullname = document.getElementById("fullname").value
	var email = document.getElementById("email").value
	var phone_number = document.getElementById("phone_number").value
	var occupation = document.getElementById("occupation").value
	var no_of_ticket = parseInt(document.getElementById("no_of_ticket").value)
    var amount= no_of_ticket * 10000;
   
  
    var handler = PaystackPop.setup({
        key: 'pk_test_cf31c9ce121a70cd11c6fee1689c80e3b3ef42be',
        email: email,
        amount: amount*100,
        ref: "TEDx"+Date.now(),
        metadata: {
            custom_fields: [
                {
                    display_name: fullname,
                    variable_name: fullname,
                    value: phone_number
                }
            ]
        },
        callback: function(response){
            alert('success. transaction ref is ' + response.reference);
                $.ajax({        
                      url: "addpackagepayment.php",
                      data: "ref="+response.reference+"&amount="+amount+"&sub="+sub+"&contact_limit="+contact_limit+"&inothercur="+inothercur+"&details="+details+"&packagetype="+packagetype,
                      type: "POST",
                      success: function(data){
                      data= data.trim();

                      if(data=="success")
                          {
				  alert(response);
				  console.log(response)
                          alert('Payment Successful!');
                          }
                          else
                              alert(data);
                      }
                  });
        },
            onClose: function(){
        }
    });
  handler.openIframe();
})
