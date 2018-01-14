$(document).ready(function() {

	$("#p1").fadeIn(2000,function() {
		$("#p2").fadeIn(2000,function() {
			$("#p3").fadeIn(2000,function() {
				$("#p4").fadeIn(2000,function() {
					$("#p5").fadeIn("slow",show);
				});
			});
		});
	});

	function show() {
		
		$("#p1").fadeOut(2000);
		$("#p2").fadeOut(2000);
		$("#p3").fadeOut(2000);
		$("#p4").fadeOut(2000);
		$("#p5").fadeOut(2000,function() {
			$("#p6").fadeIn(2000,function() {
				getAuth();
			});
		});
	}
	
});
function getAuth() {
	firebase.auth().onAuthStateChanged(user=>{
			if(user){
				window.location.href="admin.html";
			}
			else
				window.location.href="login.html";
		});
}


