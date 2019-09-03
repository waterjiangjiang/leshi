$(function(){
	// 获取本地cookie
	let cookieStr = $.cookie('jianghaiyang_leshi_user');
	let cookieObj = cookieStr === undefined ?   {}:$.parseJSON(cookieStr);
	let flag = true;
	let str = '';
	console.log(cookieStr);
	$('.main_con .main_r ul li').eq(0).children('input').blur(function(){
		str = $(this).val();
		if(!(str in cookieObj)){
			$('.notice').children('.notice_con').css('display','block');
			flag = false;
		}else{
			$('.notice').children('.notice_con').css('display','none');
		}
		if(str.length > 0){
			$(this).siblings('span').css('display','block')
		}

	})	
	
	$('.login').children('a').click(function(){
		if($('pwd').children('input').val() !== cookieObj[str]){
			flag = false;
		}
		console.log(flag)
		if(flag){
			alert('登录成功');
			window.location = 'index.html'
		}
	})
	$('.reg a').click(function(){
		window.location = 'registor.html'
	})
	
})