		$(function(){
			var page=$("#page");
			page.spin();
		     chrome.storage.local.get('userInfo', function(data) {
				 //var token=data.userinfo.token;
				 //alert(data.class);
				 var token=data.userInfo.token;
				 var email=data.userInfo.email;
				 
				if(token && email){
					$.post("http://localhost:3000/sessions/extensionShow",
					{token:token,
					 email:email
					},
					function(data,status){
					 //console.log(data.message.result);
					 if (data.message.state==1){
					 	//alert(data.message.result)
						 //以下下编写调到主界面逻辑
						 page.spin(false);
						 location.href = "index.html";
					 }
					 else{
					 	//alert(data.message.result,function(){
					 		location.href = "login.html";
							//});
					 }
					}
					);				
				}
				else{
					location.href = "login.html";
				}
				
		});
	});