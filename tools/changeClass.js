/*
添加类属性
obj:需要修改的对象
classname:增加的类属性
*/
function addClass(obj,classname){
	//这样判断的值就写死了，不能把box2直接改成classname，需要创建对象（\b表示匹配单词边界）
	//var reg = /\bbox2\b/;
	//记得加\\b,两个斜杠代表转义符，等于一个斜杠，加了两个\\b（匹配单词边界），以便匹配搜索的类名
	/*var reg = new RegExp("\\b" + classname + "\\b");
	var toAdd = reg.test(obj.className);
	console.log(toAdd);
	if(!toAdd){
		obj.className += " " + classname;
	}*/
	if(!hasClass(obj,classname)){
		obj.className += " " + classname;
	}
}
/*
判断对象中是否含有该类名
obj:需要修改的对象
classname:增加的类属性
*/
function hasClass(obj,classname){
	var reg = new RegExp("\\b" + classname + "\\b");
	return reg.test(obj.className);
}
/*
删除类属性
obj:需要修改的对象
classname:删除的类属性
*/
function removeClass(obj,classname){
	var reg = new RegExp("\\b" + classname + "\\b");
	obj.className = obj.className.replace(reg,"")
}
/*
切换一个类，有则删除，没有则添加
*/
function toggleClass(obj,classname){
	if(hasClass(obj,classname)){
		removeClass(obj,classname);
	}else{
		addClass(obj,classname);
	}
}
//------------------密码隐藏与否-------------------------
/*
 * eyeObj:被点击的图标字体
 * inputObj:点击图标后要改变的type属性的输入框
 * */
function eyePassword(eyeObj,inpObj){
	eyeObj.onclick = function(){
		if(eyeObj.className == "fa fa-eye-slash"){
			eyeObj.className = "fa fa-eye";
			inpObj.type = "text";
		}else{
			eyeObj.className = "fa fa-eye-slash";
			inpObj.type = "password";
		}
	}
}