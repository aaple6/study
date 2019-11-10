// pages/order/order.js
Page({
  data: {
    no: null, // 运单号
    company: ['sf', 'sto', 'yt', 'yd', 'tt'], 
    com: ['顺丰', '申通', '圆通', '韵达', '天天'],
    index: 0,
    expressInfo: null, 
  },
  search: function() {
    wx.showLoading({
      title: '加载中',
    })
    var key = ''
    wx.request({
      url: 'http://v.juhe.cn/exp/index?key=' + key + '&com=' + this.data.company[this.data.index] + '&no=' + this.data.no,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        console.log(res.data);
        this.setData({
          expressInfo: res.data
        })
        wx.hideLoading()
      }
    })
  },
  // 获取运单号的值
  noInput: function(e) {
    this.setData({
      no: e.detail.value
    })
  },
  // 获取快递公司的索引
  companyInput: function(e) {
    this.setData({
      index: e.detail.value
    })
  }
})