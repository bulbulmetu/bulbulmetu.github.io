<!---Start active image_1 java_script_code-->         
				  var text=1;
				function change_1() {
				var hossain=document.getElementById("image_1");
				if(text==1){
				hossain.src='img/gg.jpg';
				text=0;
				}
				else{
				hossain.src='img/BLUE.jpg';
				text=1;
				}
				
			}
			setInterval("change_1()", 500);
<!---End active image_1 java_script_code-->
			
<!---Start active image_2 java_script_code-->	
	
				  var text=1;
				function change_2() {
				var hossain=document.getElementById("image_2");
				if(text==1){
				hossain.src='img/gg.jpg';
				text=0;
				}
				else{
				hossain.src='img/BLUE.jpg';
				text=1;
				}
				
			}
			setInterval("change_2()", 3000);
<!---End active image_2 java_script_code-->	
			
<!---Start active image_3 java_script_code-->			
				  var text=1;
				function change_3() {
				var hossain=document.getElementById("image_3");
				if(text==1){
				hossain.src='img/gg.jpg';
				text=0;
				}
				else{
				hossain.src='img/BLUE.jpg';
				text=1;
				}
				
			}
			setInterval("change_3()", 800);
<!---End active image_3 java_script_code-->	

<!---Start active form_validation java_script_code-->	
		function hossain() {
			var element_1=document.getElementById("name").value;
			var element_2=document.getElementById("password").value;
			var element_3=document.getElementById("email").value;
			if( element_1=="" || element_2=="" || element_3=="" ) {
				alert("Please! fill in the whole blank document after then try to sign up");
				return false;
			}
			else{
			return true;	
			}
		}
<!---End active form_validation java_script_code-->	


<!---Start active doctor_1 java_script_code-->
            var image=1;
			function doctor() {
				var doctor_1=document.getElementById("doctor_one");
				if(image==1) {
				doctor_1.src="img/b3.jpg";
				image=0;
				}
				else{
					doctor_1.src="img/gg.jpg";
					image=1;
				}
			}
<!---End active doctor_1 java_script_code-->	
