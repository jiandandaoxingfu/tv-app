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
	
				},
				play: {
	
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
	
				},
				play: {
	
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
	
				},
				play: {
	
				}
			}
		}
	}

	hanjutv(data) {
		let root_url = "https://www.hanjutv.com";
		let list = data.replace(/(\r|\n|\r\n)/g, ' ').match(/<ul class="m-list.*?>(.*?)<\/ul>/)[1]
			.match(/<li class="m-item">(.*?)<\/li>/g);
		data = [];
		list.forEach( li => {
			let image_src = li.match(/data-original="(.*?)"/)[1];
			let video_src = root_url + li.match(/href="(.*?)"/)[1];
			let title = li.match(/title="(.*?)"/)[1];
			let description = li.match(/<p class="des">(.*?)<\/p>/)[1];
			data.push({
				image_src: image_src, 
				video_src: video_src, 
				title: title, 
				description: description
			});
		})
		return data;
	}

	meiju22(data) {
		let root_url = "https://www.meiju22.com";
		let list = data.replace(/(\r|\n|\r\n)/g, ' ').match( /<ul class="thumbnail-group clearfix">(.*?)<\/ul>/)[1]
			.match(/<li>(.*?)<\/li>/g);
		data = [];
		list.forEach( li => {
			let image_src = li.match(/data-original="(.*?)"/)[1];
			let video_src = root_url + li.match(/href="(.*?)"/)[1];
			let title = li.match(/title="(.*?)"/)[1];
			let description = li.match(/<a href=".*?">(.*?)<\/a>/)[1];
			data.push({
				image_src: image_src, 
				video_src: video_src, 
				title: title, 
				description: description
			});
		})
		return data;
	}

	wfrmyy(data) {
		let root_url = "http://www.wfrmyy.com";
		let list = data.replace(/(\r|\n|\r\n)/g, ' ').match( /<ul class="fed-list-info fed-part-rows">(.*?)<\/ul>/)[1]
			.match(/<li class="fed-list-item.*?">(.*?)<\/li>/g);
		data = [];
		list.forEach( li => {
			let image_src = li.match(/data-original="(.*?)"/)[1];
			let video_src = root_url + li.match(/href="(.*?)"/)[1];
			let title = li.match(/<a class="fed-list-title.*?>(.*?)<\/a>/)[1];
			let description = li.match(/<span class="fed-list-desc.*?>(.*?)<\/span>/)[1];
			data.push({
				image_src: image_src, 
				video_src: video_src, 
				title: title, 
				description: description
			});
		})
		return data;
	}

	// hanjutv_deital(data) {
	// 	data = data.replace(/(\r|\n|\r\n)/g, ' ');
 //        let videoInfo = data.match(/<div class="intro clearfix">(.*?)<\/div>/)[1];
 //        let introduce = data.match(/bdDesc".*?"(.*?)"/)[1];
 //        videoInfo = videoInfo.split(/\/p>/).slice(1, 9).map(a => a.match(/\/label>(.*?)</)[1]);
 //        videoInfo = {
 //            date: videoInfo[0],
 //            director: videoInfo[2],
 //            role: videoInfo[3],
 //            firstPlay: videoInfo[5],
 //            update_time: videoInfo[6],
 //            series: videoInfo[7],
 //            introduce: introduce,
 //            cover_url: document.getElementById(this.props.id).querySelector('img').src,
 //            video_name: document.getElementById(this.props.id).querySelector('.ant-card-meta-title').innerText,
 //        }
 //        let playInfo = {series: ["返回"], url: []};
 //        (data.match(/href="\/player.{1,30}">\d+(-\d+|)/g) || [])
 //            .forEach(d => {
 //                playInfo.url.push( d.match(/href="(.*?)"/)[1] );
 //                playInfo.series.push( d.split('>')[1] );
 //            })
	// }
}

var format = new Format();
// console.log(format.regex)
// export default format;