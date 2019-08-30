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
	autoplay();
	function autoplay(){
		timer = setInterval(function(){
			index++;
			console.log(index);
			let wid = parseInt($('.pic_box').css('width')) * index;
			console.log(wid);
			$('.pic').animate({
				left : - wid
			},500)
			if(index === len-1){
				index = -1;
			}
		},3000)
		// timer();
	}
})
