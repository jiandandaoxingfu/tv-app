class RemoteControl {
	constructor() {
		this.documentHeight = document.body.scrollHeight;
		this.documentWidth = document.body.scrollWidth;
		this.isShowRemotedEles = !1;
		this.focusEleIndex = 0;
	}

	getRemotedEles() {
		let eles = [...document.querySelectorAll('a'), ...document.querySelectorAll('button')]
			.filter( e => !this.isHidden(e) );
		let elesOffset = eles.map( e => this.getOffset(e) );
		eles = eles.filter( (ele, i) => {
			let isInDocument = elesOffset[i].left < this.documentWidth &&
							elesOffset[i].top < this.documentHeight &&
							elesOffset[i].right > 0 &&
							elesOffset[i].bottom > 0;
			if( isInDocument ) {
				return !0;
			} else {
				elesOffset[i] = null;
				return !1;
			}
		})
		elesOffset = elesOffset.filter( d => d );
		this.eles = eles;
		this.elesLeft = [];
		this.elesTop = [];
		this.elesRight = [];
		this.elesBottom = [];
		elesOffset.forEach( offset => {
			this.elesLeft.push(offset.left);
			this.elesTop.push(offset.top);
			this.elesRight.push(offset.right);
			this.elesBottom.push(offset.bottom);
		})
		// 可视化
		if( this.isShowRemotedEles ) this.eles.forEach( e => {
			e.style.outline = "red solid 2px";
		});
		
		this.eles[this.focusEleIndex].setAttribute("class", this.eles[this.focusEleIndex].getAttribute("class") + " myfocus");
	}

	getOffset(ele) { // 获取元素距离文档顶部和左端的距离，也可以改为距离可视区域的顶和左。
		var offset_ = {left: 0, top: 0, right: 0, bottom: 0};
		var obj = ele;
		while (obj) {
			offset_.left += obj.offsetLeft;
			offset_.top += obj.offsetTop;
			obj = obj.offsetParent;
		}
		offset_.bottom = offset_.top + ele.offsetHeight;
		offset_.right = offset_.left + ele.offsetWidth;
		return offset_;
	}

	isHidden(ele) {
		if( ele.offsetHeight * ele.offsetWidth === 0 ) {
			return !0;
		}
		while(ele.parentNode) {
			ele = ele.parentNode;
			if( ele.style && ele.style.display.includes("none") ) {
				return !0;
			}
		}
		return !1;
	}
}

var style = document.createElement('style');
style.innerHTML = `
	@keyframes focus {
		0% {
			box-shadow: 0 0 30px yellow;
		}
		10% {
			box-shadow: 0 0 30px red;
		}
		20% {
			box-shadow: 0 0 30px green;
		}
		30% {
			box-shadow: 0 0 30px lime;
		}
		40% {
			box-shadow: 0 0 30px #EEAEEE;
		}
		50% {
			box-shadow: 0 0 30px #D15FEE;
		}
		60% {
			box-shadow: 0 0 30px #CDCD00;
		}
		70% {
			box-shadow: 0 0 30px #C0FF3E;
		}
		80% {
			box-shadow: 0 0 30px #9400D3;
		}
		90% {
			box-shadow: 0 0 30px #8470FF;
		}
		100% {
			box-shadow: 0 0 30px #218868;
		}
	}
	
	.myfocus {
		background-color: red !important;
		animation: focus 3s linear infinite;
	}
`
document.head.appendChild(style);

var remoteControl = new RemoteControl();
remoteControl.getRemotedEles();