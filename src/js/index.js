$.getJSON('json/bannerslider.json',function(data){
	let value = data.pic,len = value.length;
	let color = data.color;
	// console.log(value);
	for(let i =0;i < len;i++){
		$('.pic').append(`<div class="pic_box"><img src="img/${value[i]}" width = "1196px" height= "420px"></div>`);
		$('.pic_box').eq(i).css({'width': $(window).width(),'background' : color[i]});
	}
	let timer = null;
	let index = 0;
	let indexA = 0;
	autoplay();
	$('.small').mouseenter(function(){
		$(this).children('span').css('display','block');
	})
	$('.small').mouseleave(function(){
		$(this).children('span').css('display','none');
	})
	$('lt_btn').click(function(){
		clearInterval(timer);
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function slide(){
		
	}
	
	
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
			
		},3000)
		// timer();
	}
})
