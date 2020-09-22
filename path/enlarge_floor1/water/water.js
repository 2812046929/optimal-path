
const drawLayout = require('../../../utils/drawLayout.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ name: '果汁/果蔬汁', 'waterPic': 'http://imgservice2.suning.cn/uimg1/b2c/image/5-NgXLVPIHS5peeb_8tyQQ.jpg_400w_400h_4e' },
{ name: '植物蛋白饮料', 'waterPic': 'http://imgservice3.suning.cn/uimg1/b2c/image/FzmH5YvPHLS3UWBQ3w5AdQ.jpg_400w_400h_4e' },
{ name: '含乳饮料', 'waterPic': 'http://imgservice2.suning.cn/uimg1/b2c/image/NHAA2LQC6Hn4FI4agZxntA.jpg_400w_400h_4e' },
{ name: '茶饮料', 'waterPic': 'http://imgservice4.suning.cn/uimg1/b2c/image/KmSzaa023yXT6tQwxVLJfg.jpg_400w_400h_4e' },
{ name: '咖啡饮料', 'waterPic': 'http://imgservice4.suning.cn/uimg1/b2c/image/hYzc1suqzoUxoER-4GxKfg.jpg_400w_400h_4e' },
{ name: '碳酸饮料', 'waterPic': 'http://imgservice5.suning.cn/uimg1/b2c/image/AnH5RDXCapbaJhc-W0KZiw.jpg_400w_400h_4e' },
{ name: '功能饮料', 'waterPic': 'http://imgservice1.suning.cn/uimg1/b2c/image/Hmg0MIc5Q8_bCMaS-Pue4A.jpg_400w_400h_4e' }

    ],
    areas: [
      { name: '肉类', x: 10, y: 0, w: 740, h: 100, eng: 'meat' },
      { name: '纸品', x: 650, y: 150, w: 100, h: 1034, eng: 'paper' },
      { name: '美妆个护', x: 10, y: 1234, w: 590, h: 100, eng: 'beauty' },
      { name: '水果', x: 650, y: 1234, w: 100, h: 100, eng: 'fruit' },
      { name: '饮用水', x: 10, y: 150, w: 590, h: 1034, eng: 'water' }
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

    //19
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(0, canvas.height)
    ctx.stroke()

    drawLayout(ctx, this, canvas.width, canvas.height)
  }
})