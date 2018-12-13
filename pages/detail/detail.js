// pages/detail/detail.js
const utils = require('../../utils/util.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		idex: '',
		idx: '',
		details: {}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var sparator = options.idx.indexOf(',');
		var idex = options.idx.slice(0, sparator);
		var idx = options.idx.slice(sparator + 1);
		this.setData({
			idex: idex,
			idx: idx
		});
		var url = 'http://localhost:8080/data/tally_list_data.json';
		utils.http_get(url, this.getDetail);
	},

	getDetail: function (res){
		var lists = res.lists[parseInt(this.data.idex)];
		var details = lists.list[parseInt(this.data.idx)];
		this.setData({
			details: details
		});
	}
})