(function () {
	var div = document.querySelector('#content > div')

	var historydata = [
		['baidu', 'http://www.baidu.com/s?wd=', '百度'],
		['google', 'https://www.google.com/#newwindow=1&safe=strict&q=', '谷歌'],
		['360', 'https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=', '360搜索'],
		['sogou', 'https://www.sogou.com/web?query=', '搜狗'],
		['bing', 'https://cn.bing.com/search?q=', '必应'],
		['yahoo', 'http://search.yahoo.com/search?p=', '雅虎'],
		['wolframalpha', 'http://www.wolframalpha.com/input/?i=', 'WolframAlpha'],
		['duckduckgo', 'https://duckduckgo.com/?q=', 'DuckDuckGo'],
		['avira', 'https://safesearch.avira.com/#web/result?q=', '小红伞搜索']
	];

	var historylist = document.querySelector('#searchItem');
	createHistory(historydata, historylist)

	var resource = [{
		header: '社交',
		recommend: ['sinaweibo.png', '新浪微博', 'https://weibo.com/'],
		content: [
			['qzone.png', 'QQ空间', 'https://qzone.qq.com/'],
			['zhihu.png', '知乎', 'https://www.zhihu.com/'],
			['douban.png', '豆瓣', 'https://www.douban.com/'],
			['instagram.png', 'Instagram','https://instagram.com/'],
			['twitter.png', 'Twitter', 'https://twitter.com/'],
			['facebook.png', 'Facebook', 'https://www.facebook.com/'],
			['fandom.png', 'Fandom', 'http://fandom.wikia.com/'],
			['tumblr.png', 'Tumblr', 'https://www.tumblr.com/']
		]
	}, {
		header: '编程',
		recommend: ['github.png', 'Github', 'https://github.com/'],
		content: [
			['stackoverflow.png', 'Stack Overflow', 'https://stackoverflow.com/'],
			['csdn.png', 'CSDN', 'https://www.csdn.net/'],
			['raspberrypi.ico', '树莓派', 'https://www.raspberrypi.org'],
			['shumeipai.png', '树莓派实验室', 'http://shumeipai.nxez.com/'],
			['appledev.png', 'Apple Developer', 'https://developer.apple.com/'],
			['cocoachina.png', 'CocoaChina', 'http://www.cocoachina.com/']
		]
	}, {
		header: '百科',
		recommend: ['baidubaike.png', '百度百科','https://baike.baidu.com/'],
		content: [
			['wikipedia.png', '维基百科', 'https://zh.wikipedia.org/'],
			['wikihow.png', 'wikihow.png', 'https://zh.wikihow.com/'],
			['googlescholar.png', 'Google学术', 'http://scholar.google.com.cn/'],
			['worldcat.png', 'WorldCat', 'https://www.worldcat.org/']
		]
	}, {
		header: '科技',
		recommend: ['guokr.png', '果壳', 'https://www.guokr.com/'],
		content: [
			['36kr.png', '36氪', 'https://36kr.com/'],
			['sspai.png', '少数派','https://sspai.com/'],
			['tuicool.ico', '推酷','https://www.tuicool.com/'],
			['ithome.png', 'IT之家','https://www.ithome.com/']
		]
	}, {
		header: '知识',
		recommend: ['imooc.png', '慕课网', 'https://www.imooc.com/'],
		content: [
			['runroob.ico', '菜鸟教程','http://www.runoob.com/'],
			['ted.png', 'TED','https://www.ted.com/'],
			['jikexueyuan.png', '极客学院', 'https://www.jikexueyuan.com/'],
			['w3school.png', 'W3school', 'http://www.w3school.com.cn/'],
			['Khan.png', 'Khan Academy', 'https://www.khanacademy.org/']
		]
	}, {
		header: '视频',
		recommend: ['bilibili.png', 'Bilibili', 'https://www.bilibili.com/'],
		content: [
			['iqiyi.png', '爱奇艺', 'http://www.iqiyi.com/'],
			['qqv.png', '腾讯视频', 'https://v.qq.com/'],
			['youku.png', '优酷', 'https://www.youku.com/'],
			['letv.png', '乐视视频', 'http://www.le.com/'],
			['youtube.png', 'YouTube', 'https://www.youtube.com/'],
			['vimeo.png', 'Vimeo', 'https://vimeo.com/']
		]
	}, {
		header: '音乐',
		recommend: ['163music.png', '网易云音乐', 'https://music.163.com/'],
		content: [
			['xiami.png', '虾米', 'https://www.xiami.com/'],
			['doubanmusic.png', '豆瓣音乐', 'https://music.douban.com/'],
			['spotify.png', 'Spotify', 'https://www.spotify.com/'],
			['soundcloud.png', 'SoundCloud', 'https://soundcloud.tumblr.com/'],
			['bandcamp.png', 'bandcamp', 'https://bandcamp.com/'],
			['pandora.png', 'Pandora', 'http://www.pandora.com/']
		]
	}, {
		header: '设计',
		recommend: ['pixiv.png', 'Pixiv', 'https://www.pixiv.net/'],
		content: [
			['behance.png', 'Behance', 'https://www.behance.net/'],
			['cargo.png', 'Cargo', 'http://cargocollective.com/'],
			['designboom.png', 'designboom', 'http://www.designboom.com/'],
			['nounproject.png', 'TheNounProject', 'https://thenounproject.com/'],
			['dribbble.png', 'Dribbble', 'https://dribbble.com/'],
			['pinterest.png', 'Pinterest', 'http://pinterest.com/'],
			['iconmonstr.png', 'iconmonstr', 'http://iconmonstr.com/']
		]
	}, {
		header: '工具',
		recommend: ['googlefanyi.ico', '谷歌翻译', 'https://translate.google.cn/'],
		content: [
			['baidufanyi.jpg', '百度翻译', 'https://fanyi.baidu.com/'],
			['qichacha.png', '企查查', 'https://www.qichacha.com'],
			['kuaidi100.ico', '快递100', 'https://www.kuaidi100.com/'],
			['vultr.ico', 'Vultr', 'https://my.vultr.com/']
		]
	}, {
		header: '购物',
		recommend: ['taobao.png', '淘宝', 'https://www.taobao.com/'],
		content: [
			['dangdang.jpg', '当当', 'http://www.dangdang.com/'],
			['jingdong.jpg', '京东', 'https://www.jd.com/'],
			['tianmao.jpg', '天猫', 'https://www.tmall.com/']
		]
	}];

	resource.map(function (val) {
		createItem(val, div, 4)
	});
	
	window.addEventListener('keydown', function () {
		var keyword = document.querySelector('#searchBox');
		if (event.keyCode === 108 || event.keyCode === 13) {
			window.open('http://www.baidu.com/s?wd=' + keyword.value);
		}
	});
	
})();
