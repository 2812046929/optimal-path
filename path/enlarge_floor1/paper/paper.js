
const drawLayout = require('../../../utils/drawLayout.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { name: '抽纸', 'paperPic': 'https://imgservice2.suning.cn/uimg1/b2c/image/SPH-H1XkVYv6Y3iDYO2Xew.jpg_400w_400h_4e' },
{ name: '卷纸', 'paperPic': 'https://imgservice3.suning.cn/uimg1/b2c/image/m16gIhDNNUl_ueDB9muG9Q.jpg_400w_400h_4e' }],
    areas: [
      { name: '肉类', x: 0, y: 0, w: 751, h: 100, eng: 'meat' },
      { name: '饮用水', x: 0, y: 150, w: 100, h: 1034, eng: 'water' },
      { name: '粮油', x: 650, y: 150, w: 100, h: 1034, eng: 'grain' },
      { name: '美妆个护', x: 0, y: 1234, w: 100, h: 100, eng: 'beauty' },
      { name: '水果', x: 150, y: 1234, w: 450, h: 100, eng: 'fruit' },
      { name: '海鲜', x: 650, y: 1234, w: 100, h: 100, eng: 'seafood' },
      { name: '纸品', x: 150, y: 150, w: 450, h: 1034, eng: 'paper' }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.createSelectorQuery()
      .select('#canvas')
      .fields({
        node: true
      })
      .exec(this.init.bind(this))

  },
  init(res) {
    const canvas = res[0].node
    const ctx = canvas.getContext('2d')

    const dpr = wx.getSystemInfoSync().pixelRatio
    canvas.width = canvas._width * dpr
    canvas.height = canvas._height * dpr


    drawLayout(ctx, this, canvas.width, canvas.height)
  }

})