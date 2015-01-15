		$(function(){	
			$("#login-btn").click(function(event){
			event.preventDefault(); 
			var email=$("#login-email").val();
			var password=$("#login-password").val();
		//alert("login-btn click.");
		$.post("http://localhost:3000/sessions/extensionCreate",
		{email:email,
		 password:password
		},
		function(data,status){
		 //console.log(data.message.result);
		 chrome.storage.local.set({'userInfo':data.token}, function() {
			             // Notify that we saved.
			           });
					   alert(data.message.result)
		}
		);
		});
		$("#re-btn").click(function(event){
		        event.preventDefault(); 
			    chrome.storage.local.get('userInfo', function(data) {
					alert(data.userInfo.token);
			           });
			});
		
		});