$(document).ready(function(){
	$(".img-cars").css("height", $("#imgTwo").height());
	
	$("#shiftwellButton").click(function(){
		$("#shiftwellDiv").addClass("hidden");
	});

	$("#mcqueenButton").click(function(){
		$("#mcqueenDiv").addClass("hidden");
	});

	$("#mcmissileButton").click(function(){
		$("#mcmissileDiv").addClass("hidden");
	});

	$("#gorvetteButton").click(function(){
		$("#gorvetteDiv").addClass("hidden");
	});

	$("#docButton").click(function(){
		$("#docDiv").addClass("hidden");
	});

	$("#caminoButton").click(function(){
		$("#caminoDiv").addClass("hidden");
	});

	$("#sheriffButton").click(function(){
		$("#sheriffDiv").addClass("hidden");
	});

	$("#fillmoreButton").click(function(){
		$("#fillmoreDiv").addClass("hidden");
	});

	$("#materButton").click(function(){
		$("#materDiv").addClass("hidden");
	});

	$("#showAllBtn").click(function(){
		$(".picture-item").removeClass("hidden");
	});

	$("#disappearAllBtn").click(function(){
		$(".picture-item").addClass("hidden");
	});

	$("#shiftwellAppearBtn").click(function(){
		$("#shiftwellInfoDiv").toggleClass("hidden");
		$("#shiftwellAppearBtn").toggleClass("hidden");
		$("#shiftwellDisappearBtn").toggleClass("hidden");
	});

	$("#shiftwellDisappearBtn").click(function(){
		$("#shiftwellInfoDiv").toggleClass("hidden");
		$("#shiftwellAppearBtn").toggleClass("hidden");
		$("#shiftwellDisappearBtn").toggleClass("hidden");
	});

	$("#mcqueenAppearBtn").click(function(){
		$("#mcqueenInfoDiv").toggleClass("hidden");
		$("#mcqueenAppearBtn").toggleClass("hidden");
		$("#mcqueenDisappearBtn").toggleClass("hidden");
	});

	$("#mcqueenDisappearBtn").click(function(){
		$("#mcqueenInfoDiv").toggleClass("hidden");
		$("#mcqueenAppearBtn").toggleClass("hidden");
		$("#mcqueenDisappearBtn").toggleClass("hidden");
	});

	$("#mcmissileAppearBtn").click(function(){
		$("#mcmissileInfoDiv").toggleClass("hidden");
		$("#mcmissileAppearBtn").toggleClass("hidden");
		$("#mcmissileDisappearBtn").toggleClass("hidden");
	});

	$("#mcmissileDisappearBtn").click(function(){
		$("#mcmissileInfoDiv").toggleClass("hidden");
		$("#mcmissileAppearBtn").toggleClass("hidden");
		$("#mcmissileDisappearBtn").toggleClass("hidden");
	});

	$("#gorvetteAppearBtn").click(function(){
		$("#gorvetteInfoDiv").toggleClass("hidden");
		$("#gorvetteAppearBtn").toggleClass("hidden");
		$("#gorvetteDisappearBtn").toggleClass("hidden");
	});

	$("#gorvetteDisappearBtn").click(function(){
		$("#gorvetteInfoDiv").toggleClass("hidden");
		$("#gorvetteAppearBtn").toggleClass("hidden");
		$("#gorvetteDisappearBtn").toggleClass("hidden");
	});

	$("#docAppearBtn").click(function(){
		$("#docInfoDiv").toggleClass("hidden");
		$("#docAppearBtn").toggleClass("hidden");
		$("#docDisappearBtn").toggleClass("hidden");
	});

	$("#docDisappearBtn").click(function(){
		$("#docInfoDiv").toggleClass("hidden");
		$("#docAppearBtn").toggleClass("hidden");
		$("#docDisappearBtn").toggleClass("hidden");
	});

	$("#caminoAppearBtn").click(function(){
		$("#caminoInfoDiv").toggleClass("hidden");
		$("#caminoAppearBtn").toggleClass("hidden");
		$("#caminoDisappearBtn").toggleClass("hidden");
	});

	$("#caminoDisappearBtn").click(function(){
		$("#caminoInfoDiv").toggleClass("hidden");
		$("#caminoAppearBtn").toggleClass("hidden");
		$("#caminoDisappearBtn").toggleClass("hidden");
	});

	$("#sheriffAppearBtn").click(function(){
		$("#sheriffInfoDiv").toggleClass("hidden");
		$("#sheriffAppearBtn").toggleClass("hidden");
		$("#sheriffDisappearBtn").toggleClass("hidden");
	});

	$("#sheriffDisappearBtn").click(function(){
		$("#sheriffInfoDiv").toggleClass("hidden");
		$("#sheriffAppearBtn").toggleClass("hidden");
		$("#sheriffDisappearBtn").toggleClass("hidden");
	});

	$("#fillmoreAppearBtn").click(function(){
		$("#fillmoreInfoDiv").toggleClass("hidden");
		$("#fillmoreAppearBtn").toggleClass("hidden");
		$("#fillmoreDisappearBtn").toggleClass("hidden");
	});

	$("#fillmoreDisappearBtn").click(function(){
		$("#fillmoreInfoDiv").toggleClass("hidden");
		$("#fillmoreAppearBtn").toggleClass("hidden");
		$("#fillmoreDisappearBtn").toggleClass("hidden");
	});

	$("#materAppearBtn").click(function(){
		$("#materInfoDiv").toggleClass("hidden");
		$("#materAppearBtn").toggleClass("hidden");
		$("#materDisappearBtn").toggleClass("hidden");
	});

	$("#materDisappearBtn").click(function(){
		$("#materInfoDiv").toggleClass("hidden");
		$("#materAppearBtn").toggleClass("hidden");
		$("#materDisappearBtn").toggleClass("hidden");
	});

	$("#buttonsDiv").css("margin", "50px");
	$(".classofdiv").css("margin", "10px");
});