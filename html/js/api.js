function submitForm(e){ 
        //Getting Values
        var name  = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var comments = document.getElementById('comments').value;
		
        //Check if forms are fully filled.
        if (name.length===0 || email.length===0 || comments.length===0){
			alert("Fields cannot be empty.");
			return false;
		}
        //Submit value to APIGateway
        else {
            e.preventDefault();
            var url = "INVOKE-URL-GOES-HERE";
            var obj = {
				name : name,
				email : email,
				comments : comments
        	};
            $.ajax({
				url: url,
				type: 'POST',
				data: JSON.stringify(obj),
				dataType: 'json',
				crossDomain: true,
				contentType: 'application/json',
				success: function() {
					alert("Successful");
					location.reload();
         		},
         		error: function() {
           			alert("unsuccessful");
					alert(JSON.stringify(obj))
         		}
			});
        }
        
}