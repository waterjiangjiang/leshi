$(function(){
	let $tab = $('table');
	let storage = window.localStorage;
	let storageStr = storage.leshi_jianghaiyang_carts;
	let storageObj = storageStr === undefined ? {} : JSON.parse(storageStr);
	for(let key in storageObj){
		let value = storageObj[key];
		$tab.append(`<tr class="td2" data-good-id="${key}">
							<td>
								<img src="img/1538281427720.jpg" ><span>${value.name}</span>
							</td>
							<td>${value.price}</td>
							<td>
								<span class="min">-</span><input type="text" value="${value.num}"  class="int"/><span class="plu">+</span>
							</td>
							<td><span class="tol">${value.num * value.price}</span></td>
							<td><span class="del">删除</span></td>
						</tr>`)
	}
	
	// 数量减小按钮
	
	
	
	$('.min').click(function(){
		let num = $('.int').val();
		--num;
		if(num < 0){
			num = 0;
		}
		$('.int').val(num);
		let $id = $('.td2').attr('data-good-id');
		storageObj[$id].num = num;
		$('.tol').html(num * storageObj[$id].price);
		storage.leshi_jianghaiyang_carts = JSON.stringify(storageObj)
	// 数量增加
	})
	$('.plu').click(function(){
		let num = $('.int').val();
		++ num;
		$('.int').val(num);
		let $id = $('.td2').attr('data-good-id');
		storageObj[$id].num = num;
		$('.tol').html(num * storageObj[$id].price);
		storage.leshi_jianghaiyang_carts = JSON.stringify(storageObj)
		
	})
	// 输入框
	$('.int').blur(function(){
		let num = $('.int').val();
		let $id = $('.td2').attr('data-good-id');
		storageObj[$id].num = num;
		$('.tol').html(num * storageObj[$id].price);
		storage.leshi_jianghaiyang_carts = JSON.stringify(storageObj)
		
	})
	// 删除按钮
	$('.del').click(function(){
		let $id = $('.td2').attr('data-good-id');
		delete storageObj[$id];
		storage.leshi_jianghaiyang_carts = JSON.stringify(storageObj)
		$('.td2').remove();
		
	})
	
})