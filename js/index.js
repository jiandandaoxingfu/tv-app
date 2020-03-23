// 返回键处理

document.addEventListener('plusready', function() {
	back2parent();
});

function back2parent() {
	// Android处理返回键
	plus.key.addEventListener('backbutton', function() {
		console.log("mainView返回键");
		let mainView = plus.webview.getWebviewById("mainView");
		mainView.canBack( e => {
			if( e.canBack ) {
				window.stop();
				console.log("mainView返回上一层");
				window.history.go(-1);
				setTimeout( () => {
					console.log("mainView无法返回，强制退出");
					plus.runtime.quit();
				}, 5000)
			} else {
				plus.storage.clear();
            	plus.runtime.quit();
			}
		})
	}, false);
};











// 按键处理
document.addEventListener('keydown', e => {
    console.log("mainView: 按键");

    var keyName = e.key;
    if( keyName === "Enter" ) {
        let url = window.location.href;
        let match = url.match(/play\/\d+-\d+-\d+\.html$/i) || // meiju22, wfrmyy, 是否为播放视频页面
                    url.match(/player\/\d+\.html/i) // hanjutv
        let className = e.target.className || "";
        let valid = className.includes("dplayer-video-current") || // 全屏，暂停等操作
                    className.includes("dplayer-icon");
        if( match && !valid ) {
            e.preventDefault();
        }
        // if( document.querySelector('.myfocus') ) document.querySelector('.myfocus').click();
    } else if( keyName === "ArrowLeft" || keyName === "ArrowUp" || keyName === "ArrowRight" || keyName === "ArrowDown" ) {
        if( e.target.tagName.toLowerCase() === "body" ) return;
        if( document.querySelector('.myfocus') ) changeClass.remove(document.querySelector('.myfocus'), "myfocus");
        changeClass.add(e.target, "myfocus");
        // e.preventDefault();
    }
});









// 清除广告浮窗
function clearADs() {
	console.log("开始清除广告");
	if( window.location.href.includes('wfrmyy') ) {
		
	} else if( window.location.href.includes('meiju22') ) {
		meiju22(25);
	} else if( window.location.href.includes('hanjutv') ) {
		hanjutv(25);
		meiju22(25);
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
		}, 300)
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
		}, 300)
	}
}

clearADs();





// 视频全屏
function fullScreen(count) { // 视频全屏
	if( count < 0 ) return;
	let fullScreenBtn = document.querySelector("[data-balloon='全屏']");
	if( fullScreenBtn ) {
		fullScreenBtn.click();
		return;
	}

	let player = document.querySelector('.fed-play-player') ||  // wfrmyy
				 document.querySelector('.playBox') ||	// hanjutv
				 document.querySelector('#cms_player') || // meiju22/new
				 document.querySelector('#cciframe') || //  meiju22
				 document.querySelector('#dplayer');  	// xinqixi
	if( player ) {
		player.style="position: fixed; top: 0; left: 0; height: 100%; width: 100%; z-index: 100020; margin: 0; padding: 0;"
	} else {
		setTimeout( () => {
			fullScreen(count - 1);
		}, 300)
	}
}

console.log("开始全屏");
fullScreen(40);











var changeClass = {
	add: function(ele, className) {
		ele.setAttribute('class', ele.className + ' ' + className);
	}, 

	remove: function(ele, className) {
		ele.setAttribute('class', ele.className.replace(className, ''));
	}
}