console.log("开始全屏");

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

fullScreen(40);

