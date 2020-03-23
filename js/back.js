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