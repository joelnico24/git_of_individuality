$(document).ready(function(){
	$(".bookie").css("height", $("#greatbook").height());

	$("#non-fictionbtn").click(function(){
		$(".fiction, .childrens").toggleClass("hidden");
	});

	$("#fictionbtn").click(function(){
		$(".non-fiction, .childrens").toggleClass("hidden");
	});

	$("#childrensbtn").click(function(){
		$(".non-fiction, .fiction").toggleClass("hidden");
	});

	$("#showallbtn").click(function(){
		$(".mybook").removeClass("hidden");
	});
});