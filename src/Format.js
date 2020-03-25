class Format {
	constructor() {
		this.regex = {
			hanjutv: {
				root_url: 'https://www.hanjutv.com',
				list: {
					ul: /<ul class="m-list.*?>(.*?)<\/ul>/,
					li: /<li class="m-item">(.*?)<\/li>/g,
					image_src: /data-original="(.*?)"/,
					video_src: /href="(.*?)"/,
					title: /title="(.*?)"/,
					description: /<p class="des">(.*?)<\/p>/,
				},
				detail: {
					date: /年代.*?>(.*?)</,
					introduce: /简介.*?>(.*?)</,
					director: /导演.*?>(.*?)</,
					role: /主演.*?>(.*?)</,
					series: /集数.*?>(.*?)</,
					firstPlay: /首播.*?>(.*?)</,
					updateTime: /更新.*?>(.*?)</,
					playList: /<ul class="juji-list clearfix.*?>(.*?)<\/ul>/,
				},
				play: {
					rootUrl: 'http:',
					playUrl: /<iframe id="playPath.*?src="(.*?)"/,
				}
			},
	
			meiju22: {
				root_url: 'https://www.meiju22.com',
				list: {
					ul: /<ul class="thumbnail-group clearfix">(.*?)<\/ul>/,
					li: /<li>(.*?)<\/li>/g,
					image_src: /data-original="(.*?)"/,
					video_src: /href="(.*?)"/,
					title: /title="(.*?)"/,
					description: /<a href=".*?">(.*?)<\/a>/,
				},
				detail: {
					date: /发行.*?年份.*?><a.*?>(.*?)<\/a>.*?<\/p/,
					introduce: /剧情.*label>(.*?)<\/p/,
					director: /导演.*?>(.*?)<\/p/,
					role: /主演.*?>(.*?)<\/li/,
					series: /共(\d+)集/,
					firstPlay: /上映时间.*?<span.*?>(.*?)<\/span>/,
					updateTime: /更新时间.*?>(.*?)</,
					playList: /<ul class="detail-play-list.*?>(.*?)<\/ul>/,
				},
				play: {
					rootUrl: 'https://www.meiju22.com/ckplayerx/m3u8.php?url=',
					playUrl: /cms_player = \{"yun":true,"url":"(.*?)"/,
				}
			},
	
			wfrmyy: {
				root_url: 'http://www.wfrmyy.com',
				list: {
					ul: /<ul class="fed-list-info fed-part-rows">(.*?)<\/ul>/,
					li: /<li class="fed-list-item.*?">(.*?)<\/li>/g,
					image_src: /data-original="(.*?)"/,
					video_src: /href="(.*?)"/,
					title: /<a class="fed-list-title.*?>(.*?)<\/a>/,
					description: /<span class="fed-list-desc.*?>(.*?)<\/span>/,
				},
				detail: {
					date: /年份：.*?>(.*?)<\/li>/,
					introduce: /简介.*?>(.*?)</,
					director: /导演：.*?>(.*?)<\/li>/,
					role: /主演：.*?>(.*?)<\/li>/,
					series: /集数.*?>(.*?)</,
					firstPlay: /首播.*?>(.*?)</,
					updateTime: /更新：.*?>(.*?)<\/li>/,
					playList: /播放集数.*?<ul class="fed-part-rows">(.*?)<\/ul>/,
				},
				play: {
					rootUrl: 'http://www.wfrmyy.com/template/vfed/asset/fed/player.php?id=peer&url=',
					playUrl: /<iframe.*?fed-play-iframe.*src=".*?url=(.*?)">/,
				}
			}
		}
	}

	getMovieList(data, domin) {
		let regex = this.regex[domin].list;
		let root_url = this.regex[domin].root_url;
		let list = data.replace(/(\r|\n|\r\n)/g, ' ').match(regex.ul)[1]
			.match(regex.li);
		data = [];
		list.forEach( li => {
			let image_src = li.match(regex.image_src)[1];
			let video_src = root_url + li.match(regex.video_src)[1];
			let title = li.match(regex.title)[1];
			let description = li.match(regex.description)[1];
			data.push({
				image_src: image_src, 
				video_src: video_src, 
				title: title, 
				description: description
			});
		})
		return data;
	}

	getMovieDetail(data, domin) {
		data = data.replace(/(\r|\n|\r\n)/g, ' ');
		let regex = this.regex[domin].detail;
		let root_url = this.regex[domin].root_url;
        let videoInfo = {};
        Object.keys(regex).forEach( key => {
        	let match = data.match(regex[key]);
        	videoInfo[key] = match ? match[1].replace(/(<.*?>|&nbsp;)/g, ' ') : '';
        })

        let playInfo = {series: ["返回"], url: []};
        let playList = data.match(regex.playList) || ['', ''];
        ( playList[1].match(/<a .*?>.*?<\/a>/g) || [])
            .forEach(d => {
                playInfo.url.push( root_url + d.match(/href="(.*?)"/)[1] );
                playInfo.series.push( d.match(/<a .*?>(.*?)<\/a/)[1].replace(/([\u4E00-\u9FA5]|HD|BD)/g, '') );
            })
        return [videoInfo, playInfo];
	}

	getMoviePlayUrl(data, domin) {
		data = data.replace(/(\r|\n|\r\n|\\)/g, '');
		let regex = this.regex[domin].play;
		let playUrl = regex.rootUrl + data.match( regex.playUrl )[1];
		return playUrl;
	}
}

var format = new Format();
export default format;