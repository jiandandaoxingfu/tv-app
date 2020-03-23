document.addEventListener('keydown', e => {
    console.log("mainView: 按键");
    clearADs();

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