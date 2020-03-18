class Format {
	hanjutv = function(data) {
		let root_url = "https://www.hanjutv.com";
		let list = data.replace(/(\r|\n|\r\n)/g, ' ').match( /<ul class="m-list".*?>(.*?)<\/ul>/)[1]
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

	meiju22 = function(data) {
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
}

var format = new Format();
export default format;