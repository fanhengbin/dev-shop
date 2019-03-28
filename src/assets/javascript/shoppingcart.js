$(function () {
	// 购物车为空的判断
	function cartEmpty() {
		console.log($('.cart-merchant-list .cart-merchant').length);
		if ($('.cart-merchant-list li').length <= 0) {
			$(".cart-empty").show().siblings(".center").hide();
		} else {
			$(".cart-empty").hide().siblings(".center").show();
		}
	}
	//取消全选
	function cancelSelect() {
		if ($('.td-inner input').length === $('.td-inner input:checked').length) {
			$('.allSelected').prop('checked', true);
		} else {
			$('.allSelected').prop('checked', false);
		}
	}
	//如果有商品未选中，则取消全选。
	function cancelCalculator() {
		if ($('.td-inner input:checked').length === 0) {
			$('#btn-sum').css({
				'background-color': '#DBDBDB',
				'cursor': 'not-allowed'
			});
		} else {
			$('#btn-sum').css({
				'background-color': '#F66567',
				'color': '#FFF',
				'cursor': 'pointer'
			});
		}
	}
	//获得已选中商品和商品价格总额
	function getCount() {
		var counts = 0;
		var sum = 0;
		$('.td-inner input').each(function (index, el) {
			if ($(this).prop('checked')) {
				for (var i = 0; i < $(this).length; i++) {
					counts += parseInt($(this).parents('.td-chk').siblings('.td-sum').find('span').text());
					sum += parseInt($(this).parents('.td-chk').siblings('.td-amount').find('input').val());
				}
			}
		});
		if (counts < 300) {
			$(".charge").show();
			$(".free").hide();
		} else {
			$(".charge").hide();
			$(".free").show();
		}
		console.log(sum);
		console.log(counts);
		$('.totalSum').text(sum);
		$('.total-sum').html((counts).toFixed(2));
	};
	//删除商品
	$('body').on('click', '.delete', function (event) {
		var $this = $(event.target);
		var thisInfo = $this.parents('.cart-merchant');
		console.log($('.cart-merchant').last());
		thisInfo.remove();
		getCount();
		cartEmpty()
		return false;
	});
	//删除选中的商品
	$('body').on('click', '.deleteSelected', function (event) {
		var $this = $(event.target);
		var checked = $this.parents('.footer').siblings(".cart-merchant-list").find(".td-chk input:checked");
		checked.parents('.cart-merchant').remove();
		getCount();
		cancelCalculator()
		cancelSelect();
		cartEmpty()
		return false;
	});
	//商品数量增加
	$('body').on('click', '.amount-right', function (event) {
		var thisParent = $(this).parents('.td-amount');
		var thisInput = $(this).parent('.item-amount');
		// 获取到单价
		var $text = thisParent.siblings('.td-price').find('span').text();
		// 总价
		var tdSum = thisParent.siblings('.td-sum').find('span');
		var num = thisInput.find('input').val();
		num++;
		thisInput.find('input').val(num);
		// 把总价放进去
		tdSum.text($text * num + '.00');
		// 商品勾选时  才会计入总价
		if ($(this).parents('.td-amount').siblings('.td-chk').find('input').prop('checked')) {
			getCount();
		}
		return false;
	});
	//商品数量减少
	$('body').on('click', '.amount-left', function (event) {
		var thisParent = $(this).parents('.td-amount');
		var thisInput = $(this).parent('.item-amount');
		// 获取到单价
		var $text = thisParent.siblings('.td-price').find('span').text();
		// 总价
		var tdSum = thisParent.siblings('.td-sum').find('span');
		// 把总价放进去
		var num = parseInt(thisInput.find('input').val());
		if (num > 1) {
			var num = num - 1;
			thisInput.find('input').val(num);
		}
		tdSum.text($text * num + '.00');
		// 商品勾选时  才会计入总价
		if ($(this).parents('.td-amount').siblings('.td-chk').find('input').prop('checked')) {
			console.log("aaa");
			getCount();
		}
		return false;
	});
	//商品全选
	$('.selectAll').on('click', '.allSelected', function (event) {
		if ($(this).prop('checked')) {
			$(':checkbox').prop('checked', true);
			$('.commodityInfo').css({
				'background-color': '#FFF8E1'
			});
			$('#btn-sum').css({
				'background-color': '#F66567',
				'color': '#FFF',
				'cursor': 'pointer'
			})
		} else {
			$(':checkbox').prop('checked', false);
			$('.commodityInfo').css({
				'background-color': '#fcfcfc'
			});
			$('#btn-sum').css({
				'background-color': '#F66567',
				'cursor': 'not-allowed'
			})
		}
		getCount();
	});
	//未选中商品时禁止点击
	$('#btn-sum').click(function (event) {
		if ($('.td-inner input:checked').length === 0){
			return false;
		}
	});
	//点击某商品时选中
	$('body').on('click', '.td-inner input', function (event) {
		if ($(this).prop('checked')) {
			$(this).parents('.commodityInfo').css({
				'background-color': '#fff8e1'
			});
		} else {
			$(this).parents('.commodityInfo').css({
				'background-color': '#fcfcfc'
			});
		}
		cancelCalculator();
		cancelSelect();
		getCount();
	});
});