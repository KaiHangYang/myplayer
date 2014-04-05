$(document).ready(function(){

	//这下面的代码是用来做自适应的
	$(".block").css({"height":window.innerHeight - 24, "top":24});
	$("#leader p").css({"fontSize":(window.innerHeight + window.innerWidth)/20});
	$(".leaderCover").css({"fontSize":(window.innerHeight + window.innerWidth)/80});
	window.addEventListener("resize", function(){
		$(".block").css({"height":window.innerHeight - 24, "top":24});
		$("#leader p").css({"fontSize":(window.innerHeight + window.innerWidth)/20});
		$(".leaderCover").css({"fontSize":(window.innerHeight + window.innerWidth)/80});
	},false);

	//用于登录与注册窗口
	$("#login").click(function(){
		$("#logWindow").css("display","block");
		$("#logFrame").attr("src","php/login.html")
	});

	$("#regist").click(function(){
		$("#logWindow").css("display","block");
		$("#logFrame").attr("src","php/regist.html")
	});

	$("#logClose").click(function(){
		$("#logWindow").css("display","none");
	});
	//用与判断输入

})