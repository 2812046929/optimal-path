
const drawLayout = require('../../../utils/drawLayout.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        name: '巧克力',
        'snacksPic': 'http://imgservice4.suning.cn/uimg1/b2c/image/pQl_tCZ_UOnSbx_v35Hx2Q.jpg_400w_400h_4e'
      },
      {
        name: '糖果',
        'snacksPic': 'http://imgservice1.suning.cn/uimg1/b2c/image/yQmCAOkbb5niD3Frzf4ePw.jpg_400w_400h_4e'
      },
      {
        name: '口香糖\xa0',
        'snacksPic': 'http://imgservice1.suning.cn/uimg1/b2c/image/yQmCAOkbb5niD3Frzf4ePw.jpg_400w_400h_4e'
      },
      {
        name: '果冻/布丁\xa0',
        'snacksPic': 'http://imgservice1.suning.cn/uimg1/b2c/image/1lzLpyutriWg4pRYSFGyPA.jpg_400w_400h_4e'
      },
      {
        name: '龟苓膏',
        'snacksPic': 'http://imgservice1.suning.cn/uimg1/b2c/image/1lzLpyutriWg4pRYSFGyPA.jpg_400w_400h_4e'
      },
      {
        name: '海味即食',
        'snacksPic': 'http://imgservice4.suning.cn/uimg1/b2c/image/Wbpqm5IgfyRzvKCVJp26mg.jpg_400w_400h_4e'
      },
      {
        name: '豆干',
        'snacksPic': 'http://imgservice4.suning.cn/uimg1/b2c/image/Wbpqm5IgfyRzvKCVJp26mg.jpg_400w_400h_4e'
      },
      {
        name: '薯片',
        'snacksPic': 'http://imgservice3.suning.cn/uimg1/b2c/image/cRDQqCe5_yQF5qKNwo3IHQ.jpg_400w_400h_4e'
      },
      {
        name: '膨化食品',
        'snacksPic': 'http://imgservice3.suning.cn/uimg1/b2c/image/cRDQqCe5_yQF5qKNwo3IHQ.jpg_400w_400h_4e'
      },
      {
        name: '肉松/肉脯',
        'snacksPic': 'http://imgservice4.suning.cn/uimg1/b2c/image/jNYdsMKw-6JPN5mNpUeO9g.jpg_400w_400h_4e'
      },
      {
        name: '卤味小食',
        'snacksPic': 'http://imgservice4.suning.cn/uimg1/b2c/image/jNYdsMKw-6JPN5mNpUeO9g.jpg_400w_400h_4e'
      },
      {
        name: '饼干',
        'snacksPic': 'http://imgservice2.suning.cn/uimg1/b2c/image/i4WFrAjBZChI-s0edaZnlw.jpg_400w_400h_4e'
      },
      {
        name: '糕点/点心',
        'snacksPic': 'http://imgservice2.suning.cn/uimg1/b2c/image/i4WFrAjBZChI-s0edaZnlw.jpg_400w_400h_4e'
      },
      {
        name: '坚果',
    'snacksPic':'http://imgservice2.suning.cn/uimg1/b2c/atmosphere/xQiKIuce9ZdHjjvB_Oxf0Q.jpg_400w_400h_4e'
      },
      {
        name: '蜜饯/果脯',
        'snacksPic': 'http://imgservice2.suning.cn/uimg1/b2c/atmosphere/xQiKIuce9ZdHjjvB_Oxf0Q.jpg_400w_400h_4e'
      },
      {
        name: '月饼',
        'snacksPic': 'http://imgservice5.suning.cn/uimg1/b2c/image/0jLqOuPW8ZR6M5-e_vuxQw.jpg_400w_400h_4e'
      },
      {
        name: '食品礼盒',
        'snacksPic': 'http://imgservice5.suning.cn/uimg1/b2c/image/0jLqOuPW8ZR6M5-e_vuxQw.jpg_400w_400h_4e'
      },
      {
        name: '奶酪干/奶片',
        'snacksPic': 'http://imgservice4.suning.cn/uimg1/b2c/atmosphere/HkmTXUnH2XRc0HxYLWakBw.jpg_400w_400h_4e'
      },
      {
        name: '喜饼/喜蛋礼盒',
        'snacksPic': 'http://imgservice4.suning.cn/uimg1/b2c/atmosphere/HkmTXUnH2XRc0HxYLWakBw.jpg_400w_400h_4e'
      }
    ],
    areas:[
      { name: '水果',x: 0, y:0, w:100 ,h:700, eng:'fruit'},
      { name: '海鲜', x:140 , y:0 , w:600 , h:100, eng:'seafood'},
      { name: '休闲食品', x: 140, y: 150, w: 600, h: 1150, eng:'snack'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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
    ctx.lineTo(canvas.width, canvas.height)
    ctx.lineTo(0,canvas.height)
    ctx.stroke()

  drawLayout(ctx,this,canvas.width, canvas.height)
  }
})