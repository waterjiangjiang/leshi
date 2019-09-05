$(function(){
	let zIndex = 1;
	let index = 0;
	// 图片切换
	$('.main_con_l_bottom ul li').each(function(i){
		$(this).mouseenter(function(){
			
			$(this).css('border-color','#C80000');
			index = i;
			zIndex++;
			slide();
		})
		$(this).mouseleave(function(){
			$(this).css('border-color','#fff');
		})
	})
	
	// 大图切换
	function slide(){
		$('.main_con_l_top ul li').eq(index).css('z-index',zIndex)
	}
	
	// 存储到本地
	let storage = window.localStorage;
	let $name = $('.name').children('a').html();
	let $price = $('.price').children('i').children('b').html();
	let $id = $('.ul').attr('data-good-id')
	let num = 0;
	let storageStr = storage.leshi_jianghaiyang_carts ? storage.leshi_jianghaiyang_carts : '';
	let storageObj = storageStr ? JSON.parse(storageStr) : {};
	
	$('.price').children('a').click(function(){
		console.log(1);
		if($id in storageObj){
			storageObj[$id].num++;
		}else{
			storageObj[$id] = {
				"name" : $name,
				"price" : $price,
				"num" : 1
			}
		}
		storage.leshi_jianghaiyang_carts = JSON.stringify(storageObj);
		window.location = 'cart.html'
	})
	
	
	
	
	
	
	
})