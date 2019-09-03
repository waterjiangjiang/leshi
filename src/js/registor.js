$(function(){
	// 声明变量
	// 手机号正则
	let re = /^1[^(0|2|6|4)]\d{9}$/;
	let str = '',flag = true;
	// 手机号验证
	$('.main_con .main_r ul li').eq(0).children('input').blur(function(){
		str = $(this).val();
		if(!re.test(str)){
			flag = false;
			$('.notice').children('.notice_con').css('display','block');
		}else{
			$('.notice').children('.notice_con').css('display','none');
		}
		if(str.length > 0){
			$(this).siblings('span').css('display','block')
		}
	})
	// 图片验证码
	// console.log(random())
	$('.main_con .main_r ul li').eq(2).children('span').click(function(){
		let value = random();
		$(this).empty().append(value);
		// $(this).prev().blur(function(){
		// 	if($(this).val() === value.join('')){
		// 		
		// 	}
		// })
	})
	// 手机验证码
	$('.main_con .main_r ul li').eq(3).children('a').click(function(){
		let value = random();
		$(this).empty().append(value);
	})
	
	// console.log(flag);
	
	
	
	console.log($('.main_con .main_r ul li').eq(5).children('a'));
	
	// 注册
	$('.main_con .main_r ul li').eq(5).children('a').click(function(){
		// let yzmL1 = $('.main_con .main_r ul li').eq(2).children('input').val(),yzmR1 = 
		if($('.main_con .main_r ul li').eq(2).children('input').val() !== $('.main_con .main_r ul li').eq(2).children('span').html()){
		 	flag = false;
		}
		// console.log($('.main_con .main_r ul li').eq(2).children('span').html());
		if($('.li_div').children('input').val() !== $('.main_con .main_r ul li').eq(3).children('a').html()){
		 	flag = false;
		}
		
		if(flag){
			let $name = $('.main_con .main_r ul li').eq(0).children('input').val();
			// console.log($name);
			let $pwd = $('.main_con .main_r ul li').eq(1).children('input').val();
			let cookieStr = $.cookie('jianghaiyang_leshi_user') ? $.cookie('jianghaiyang_leshi_user') : '';
			let cookieObj = fn(cookieStr);
			if($name in cookieObj){
				alert('用户名已存在');
				return;
			}else{
				cookieObj[$name] = $pwd;
				$.cookie('jianghaiyang_leshi_user',JSON.stringify(cookieObj));
				alert('注册成功!');
				window.location = 'login.html'
			}
			
			
			
		}
	})
	

	
	// 将字符串转对象
	function fn(str) {
	    if (!str) {
	        return {};
	    }
	    return JSON.parse(str);
	}
	
	// 随机数
	function random(){
		// let arr1 = [0,1,2,3,4,5,6,7,8,9];
		let str1 = '012345678901234567890123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
		// console.log(str1);
		let list = '';
		for(let i = 1;i < 5;i++){
			// ;
			list += str1.charAt(Math.floor(Math.random() * str1.length))
			// console.log(Math.floor(Math.random() * str1.length))
		}
		// console.log(list);
		return list;
	}
	
	// a标签变色
	$('header a').mouseenter(function(){
		$(this).css('color','#529bef')
	})
	$('.main_con .main_r p a').click(function(){
		window.location = 'login.html'
	})
	
})