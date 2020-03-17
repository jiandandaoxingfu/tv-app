var scroll = {
	// 滚动页面，使焦点元素处在屏幕中央(竖直方向)
	// ref: https://www.cnblogs.com/hjqbit/p/7260989.html
	scroll2middle: function(ele) { 
		var doc = document.documentElement;	// 电脑
		// var doc = document.body;			  	// 电视
		var s = doc.scrollTop; 				// 网页被卷去部分的高
        var h1 = window.innerHeight; 		// 文档可视区的高度
        var h2 = ele.clientHeight;			// 元素的高度
        var off = this.getHeight(ele); 		// 元素距离文档顶部的距离
       	s += (off + h2/2) - (s + h1/2); 	// 元素中心高度与可视区域中心高度之差
		if( s < 0 ) { // 下滑到头
			s = -doc.scrollTop;
		} else if( s > doc.scrollHeight - h1 ) { // 上滑到底
			s = doc.scrollHeight - h1 - doc.scrollTop;  // 前两个元素文档总高度与可视区域之差，即最大上滑距离
		}
		this.smoothScroll(s, 10);
	},

	getHeight: function(ele) { // 获取元素距离文档顶部的距离
		var h = 0;  
		var obj = ele;
		while (obj) {
			h += obj.offsetTop; // 不断累加e元素和其每个父元素的offsetTop
			obj = obj.offsetParent;
		}
		return h;
	},

	timeStamp: 10,

	smoothScroll: function(dist, count) {
		if( count > 0 ) {
			setTimeout( () => {
				// document.body.scrollTop += dist/10;
				document.documentElement.scrollTop += dist/10;
				this.smoothScroll(dist,  --count);
			}, this.timeStamp);
			return;
		}
	}
}