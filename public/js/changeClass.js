var changeClass = {
	add: function(ele, className) {
		ele.setAttribute('class', ele.className + ' ' + className);
	}, 

	remove: function(ele, className) {
		ele.setAttribute('class', ele.className.replace(className, ''));
	}
}

window.onload = () => {
	changeClass.add(document.querySelector('#page-0-row-1-btn-1'), 'focus');
}