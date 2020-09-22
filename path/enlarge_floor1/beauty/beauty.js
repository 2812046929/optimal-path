
const drawLayout = require('../../../utils/drawLayout.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
{ name: '美容护肤', 'categoryPic': 'https://imgservice2.suning.cn/uimg1/b2c/image/j_FX7OYTw7cWg3pahXrPlA.jpg_400w_400h_4e' },
{ name: '个人护理', 'categoryPic': 'https://imgservice3.suning.cn/uimg1/b2c/image/-gZje_jV0wbs8YKL75C17A.jpg_400w_400h_4e' },
{ name: '彩妆香氛', 'categoryPic': 'https://imgservice5.suning.cn/uimg1/b2c/image/QiimP34AzAZckU1yJsXs9g.jpg_400w_400h_4e' }],
areas:[{name:'饮用水', x:10, y:0 ,w:600 ,h:100, eng:'water' },
  { name: '纸品', x:650, y:0 , w:100 , h:100, eng:'paper' },
  { name: '水果', x:650, y:150 , w: 100, h:1000 ,eng:'fruit' },
  { name: '入口', x: 0, y: 1234, w: 100, h: 200, eng:'entrance' },
  { name: '美妆个护', x:10, y:150 , w:600 , h:1000 ,eng:'beauty' }
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
    ctx.moveTo(0, 0)
    ctx.lineTo(0, canvas.height)
    ctx.stroke()

    drawLayout(ctx, this,canvas.width,canvas.height)
  }

})