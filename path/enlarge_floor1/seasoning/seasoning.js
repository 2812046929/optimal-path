
const drawLayout = require('../../../utils/drawLayout.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { name: '烘焙辅料', 'seasoningPic': 'https://imgservice.suning.cn/uimg1/b2c/image/X6xGAkpID33FjTRUv90QsA.jpg_220w_220h_4e' },
{ name: '酱油', 'seasoningPic': 'https://imgservice.suning.cn/uimg1/b2c/image/JpP10PBA-sqnZB66FcX2cg.jpg_220w_220h_4e' },
{ name: '食盐', 'seasoningPic': 'https://imgservice1.suning.cn/uimg1/b2c/image/Om9iMSGnIaGad5IEeZ7nQQ==.jpg_400w_400h_4e' },
{ name: '食醋', 'seasoningPic': 'http://imgservice2.suning.cn/uimg1/b2c/image/wdDoJ3PMHNISwBb2Pc8zCg.jpg_400w_400h_4e' },
{ name: '食糖', 'seasoningPic': 'https://imgservice4.suning.cn/uimg1/b2c/atmosphere/HJFPBN6J4HUQlT9_aMQIRg.jpg_400w_400h_4e' },
{ name: '鸡精/味精', 'seasoningPic': 'http://imgservice1.suning.cn/uimg1/b2c/image/M1nArHXjeAatmzCOLBcTtA.jpg_400w_400h_4e' },
{ name: '火锅调料', 'seasoningPic': 'http://imgservice5.suning.cn/uimg1/b2c/image/Ln30VEPiHPSHZ0ZsfErNDw.jpg_400w_400h_4e' },
{ name: '汤料', 'seasoningPic': 'https://imgservice1.suning.cn/uimg1/b2c/image/O2a4Dqo04hLBViQL3OYzCg==.jpg_400w_400h_4e' },
{ name: '调味品', 'seasoningPic': 'https://imgservice2.suning.cn/uimg1/b2c/image/f8rfLwb2gWSFfhNKhiXrmw.jpg_400w_400h_4e' },
{ name: '酱菜', 'seasoningPic': 'https://imgservice1.suning.cn/uimg1/b2c/image/Xl6wuG6beb6OoBnDbNoRDA.jpg_400w_400h_4e' },
{ name: '料酒/黄酒', 'seasoningPic': 'https://imgservice4.suning.cn/uimg1/b2c/image/QiPIVrXk7oBW2KsjhaCBDg.jpg_400w_400h_4e' }],
    areas: [
      { name: '宠物', x: 0, y: 0, w: 740, h: 100, eng: 'pet' },
      { name: '粮油', x: 0, y: 150, w: 100, h: 1034, eng: 'grain' },
      { name: '海鲜', x: 0, y: 1234, w: 740, h: 100, eng: 'seafood' },
      { name: '调料', x: 150, y: 150, w: 590, h: 1034, eng: 'seasoning' }
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
    ctx.moveTo(canvas.width, 0)
    ctx.lineTo(canvas.width, canvas.height)
    ctx.stroke()

    drawLayout(ctx, this, canvas.width, canvas.height)
  }

})