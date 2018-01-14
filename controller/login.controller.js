var app=angular.module("myLogin",[]);

app.controller("loginController",function($scope) {
	
	$scope.email="";
	$scope.password="";

	/*login function*/
	$scope.login=function() {
		if ($scope.email=="")
			alert("please enter the email");
		else if ($scope.password=="") {
			alert("please enter the password");
		}
		else{
			
			signIn($scope.email,$scope.password);/*sign in method is called */
		}

	}

	/*forget password function*/
	$scope.forgetPassword=function() {
		
		resetPassword($scope.email);/*reset the password function is calling*/
	}

});

/*sign in function is define */	
function signIn(email,password) {
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  alert(errorMessage);
  // ...
	});
}


/*reset the password function defining*/
function resetPassword(email) {
	if (email=="") {
		alert("please enter the Register Email")
	}
	else{
		firebase.auth().sendPasswordResetEmail(email).then(function() {
        	alert('Password Reset Email Sent!');
        	$("#forgetPassword").hide();
        }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });

    }
}

/*on auth function callled for checking the user everytime*/
firebase.auth().onAuthStateChanged(user=>{
		if(user){
			window.location.href="admin.html";
		}
		else
			console.log("Sign Out");
	});

