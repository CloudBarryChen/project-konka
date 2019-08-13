function animate(ele,obj,speedTime,callBack){
	//var callBack = function(){alert("o了")};
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var flag = true;//表示所有的属性都到达 了目标值
		for(var attr in obj){
			if(attr != "zIndex"){
				var current = 0;
				if(attr == "opacity"){
					current = param(ele,attr) * 100;
				}else{
					current = Math.ceil(parseFloat(param(ele,attr)));
				}
				var speed = (obj[attr] - current)/10;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if(obj[attr] != current){
					flag = false;
				}
			}
			if(attr == "opacity"){
				ele.style[attr] = (current + speed)/100;
			}else if(attr == "zIndex"){
				ele.style[attr] = obj[attr];
			}else{
				ele.style[attr] = current + speed + "px";
			}
		}
		if(flag){//都到达目标值 了
			clearInterval(ele.timer);
			//运动完毕后这里开启下一个程序的执行
			if(callBack){
				callBack();
			}
		}
	},speedTime);
}
//通过对应的属性获取对应属性的样式值
function param(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}