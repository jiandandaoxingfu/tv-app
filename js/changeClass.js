var changeClass = {
	add: function(ele, className) {
		ele.setAttribute('class', ele.className + ' ' + className);
	}, 

	remove: function(ele, className) {
		ele.setAttribute('class', ele.className.replace(className, ''));
	}
}

window.onload = function onload() {
	let btn = document.querySelector('#page-0-row-1-btn-1'); 
	changeClass.add(btn, 'focus');
	btn.click();
}