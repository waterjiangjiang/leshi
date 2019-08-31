// 获取json中数据
$.getJSON('json/bannerslider.json',function(data){
	// 取出json中的value值
	let value = data.pic,len = value.length;
	let color = data.color;
	let pics1 = data.pics1;
	let pics2 = data.pics2;
	let pics3 = data.pics3;
	let pics4 = data.pics4;
	let pics5 = data.pics5;
	let pics6 = data.pics6;
	// console.log(value);
	// 遍历value中的值
	for(let i =0;i < len;i++){
		// 添加图片和背景
		$('.pic').append(`<div class="pic_box"><img src="img/${value[i]}" width = "1196px" height= "420px"></div>`);
		// 设置背景颜色
		$('.pic_box').eq(i).css({'width': $(window).width(),'background' : color[i]});
	}
	// 初始化变量
	let timer = null;
	let index = 0;
	let indexA = 0;
	autoplay();
	// 左按钮点击弹起事件
	$('.small').mouseenter(function(){
		$(this).children('span').css('display','block');
	})
	$('.small').mouseleave(function(){
		$(this).children('span').css('display','none');
	})
	// console.log($('.lt_btn'))
	$('.lt_btn').click(function(){
		// clearInterval(timer);
		index--;
		indexA--;
		if(indexA < 0){
			indexA = len - 2;
		}
		// $('.small ul li').each(function(i){
		// 	$(this).children('a').css('background','#ccc');
		// })
		// $('.small ul li').eq(indexA).children('a').css('background','#2884c7');	
		slideSmall();
		if(index < 0){
			index = len - 2;
			$('.pic').css('left',- parseInt($('.pic_box').css('width')) * (index + 1));
		}
		slide();
	})
	$('.lt_btn').mouseup(function(){
		autoplay();
	})
	// 右按钮点击弹起事件
	$('.rt_btn').click(function(){
		// clearInterval(timer);
		index++;
		indexA++;
		if(indexA >= len - 1){
			indexA = 0;
		}
		// $('.small ul li').each(function(i){
		// 	$(this).children('a').css('background','#ccc');
		// })
		// 
		// $('.small ul li').eq(indexA).children('a').css('background','#2884c7');	
		slideSmall();
		if(index > len -1){
			index = 1;
			$('.pic').css('left','0');
		}
		slide();
	})
	$('.rt_btn').mouseup(function(){
		autoplay();
	})
	// 小图点击事件
	$('.small ul li').each(function(i){
		$(this).click(function(){
			index = i;
			indexA = i;
			slide();
			slideSmall();
		})
		// 小图鼠标弹起事件
		$(this).mouseup(function(){
			autoplay();
		})
	})
	// 大图轮播
	function slide(){
		let wid = parseInt($('.pic_box').css('width')) * index;
		// console.log(wid);
		$('.pic').animate({
			left : - wid
		},500)
	}
	// 小图轮播
	function slideSmall(){
		$('.small ul li').each(function(i){
			$(this).children('a').css('background','#ccc');
		})
		
		$('.small ul li').eq(indexA).children('a').css('background','#2884c7');	
	}
	// 自动轮播
	function autoplay(){
		clearInterval(timer);
		timer = setInterval(function(){
			index++;
			if(index >= len){
				$('.pic').css('left','0');
				index = 1;
			}
			indexA++;
			if(indexA >= len - 1){
				indexA = 0;
			}
			
			// console.log(index);
			let wid = parseInt($('.pic_box').css('width')) * index;
			// console.log(wid);
			$('.pic').animate({
				left : - wid
			},500)
			$('.small ul li').each(function(i){
				$(this).children('a').css('background','#ccc');
			})
			
			$('.small ul li').eq(indexA).children('a').css('background','#2884c7');	
			slideSmall();
		},3000)
		// timer();
	}
	
	
	// 动态添加图片
	$('.super_tv .super_tv_bottom dl').each(function(i){
		$(this).children('h6').children('img').attr('src','img/' + pics1[i])
	})
	// 动态添加大长图
	// console.log(pics2);
	$('.long_tv_pic').each(function(i){
		$(this).append($(`<img src="img/${pics2[i]}" alt="" width="1196px" height="120px">`))
	})
	// 动态添加精品配件版块的图片
	$('.accessories .acs_r dl').each(function(i){
		// console.log(pics3[i])
		$(this).children('h6').children('img').attr('src','img/' + pics3[i] + '.jpg')
	})
	// 动态添加生活家里面的左边图片
	$('.live_house_lpic').each(function(i){
		$(this).append($(`<img src="img/${pics4[i]}.jpg" alt="">`))
	})
	
	$('.live_house dl').each(function(i){
		// console.log(pics3[i])
		$(this).children('h6').children('img').attr('src','img/' + pics5[i] + '.jpg')
	})
	
	// 动态添加瀑布流
	for(let i = 0;i < pics6.length;i++){
		$('.waterfall').append($(`<dl>
						<h6><img src="img/${pics6[i]}.jpg" alt=""></h6>
						<h4>超级电视 Zero65 艺术底座</h4>
						<dt>量身定制 | 单立柱式结构</dt>
						<dd>¥399</dd>
						<p><a href="jacascript:;">立即购买</a></p>
					</dl>`))
	}
	
	
	// 瀑布流效果
	$('.waterfall dl').each(function(i){
		console.log($('.waterfall dl').children('h6'))
		$(this).mouseenter(function(){
			$(this).children('h6').children('img').css({
				'position' : 'absolute'	
			})
			$(this).children('h6').children('img').animate({
				width : '164px',
				height : '164px',
				left : '-2px',
				top : '-2px'
			},300)
			
			$(this).children('p').animate({
				'bottom' : '40px'
			},200)
		})
			// console.log($(this))
		$(this).mouseleave(function(){
			$(this).children('h6').children('img').animate({
				width : '160px',
				height : '160px',
				left : '0px',
				top : '0px'
			},300)
			$(this).children('p').animate({
				'bottom' : '-40px'
			},200)
		})
		
	})
})

// 生活惠效果
$('.live_type .live_type_case dl').each(function(i){
	// 图片放大
	// console.log($(this))
	$(this).mouseenter(function(){
		// console.log($(this))
		$(this).children('h6').children('img').css({
			'position' : 'absolute'	
		})
		$(this).children('h6').children('img').animate({
			width : '164px',
			height : '164px',
			left : '-2px',
			top : '-2px'
		},300)
		// console.log($(this))
	})
	$(this).mouseleave(function(){
		$(this).children('h6').children('img').animate({
			width : '160px',
			height : '160px',
			left : '0px',
			top : '0px'
		},300)
	})
})

	

// 超级电视效果
$('.super_tv .super_tv_bottom dl').each(function(i){
	$(this).mouseenter(function(){
		$(this).children('h6').children('img').css({
			'position' : 'absolute'	
		})
		$(this).children('h6').children('img').animate({
			width : '234px',
			height : '234px',
			left : '-2px',
			top : '-2px'
		},300)
		
		$(this).children('p').animate({
			'bottom' : '40px'
		},200)
	})
		// console.log($(this))
	$(this).mouseleave(function(){
		$(this).children('h6').children('img').animate({
			width : '230px',
			height : '230px',
			left : '0px',
			top : '0px'
		},300)
		$(this).children('p').animate({
			'bottom' : '-40px'
		},200)
	})
	
})
// 精选配件版块效果
$('.accessories .acs_r dl').each(function(i){
	$(this).mouseenter(function(){
		$(this).children('h6').children('img').css({
			'position' : 'absolute'	
		})
		$(this).children('h6').children('img').animate({
			width : '164px',
			height : '164px',
			left : '-2px',
			top : '-2px'
		},300)
		
		$(this).children('p').animate({
			'bottom' : '20px'
		},200)
	})
		// console.log($(this))
	$(this).mouseleave(function(){
		$(this).children('h6').children('img').animate({
			width : '160px',
			height : '160px',
			left : '0px',
			top : '0px'
		},300)
		$(this).children('p').animate({
			'bottom' : '-40px'
		},200)
	})
	
})
// 生活家效果
$('.live_house dl').each(function(i){
	$(this).mouseenter(function(){
		$(this).children('h6').children('img').css({
			'position' : 'absolute'	
		})
		$(this).children('h6').children('img').animate({
			width : '164px',
			height : '164px',
			left : '-2px',
			top : '-2px'
		},300)
		
		$(this).children('p').animate({
			'bottom' : '40px'
		},200)
	})
		// console.log($(this))
	$(this).mouseleave(function(){
		$(this).children('h6').children('img').animate({
			width : '160px',
			height : '160px',
			left : '0px',
			top : '0px'
		},300)
		$(this).children('p').animate({
			'bottom' : '-40px'
		},200)
	})
	
})

$('a').mouseenter(function(){
	$(this).css('color','#2884c7')
})
$('a').mouseleave(function(){
	$(this).css('color','#333333')
})

$('.banner_con ul li a').mouseenter(function(){
	$(this).css({'color':'#ffffff','background' : '#2884c7',"opacity":" 0.7"})
})
$('.banner_con ul li a').mouseleave(function(){
	$(this).css({'color':'#ffffff',"background":" #000000",
			"opacity":" 0.7"})
})


