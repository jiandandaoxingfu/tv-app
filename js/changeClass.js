var changeClass = {
	add: function(ele, className) {
		ele.setAttribute('class', ele.className + ' ' + className);
	}, 

	remove: function(ele, className) {
		ele.setAttribute('class', ele.className.replace(className, ''));
	}
}