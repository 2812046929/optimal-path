
const drawLayout = require('../../../utils/drawLayout.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { name: '虾类', 'seafoodPic': 'https://imgservice4.suning.cn/uimg1/b2c/image/4SVWlOWJXUviLiwowULKMA==.jpg_400w_400h_4e' },
{ name: '鱼类', 'seafoodPic': 'https://imgservice1.suning.cn/uimg1/b2c/image/-JVUcWJPsLvgV5M9yaZjxg.jpg_400w_400h_4e' } ],
    areas: [
    { name: '纸品', x: 0, y: 0, w: 100, h: 100, eng: 'paper' },
      { name: '粮油', x: 150, y: 0, w: 450, h: 100, eng: 'grain' },
      { name: '调料', x: 650, y: 0, w: 100, h: 100, eng: 'seasoning' },
    { name: '水果', x: 0, y: 150, w: 100, h: 1184, eng: 'fruit' },
    { name: '休闲食品', x: 150, y: 1234, w: 600, h: 100, eng: 'snack' },
    { name: '海鲜', x: 150, y: 150, w: 600, h: 1034, eng: 'seafood' },
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
    ctx.moveTo( canvas.width,0)
    ctx.lineTo(canvas.width, canvas.height)
    ctx.stroke()

    drawLayout(ctx, this, canvas.width, canvas.height)
  }

})