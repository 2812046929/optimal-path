
const drawLayout = require('../../../utils/drawLayout.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { name: '出行装备', 'snacksPic': 'http://imgservice5.suning.cn/uimg1/b2c/image/sYuyznhBaSNTEzxpkxzEgA.jpg_400w_400h_4e' },
{ name: '宠物保健', 'snacksPic': 'http://imgservice5.suning.cn/uimg1/b2c/image/RMn2jjrJrh_5PZJQAyg3eQ.jpg_400w_400h_4e' },
{ name: '宠物日用', 'snacksPic': 'http://imgservice5.suning.cn/uimg1/b2c/image/pNiRrnveS2uC8Jc1ik6xDA.jpg_400w_400h_4e' },
{ name: '宠物玩具', 'snacksPic': 'http://imgservice5.suning.cn/uimg1/b2c/image/Gg-L-YIcsghwk0y1v0gDGQ.jpg_400w_400h_4e' },
{ name: '宠物洗护美容', 'snacksPic': 'http://imgservice5.suning.cn/uimg1/b2c/image/50grfd7bUa5VIx1KbaeG2A.jpg_400w_400h_4e' },
{ name: '宠物服饰', 'snacksPic': 'http://imgservice5.suning.cn/uimg1/b2c/image/mU-7EhvqDEGaGfexiGkaMg.jpg_400w_400h_4e' }],
    areas: [
      { name: '肉类', x: 0, y: 10, w: 100, h: 1174, eng: 'meat' },
      { name: '粮油', x: 0, y: 1234, w: 400, h: 100, eng: 'grain' },
      { name: '调料', x: 500, y: 1234, w: 240, h: 100, eng: 'seasoning' },
      { name: '宠物', x: 150, y: 10, w: 590, h: 1174, eng: 'pet' }
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


   ctx.beginPath()
   ctx.moveTo(0,0)
   ctx.lineTo(canvas.width,0)
   ctx.lineTo(canvas.width,canvas.height)
   ctx.stroke()

    drawLayout(ctx, this, canvas.width, canvas.height)
  }

})