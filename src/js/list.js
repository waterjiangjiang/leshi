$(function(){
	let flag = true;
	
	// 首页跳转
	
	$('.product_type .product_type_con ul li').eq(0).children('a').click(function(){
		window.location = 'index.html'
	})
	// 展开收起效果
	$('.open_close').click(function(){
		if(flag){
			$('.close_open').css('display','none');
			$(this).empty().append('展开');
			flag = false;
		}else{
			$('.close_open').css('display','block');
			$(this).empty().append('收起');
			flag = true;	
		}
			
	})
	// 动态添加图片
	$.getJSON('json/list.json',function(data){
		let pic = data.pic;
		for(let i = 0;i < pic.length;i++){
			$('.pic').append(`<dl>
						<img src="img/${pic[i]}" >
						<div class="kong">
							<p>
								<span></span>
								云豹底座 YUNB43A
							</p>
						</div>
						<dt>
							云豹底座 YUNB43A
						</dt>
						<dd>
							<h2>￥129.00</h2>
							<p><span></span><a href="javascript:;">1111条评价</a></p>
						</dd>
						<a href="javascript:;" class="buy">立即购买</a>
					</dl>`)
		}
		// 添加移入效果
		// console.log($('.pic dl'))
		$('.pic dl').each(function(i){
			// console.log($(this))
			$(this).mouseenter(function(){
				$(this).css({
					'border-color' : '#C80000',
				})
				$(this).children('.buy').css({
					'background' : '#C80000',
					'color' : '#fff'
				})
			})
			$(this).mouseleave(function(){
				$(this).css({
					'border-color' : '#fff',
				})
				$(this).children('.buy').css({
					'background' : '#fff',
					'color' : '#C80000'
				})
			})
			// 小黑框
			
			$(this).children('dt').mouseenter(function(){
				console.log($(this).prevAll('.kong').children('p'))
				$(this).prevAll('.kong').children('p').css('display','block')
			})
			$(this).children('dt').mouseleave(function(){
				$(this).prevAll('.kong').children('p').css('display','none')
			})
			
			// 跳转到详情页
			$(this).click(function(){
				window.location = 'detail.html'
			})
			
		})
		
	})
	
	
	
	
	
	
	
	
	
})