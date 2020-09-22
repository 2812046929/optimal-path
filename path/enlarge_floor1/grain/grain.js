
const drawLayout = require('../../../utils/drawLayout.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
{ name: '食用油', 'pic': 'https://imgservice5.suning.cn/uimg1/b2c/image/418SALXosGt3oBJ9eysbMA.jpg_400w_400h_4e' },
{ name: '大米', 'pic': 'https://imgservice5.suning.cn/uimg1/b2c/image/Ni5RdzUTQTFOXj6QoCWahQ.jpg_400w_400h_4e' },
{ name: '杂粮', 'pic': 'https://imgservice1.suning.cn/uimg1/b2c/image/1ERpugpHCLQ_CHi7n_M5ew.jpg_400w_400h_4e' }],
    areas: [{ name: '肉类', x: 0, y: 0, w: 350, h: 100, eng: 'meat' },
      { name: '宠物', x: 400, y: 0, w: 350, h: 100, eng: 'pet' },
      { name: '纸品', x: 0, y: 150, w: 100, h: 1034, eng: 'paper' },
      { name: '调料', x: 650, y: 150, w: 100, h: 1034, eng: 'seasoning' },
    { name: '水果', x: 0, y: 1234, w: 100, h: 100, eng: 'fruit' },
      { name: '海鲜', x: 150, y: 1234, w: 600, h: 100, eng: 'seafood' },
      { name: '粮油', x: 150, y: 150, w: 450, h: 1034, eng: 'grain' }
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