
const drawLayout = require('../../../utils/drawLayout.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {  name: '冰鲜禽肉', 'meatPic': 'http: //imgservice3.suning.cn/uimg1/b2c/image/Rar4APc0Wvs6DfwK43hIwg.jpg_400w_400h_4e' },
{ name: '速冻禽肉', 'meatPic': 'http: //imgservice1.suning.cn/uimg1/b2c/image/c1IwO9LMknmAbJ2imt06RA.jpg_400w_400h_4e' },
{ name: '冰鲜牛肉', 'meatPic': 'http: //imgservice4.suning.cn/uimg1/b2c/image/_WnEOJT3MdRN3Dq9D56Fjw.jpg_400w_400h_4e' },
{ name: '速冻牛肉', 'meatPic': 'http: //imgservice3.suning.cn/uimg1/b2c/image/q2DbmPBpRdA0viqy4wMsCA.jpg_400w_400h_4e' } ],
    areas: [
    { name: '宠物', x: 650, y: 10, w: 100, h: 1174, eng: 'pet' },
    { name: '饮用水', x: 10, y: 1234, w: 200, h: 100, eng: 'water' },
    { name: '纸品', x: 260, y: 1234, w: 200, h: 100, eng: 'paper' },
    { name: '粮油', x: 510, y: 1234, w: 240, h: 100, eng: 'grain' },
      { name: '肉类', x: 10, y:10, w: 590, h: 1174, eng: 'meat' }
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
    ctx.moveTo(canvas.width,0)
    ctx.lineTo(0,0)
    ctx.lineTo(0,canvas.height)
    ctx.stroke()
    drawLayout(ctx, this, canvas.width, canvas.height)
  }

})