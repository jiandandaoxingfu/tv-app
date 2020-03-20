const axios = require('axios');

var spider = {
	get_movie_list: function(url) {
		return axios.get(url);
	},

	hanjutv_format: function(data) {
		let root_url = "https://www.hanjutv.com";
		let list = data.replace(/(\r|\n|\r\n)/g, ' ').match( /<ul class="m-list.*?>(.*?)<\/ul>/)[1]
			.match(/<li class="m-item">(.*?)<\/li>/g);
		data = [];
		list.forEach( li => {
			let image_src = li.match(/data-original="(.*?)"/)[1];
			let video_src = root_url + li.match(/href="(.*?)"/)[1];
			let title = li.match(/title="(.*?)"/)[1];
			let description = li.match(/<p class="des">(.*?)<\/p>/)[1];
			data.push({image_src: image_src, video_src: video_src, title: title, description: description});
		})
		return data;
	},

	tiantian_format: function(data) {
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
}

spider.get_movie_list('https://www.hanjutv.com/v_all/list-catid-7-year-2016.html').then( res => {
	// console.log([res.data.length, res.data])
	console.log(res.data)
})
