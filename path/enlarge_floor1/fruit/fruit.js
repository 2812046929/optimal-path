
const drawLayout = require('../../../utils/drawLayout.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { name: '热带水果类', 'fruitPic': 'http://imgservice3.suning.cn/uimg1/b2c/image/c4yHI6gngLV9i2Tj0fSv6w.jpg_400w_400h_4e' },
      { name: '浆果类', 'fruitPic': 'http://imgservice1.suning.cn/uimg1/b2c/image/1JAybtGT1WYSTacDUfB19g.jpg_400w_400h_4e' },
      { name: '桃李类', 'fruitPic': 'http://imgservice3.suning.cn/uimg1/b2c/image/SelZIlPf0yCgUtVftrDVCg.jpg_400w_400h_4e' },
      { name: '苹果类', 'fruitPic': 'http://imgservice5.suning.cn/uimg1/b2c/image/pxUilPY9Avvn7hk3oojsEw.jpg_400w_400h_4e' },
      { name: '柑橘类', 'fruitPic': 'http://imgservice2.suning.cn/uimg1/b2c/image/gcGJ4m1ImWQ80ggKOiEtVg.jpg_400w_400h_4e' },
      { name: '瓜类', 'fruitPic': 'http://imgservice2.suning.cn/uimg1/b2c/image/5jO_1N1OiqX8Nqu8f4mstg.jpg_400w_400h_4e' },
      { name: '梨类', 'fruitPic': 'http://imgservice4.suning.cn/uimg1/b2c/image/rDHdBNBLWXkkkN3MYLkvaQ.jpg_400w_400h_4e' }],
    areas: [{ name: '饮用水', x: 0, y: 0, w: 100, h: 100, eng: 'water' },
    { name: '纸品', x: 150, y: 0, w: 450, h: 100, eng: 'paper' },
    { name: '粮油', x: 650, y: 0, w: 100, h: 100, eng: 'grain' },
    { name: '美妆个护', x: 0, y: 150, w: 100, h: 1000, eng: 'beauty' },
    { name: '海鲜', x: 650, y: 150, w: 100, h: 600, eng: 'seafood' },
    { name: '休闲食品', x: 650, y: 800, w: 100, h: 500, eng: 'snack' },
    { name: '水果', x: 150, y: 150, w: 450, h: 1000, eng: 'fruit' },
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

    drawLayout(ctx, this, canvas.width,canvas.height)
  }

})