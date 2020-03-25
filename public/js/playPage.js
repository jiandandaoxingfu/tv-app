function wfrmyy(count) {
	if( count < 0 ) return;
	let player = document.querySelector('.fed-play-player');
	if( player ) {
		document.body.innerHTML = "";
		document.body.appendChild( player );
		player.style="position: absolute;top: 0; height: 100%; width: 100%; z-index: 100020;"
	} else {
		setTimeout( () => {
			wfrmyy(count - 1);
		}, 300)
	}
}

if( window.location.href.includes('wfrmyy') ) {
	wfrmyy(20);
}