// 清除广告浮窗
console.log("开始清除广告");

function clearADs() {
	if( window.location.href.includes('wfrmyy') ) {
		
	} else if( window.location.href.includes('meiju22') ) {
		meiju22(-1);
	} else if( window.location.href.includes('hanjutv') ) {
		hanjutv(-1);
		meiju22(-1);
	}
}

function meiju22(count) { // 清除浮窗广告
	let eles = [
		'.layui-layer',
		'.layui-layer-move',
		'.layui-layer-shade',
	].map( className => document.querySelector(className) )
	 .filter( ele => ele);
	if( count < 0 || eles.length === 3 ) {
		eles.forEach( ele => ele.parentNode.removeChild(ele) );
	} else {
		setTimeout( () => {
			meiju22(count - 1);
		})
	}
}

function hanjutv(count) {
	let eles = [
		'#widget-weixin',
		'.widget-qianhuiji',
		'#sozz',
		'#jm_DIV_rrichrightB',
		'#jm_DIV_rrichrightC',
		'#tttb_dgfhghj',
	].map( className => document.querySelector(className) )
	 .filter( ele => ele);
	 
	if( count < 0 || eles.length === 6 ) {
		eles.forEach( ele => ele.parentNode.removeChild(ele) );
	} else {
		setTimeout( () => {
			hanjutv(count - 1);
		})
	}
}

clearADs();