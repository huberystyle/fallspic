/*
 fallspic 1.0
 Autor: Hu Yicheng
 Update: 2014-04-17
 Usage: $("selector").fallspic({picWidth:250,lineShowNum:4});
*/

(function($){
	$.fn.fallspic = function(options){
		var opt = $.extend({picWidth:200,lineShowNum:4},options);
		this.each(function(){
			$(this).width(opt.picWidth*opt.lineShowNum);
			var obj = $(this).children(":visible"),len = obj.length,colArr = new Array(opt.lineShowNum),minColHeight = 0,maxColHeight = 0,objHeight = 0;
			$.each(colArr,function(i){
				colArr[i] = 0;
			});
			obj.each(function(i){
				minColHeight = Math.min.apply(Math,colArr); 
				obj.eq(i).css({"top":minColHeight});
				objHeight = obj.eq(i).outerHeight(true);
				for(var j = 0; j < opt.lineShowNum; j++){
					if(colArr[j] == minColHeight){
						colArr[j] += objHeight;
						obj.eq(i).css({"left":j*opt.picWidth+"px"});
						break;
					}
				}
			});
			maxColHeight = Math.max.apply(Math,colArr);
			$(this).height(maxColHeight);
		});
	}
})(jQuery);