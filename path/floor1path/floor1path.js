const ga = require('../../utils/ga')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        name: "肉类",
        x: 50,
        y: 0,
        w: 400,
        h: 350,
        eng: 'meat',
        image: 'http://imgservice3.suning.cn/uimg1/b2c/image/Rar4APc0Wvs6DfwK43hIwg.jpg_400w_400h_4e'
      },
      {
        name: "宠物",
        x: 500,
        y: 0,
        w: 200,
        h: 350,
        eng: 'pet',
        image: 'http://imgservice5.suning.cn/uimg1/b2c/image/50grfd7bUa5VIx1KbaeG2A.jpg_400w_400h_4e'
      },
      {
        name: "饮用水",
        x: 50,
        y: 400,
        w: 100,
        h: 200,
        eng: 'water',
        image: 'http://imgservice3.suning.cn/uimg1/b2c/image/FzmH5YvPHLS3UWBQ3w5AdQ.jpg_400w_400h_4e'
      },
      {
        name: "纸品",
        x: 200,
        y: 400,
        w: 100,
        h: 200,
        eng: 'paper',
        image: 'https://imgservice2.suning.cn/uimg1/b2c/image/SPH-H1XkVYv6Y3iDYO2Xew.jpg_400w_400h_4e'
      },
      {
        name: "水果",
        x: 200,
        y: 650,
        w: 100,
        h: 450,
        eng: 'fruit',
        image: 'http://imgservice3.suning.cn/uimg1/b2c/image/c4yHI6gngLV9i2Tj0fSv6w.jpg_400w_400h_4e'
      },
      {
        name: "粮油",
        x: 350,
        y: 400,
        w: 200,
        h: 200,
        eng: 'grain',
        image: 'https://imgservice1.suning.cn/uimg1/b2c/image/1ERpugpHCLQ_CHi7n_M5ew.jpg_400w_400h_4e'
      },
      {
        name: "海鲜",
        x: 350,
        y: 650,
        w: 350,
        h: 200,
        eng: 'seafood',
        image: 'https://imgservice4.suning.cn/uimg1/b2c/image/4SVWlOWJXUviLiwowULKMA==.jpg_400w_400h_4e'
      },
      {
        name: "美妆个护",
        x: 50,
        y: 650,
        w: 100,
        h: 450,
        eng: 'beauty',
        image: 'https://imgservice5.suning.cn/uimg1/b2c/image/QiimP34AzAZckU1yJsXs9g.jpg_400w_400h_4e'
      },
      {
        name: "调料",
        x: 600,
        y: 400,
        w: 100,
        h: 200,
        eng: 'seasoning',
        image: 'https://imgservice2.suning.cn/uimg1/b2c/image/f8rfLwb2gWSFfhNKhiXrmw.jpg_400w_400h_4e'
      },
      {
        name: "休闲食品",
        x: 350,
        y: 900,
        w: 350,
        h: 250,
        eng: 'snack',
        image: '../../images/three.jpg'
      },
      {
        id: 1,
        name: "入口",
        x: 0,
        y: 1150,
        w: 50,
        h: 50,
        image: ''
      }

    ],
    purchased: [],
    path: [],
    turning_point: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    try {
      var value = wx.getStorageSync('purchased')
      if (value) {
        this.setData({
          purchased: JSON.parse(value)
        })
        console.log(this.data.purchased)
        var path = ga(this)
        this.setData({
          path: path
        })
      }
    } catch (e) {
      console.log(e)
    }

    var list = this.data.list
    var turning_point = []

    for (var i = 0; i < list.length; i++) {
      var item = list[i]

      //生成各区域四周的点
      var left = {},
        right = {},
        top = {},
        bottom = {}
      if (item.x <= 50) left = {
        x: 1234567890,
        y: 1234567890
      }
      else {
        left.x = item.x - 25
        left.y = item.y + item.h / 2
      }
      if (item.y <= 0) top = {
        x: 1234567890,
        y: 1234567890
      }
      else {
        top.y = item.y - 25
        top.x = item.x + item.w / 2
      }
      if ((item.y + item.h) >= 1150) bottom = {
        x: 1234567890,
        y: 1234567890
      }
      else {
        bottom.x = item.x + item.w / 2
        bottom.y = item.y + item.h + 25
      }
      if ((item.x + item.w) >= 700) right = {
        x: 1234567890,
        y: 1234567890
      }
      else {
        right.x = item.x + item.w + 25
        right.y = item.y + item.h / 2
      }
      item.left = left
      item.right = right
      item.top = top
      item.bottom = bottom
      if (left != {
          x: 1234567890,
          y: 1234567890
        })
        turning_point.push(left)
      if (right != {
          x: 1234567890,
          y: 1234567890
        })
        turning_point.push(right)
      if (top != {
          x: 1234567890,
          y: 1234567890
        })
        turning_point.push(top)
      if (bottom != {
          x: 1234567890,
          y: 1234567890
        })
        turning_point.push(bottom)
    }
    //生成辅助点
    turning_point.push({
      x: 175,
      y: 375
    }, {
      x: 325,
      y: 375
    }, {
      x: 475,
      y: 375
    }, {
      x: 575,
      y: 375
    }, {
      x: 175,
      y: 375
    }, {
      x: 175,
      y: 625
    }, {
      x: 325,
      y: 625
    }, {
      x: 575,
      y: 625
    }, {
      x: 325,
      y: 875
    }, {
      x: 175,
      y: 1125
    }, {
      x: 325,
      y: 1125
    }, {
      x: 100,
      y: 1175
    }, {
      x: 175,
      y: 1175
    }, {
      x: 250,
      y: 1175
    }, {
      x: 325,
      y: 1175
    })
    this.setData({
      list: list,
      turning_point: turning_point
    })

    var path = this.data.path
    for (var i = 0; i < path.length; i++) {
      var item = path[i]
      var left = {},
        right = {},
        top = {},
        bottom = {}
      if (item.x <= 50) left = {
        x: 1234567890,
        y: 1234567890
      }
      else {
        left.x = item.x - 25
        left.y = item.y + item.h / 2
      }
      if (item.y <= 0) top = {
        x: 1234567890,
        y: 1234567890
      }
      else {
        top.y = item.y - 25
        top.x = item.x + item.w / 2
      }
      if ((item.y + item.h) >= 1150) bottom = {
        x: 1234567890,
        y: 1234567890
      }
      else {
        bottom.x = item.x + item.w / 2
        bottom.y = item.y + item.h + 25
      }
      if ((item.x + item.w) >= 700) right = {
        x: 1234567890,
        y: 1234567890
      }
      else {
        right.x = item.x + item.w + 25
        right.y = item.y + item.h / 2
      }
      item.left = left
      item.right = right
      item.top = top
      item.bottom = bottom
    }
    this.setData({
      path: path
    })
    console.log(this.data.turning_point)
    this.checkPath()
  },


  checkPath: function() {

    // 通过 SelectorQuery 获取 Canvas 节点
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

    var list = this.data.list
    var path = this.data.path
    var turning_point = this.data.turning_point
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, 1200)
    ctx.stroke()

    function renderLoop() {


      //绘制路径
      for (var i = 0; i < path.length - 1; i++) {
        ctx.beginPath()
        ctx.lineWidth = 10
        ctx.strokeStyle = '#708090'
        ctx.lineJoin='round'
        var src = path[i]
        var des = path[i + 1]
        console.log(src)
        console.log(des)
        var src_center_x = src.x + src.w / 2
        var src_center_y = src.y + src.h / 2
        var des_center_x = des.x + des.w / 2
        var des_center_y = des.y + des.h / 2
        var delta_x = Math.abs(des_center_x - src_center_x)
        var delta_y = Math.abs(des_center_y - src_center_y)
        if (delta_y <= 20) //水平到达
        {
          console.log('水平到达')
          if (delta_x >= (src.w / 2 + des.w / 2 + 40) && delta_x <= (src.w / 2 + des.w / 2 + 50)) //相邻
          {
            ctx.moveTo(src_center_x, src_center_y)
            ctx.lineTo(des_center_x, des_center_y)
            ctx.stroke()
          }
          //不相邻
          else {
            if (src.y <= 0) //顶端选bottom
            {
              ctx.moveTo(src_center_x, src_center_y)
              ctx.lineTo(src.bottom.x, src.bottom.y)
              ctx.lineTo(des.bottom.x, des.bottom.y)
              ctx.lineTo(des_center_x, des_center_y)
              ctx.stroke()
            } else //选上端的点
            {
              ctx.moveTo(src_center_x, src_center_y)
              ctx.lineTo(src.top.x, src.top.y)
              ctx.lineTo(des.top.x, des.top.y)
              ctx.lineTo(des_center_x, des_center_y)
              ctx.stroke()
            }
          }
        } else if (delta_x <= 20) //竖直到达
        {
          console.log('竖直到达')
          if (delta_y >= (src.h / 2 + des.h / 2 + 40) && delta_y <= (src.h / 2 + des.h / 2 + 50)) //相邻
          {
            ctx.moveTo(src_center_x, src_center_y)
            ctx.lineTo(des_center_x, des_center_y)
            ctx.stroke()
          }
          //不相邻
          else {
            if (src.x <= 50) //左边选right
            {
              ctx.moveTo(src_center_x, src_center_y)
              ctx.lineTo(src.right.x, src.right.y)
              ctx.lineTo(des.right.x, des.right.y)
              ctx.lineTo(des_center_x, des_center_y)
              ctx.stroke()
            } else //选left
            {
              ctx.moveTo(src_center_x, src_center_y)
              ctx.lineTo(src.left.x, src.left.y)
              ctx.lineTo(des.left.x, des.left.y)
              ctx.lineTo(des_center_x, des_center_y)
              ctx.stroke()
            }
          }
        } else //斜线
        {
          if (des_center_x - src_center_x > 0 && des_center_y - src_center_y > 0) //目的地在右下方  
          {
            console.log('右下方')

            var x1, y1, x2, y2
            var mindistance
            var rt_distance = Math.abs(src.right.x - des.top.x) + Math.abs(src.right.y - des.top.y) //right-top
            var rl_distance = Math.abs(src.right.x - des.left.x) + Math.abs(src.right.y - des.left.y) //right-left
            var bt_distance = Math.abs(src.bottom.x - des.top.x) + Math.abs(src.bottom.y - des.top.y) //bottom-top
            var bl_distance = Math.abs(src.bottom.x - des.left.x) + Math.abs(src.bottom.y - des.left.y) //bottom-left
            mindistance = Math.min(rt_distance, rl_distance, bt_distance, bl_distance)
            if (mindistance == rt_distance) {
              x1 = src.right.x
              y1 = src.right.y
              x2 = des.top.x
              y2 = des.top.y
            } else if (mindistance == rl_distance) {
              x1 = src.right.x
              y1 = src.right.y
              x2 = des.left.x
              y2 = des.left.y
            } else if (mindistance == bt_distance) {
              x1 = src.bottom.x
              y1 = src.bottom.y
              x2 = des.top.x
              y2 = des.top.y
            } else if (mindistance == bl_distance) {
              x1 = src.bottom.x
              y1 = src.bottom.y
              x2 = des.left.x
              y2 = des.left.y
            }
            ctx.lineJoin = 'round'
            ctx.moveTo(src_center_x, src_center_y)
            ctx.lineTo(x1, y1)
            var count = 0
            while ((Math.abs(x1 - x2) > 20 || Math.abs(y1 - y2) > 20) && count <= 30) {
              count++
              console.log('进入while循环')

              if ((y1 - y2) > 0) //向上
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.x - x1) <= 20 && (Math.abs(point.y - y2) <= 20 || point.y > y2)) {
                    if (maxy > point.y) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
              if ((y1 - y2) < 0) //向下
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.x - x1) <= 20 && (Math.abs(point.y - y2) <= 20 || point.y < y2)) {
                    if (maxy < point.y) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
              if ((x1 - x2) > 0) //向左
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.y - y1) <= 20 && (Math.abs(point.x - x2) <= 20 || point.x > x2)) {
                    if (maxx > point.x) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
              if ((x1 - x2) < 0) //向右
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.y - y1) <= 20 && (Math.abs(point.x - x2) <= 20 || point.x < x2)) {
                    if (maxx < point.x) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
            }
            ctx.lineTo(x2, y2)
            ctx.lineTo(des_center_x, des_center_y)
            ctx.stroke()
          }

          if (des_center_x - src_center_x > 0 && des_center_y - src_center_y < 0) //目的地在右上方 
          {
            console.log('右上方')
            var x1, y1, x2, y2
            var mindistance
            var rb_distance = Math.abs(src.right.x - des.bottom.x) + Math.abs(src.right.y - des.bottom.y) //right-bottom
            var rl_distance = Math.abs(src.right.x - des.left.x) + Math.abs(src.right.y - des.left.y) //right-left
            var tb_distance = Math.abs(src.top.x - des.bottom.x) + Math.abs(src.top.y - des.bottom.y) //top-bottom
            var tl_distance = Math.abs(src.top.x - des.left.x) + Math.abs(src.top.y - des.left.y) //top-left
            mindistance = Math.min(rb_distance, rl_distance, tb_distance, tl_distance)
            if (mindistance == rb_distance) {
              x1 = src.right.x
              y1 = src.right.y
              x2 = des.bottom.x
              y2 = des.bottom.y
            } else if (mindistance == rl_distance) {
              x1 = src.right.x
              y1 = src.right.y
              x2 = des.left.x
              y2 = des.left.y
            } else if (mindistance == tb_distance) {
              x1 = src.top.x
              y1 = src.top.y
              x2 = des.bottom.x
              y2 = des.bottom.y
            } else if (mindistance == tl_distance) {
              x1 = src.top.x
              y1 = src.top.y
              x2 = des.left.x
              y2 = des.left.y
            }
            ctx.lineJoin = 'round'
            ctx.moveTo(src_center_x, src_center_y)
            ctx.lineTo(x1, y1)
            ctx.stroke()
            var count = 0
            console.log('x1,y1', x1, y1)
            while ((Math.abs(x1 - x2) > 20 || Math.abs(y1 - y2) > 20) && count <= 30) {
              count++
              console.log('进入while循环')

              if ((y1 - y2) > 0) //向上
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.x - x1) <= 20 && (Math.abs(point.y - y2) <= 20 || point.y > y2)) {
                    if (maxy > point.y) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
              if ((y1 - y2) < 0) //向下
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.x - x1) <= 20 && (Math.abs(point.y - y2) <= 20 || point.y < y2)) {
                    if (maxy < point.y) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
              if ((x1 - x2) > 0) //向左
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.y - y1) <= 20 && (Math.abs(point.x - x2) <= 20 || point.x > x2)) {
                    if (maxx > point.x) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
              if ((x1 - x2) < 0) //向右
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.y - y1) <= 20 && (Math.abs(point.x - x2) <= 20 || point.x < x2)) {
                    if (maxx < point.x) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
            }
            ctx.lineTo(x2, y2)
            ctx.lineTo(des_center_x, des_center_y)
            ctx.stroke()
          }

          if (des_center_x - src_center_x < 0 && des_center_y - src_center_y < 0) //目的地在左上方 
          {
            console.log('左上方')
            var x1, y1, x2, y2
            var mindistance
            var lb_distance = Math.abs(src.left.x - des.bottom.x) + Math.abs(src.left.y - des.bottom.y) //left-bottom
            var lr_distance = Math.abs(src.left.x - des.right.x) + Math.abs(src.left.y - des.right.y) //left-right
            var tb_distance = Math.abs(src.top.x - des.bottom.x) + Math.abs(src.top.y - des.bottom.y) //top-bottom
            var tr_distance = Math.abs(src.top.x - des.right.x) + Math.abs(src.top.y - des.right.y) //top-right
            mindistance = Math.min(lb_distance, lr_distance, tb_distance, tr_distance)
            if (mindistance == lb_distance) {
              x1 = src.left.x
              y1 = src.left.y
              x2 = des.bottom.x
              y2 = des.bottom.y
            } else if (mindistance == lr_distance) {
              x1 = src.left.x
              y1 = src.left.y
              x2 = des.right.x
              y2 = des.right.y
            } else if (mindistance == tb_distance) {
              x1 = src.top.x
              y1 = src.top.y
              x2 = des.bottom.x
              y2 = des.bottom.y
            } else if (mindistance == tr_distance) {
              x1 = src.top.x
              y1 = src.top.y
              x2 = des.right.x
              y2 = des.right.y
            }
            ctx.lineJoin = 'round'
            ctx.moveTo(src_center_x, src_center_y)
            ctx.lineTo(x1, y1)
            ctx.stroke()
            var count = 0
            while ((Math.abs(x1 - x2) > 20 || Math.abs(y1 - y2) > 20) && count <= 30) {
              count++
              console.log('进入while循环')

              if ((y1 - y2) > 0) //向上
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.x - x1) <= 20 && (Math.abs(point.y - y2) <= 20 || point.y > y2)) {
                    if (maxy > point.y) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
              if ((y1 - y2) < 0) //向下
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.x - x1) <= 20 && (Math.abs(point.y - y2) <= 20 || point.y < y2)) {
                    if (maxy < point.y) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
              if ((x1 - x2) > 0) //向左
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.y - y1) <= 20 && (Math.abs(point.x - x2) <= 20 || point.x > x2)) {
                    if (maxx > point.x) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
              if ((x1 - x2) < 0) //向右
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.y - y1) <= 20 && (Math.abs(point.x - x2) <= 20 || point.x < x2)) {
                    if (maxx < point.x) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
            }
            ctx.lineTo(x2, y2)
            ctx.lineTo(des_center_x, des_center_y)
            ctx.stroke()
          }

          if (des_center_x - src_center_x < 0 && des_center_y - src_center_y > 0) //目的地在左下方 
          {
            console.log('左下方')
            var x1, y1, x2, y2
            var mindistance
            var lt_distance = Math.abs(src.left.x - des.top.x) + Math.abs(src.left.y - des.top.y) //left-top
            var lr_distance = Math.abs(src.left.x - des.right.x) + Math.abs(src.left.y - des.right.y) //left-right
            var tb_distance = Math.abs(src.bottom.x - des.top.x) + Math.abs(src.bottom.y - des.top.y) //bottom-top
            var tr_distance = Math.abs(src.bottom.x - des.right.x) + Math.abs(src.bottom.y - des.right.y) //bottom-right
            mindistance = Math.min(lt_distance, lr_distance, tb_distance, tr_distance)
            if (mindistance == lt_distance) {
              x1 = src.left.x
              y1 = src.left.y
              x2 = des.top.x
              y2 = des.top.y
            } else if (mindistance == lr_distance) {
              x1 = src.left.x
              y1 = src.left.y
              x2 = des.right.x
              y2 = des.right.y
            } else if (mindistance == tb_distance) {
              x1 = src.bottom.x
              y1 = src.bottom.y
              x2 = des.top.x
              y2 = des.top.y
            } else if (mindistance == tr_distance) {
              x1 = src.bottom.x
              y1 = src.bottom.y
              x2 = des.right.x
              y2 = des.right.y
            }
            console.log('mindistance', mindistance)
            console.log('x1,y1', x1, y1)
            ctx.lineJoin = 'round'
            ctx.moveTo(src_center_x, src_center_y)
            ctx.lineTo(x1, y1)
            ctx.stroke()
            var count = 0

            while ((Math.abs(x1 - x2) > 20 || Math.abs(y1 - y2) > 20) && count <= 30) {
              count++
              console.log('进入while循环')

              if ((y1 - y2) > 0) //向上
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.x - x1) <= 20 && (Math.abs(point.y - y2) <= 20 || point.y > y2)) {
                    if (maxy > point.y) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
              if ((y1 - y2) < 0) //向下
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.x - x1) <= 20 && (Math.abs(point.y - y2) <= 20 || point.y < y2)) {
                    if (maxy < point.y) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
              if ((x1 - x2) > 0) //向左
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.y - y1) <= 20 && (Math.abs(point.x - x2) <= 20 || point.x > x2)) {
                    if (maxx > point.x) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
              if ((x1 - x2) < 0) //向右
              {
                for (var j = 0; j < turning_point.length; j++) {
                  var maxy = y1
                  var maxx = x1
                  var point = turning_point[j]

                  if (Math.abs(point.y - y1) <= 20 && (Math.abs(point.x - x2) <= 20 || point.x < x2)) {
                    if (maxx < point.x) {
                      maxy = point.y
                      maxx = point.x
                    }
                  }
                  x1 = maxx
                  y1 = maxy
                }
              }
              console.log('x1,y1', x1, y1)
              ctx.lineTo(x1, y1)
              ctx.stroke()
            }
            ctx.lineTo(x2, y2)
            ctx.lineTo(des_center_x, des_center_y)
            ctx.stroke()
          }
        }
      }

      //为要去的区域加深颜色
      for (var i = 0; i < path.length; i++) {

        var item = path[i]
        ctx.beginPath()
        ctx.fillStyle = '#F5F5F5'
        ctx.fillRect(item.x, item.y, item.w, item.h)
      }

      //标注区域的名称与中心点
      for (var i = 0; i < list.length; i++) {
        var item = list[i]
        var xx = item.x + item.w / 2
        var yy = item.y + item.h / 2

        ctx.beginPath()
        ctx.moveTo(xx, yy);
        ctx.fillStyle = 'black'; //设置填充颜色为紫色
        ctx.font = '40px "微软雅黑"'; //设置字体
        ctx.textBaseline = 'bottom'; //设置字体底线对齐绘制基线
        if (item.name == '入口') ctx.textAlign = 'left'
        else ctx.textAlign = 'center'; //设置字体对齐的方式
        ctx.fillText(item.name, xx, yy); //填充文字

        // //标记中心点
        // ctx.beginPath()
        // ctx.arc(xx, yy, 10, 0, Math.PI * 2)
        // ctx.fillStyle = 'gray'
        // ctx.fill()
      }

      //显示各个区域的边界
      for (var i = 0; i < list.length; i++) {

        var item = list[i]
        ctx.beginPath()
        ctx.lineWidth = 2
        ctx.strokeStyle = '#000000'
        ctx.rect(item.x, item.y, item.w, item.h)
        ctx.stroke()

      }
      //显示辅助点
      // for (var k = 0; k < turning_point.length; k++) {
      //   ctx.beginPath()
      //   ctx.arc(turning_point[k].x, turning_point[k].y, 10, 0, Math.PI * 2)
      //   ctx.fillStyle = 'gray'
      //   ctx.fill()
      // }

    }
    renderLoop();
  },
  enlargeTheLayout: function(e) {

    const dpr = wx.getSystemInfoSync().pixelRatio
    var xx = dpr * e.detail.x
    var yy = dpr * e.detail.y
    console.log('xx,yy',xx,yy)
    var list = this.data.list
    var index = null
    for (var i in list) {
      var item = list[i]
      if (xx >= item.x && xx <= (item.x + item.w) && yy >= item.y && yy <= (item.y + item.h)) {
        index = i
        break
      }
    }
    var name = this.data.list[index].eng
    console.log(name)
    wx.navigateTo({
      url: '../enlarge_floor1/' + name + '/' + name,
    })
  }
})



















// {
//   if (src.left !=  {x:1234567890,y:1234567890} && des.bottom !=  {x:1234567890,y:1234567890}) //src_left-->des_bottom
//   {
//     ctx.moveTo(src_center_x, src_center_y)
//     ctx.lineTo(src.left.x, src.left.y)
//     ctx.stroke()
//     ctx.moveTo(des_center_x, des_center_y)
//     ctx.lineTo(des.bottom.x, des.bottom.y)
//     ctx.stroke()
//     var x1 = src.left.x
//     var y1 = src.left.y
//     var x2 = des.bottom.x
//     var y2 = des.bottom.y
//   } else if (src.top !=  {x:1234567890,y:1234567890} && des.right !=  {x:1234567890,y:1234567890}) //src_top-->des_right
//   {
//     ctx.moveTo(src_center_x, src_center_y)
//     ctx.lineTo(src.top.x, src.top.y)
//     ctx.stroke()
//     ctx.moveTo(des_center_x, des_center_y)
//     ctx.lineTo(des.right.x, des.right.y)
//     ctx.stroke()
//     var x1 = src.top.x
//     var y1 = src.top.y
//     var x2 = des.right.x
//     var y2 = des.right.y
//   }
//   var count = 0

//   while ((Math.abs(x1 - x2) > 20 || Math.abs(y1 - y2) > 20) && count <= 30) {
//     count++
console.log('进入while循环')
//     //向上
//     ctx.moveTo(x1, y1)
//     for (var j = 0; j < turning_point.length; j++) {
//       var maxy = y1
//       var maxx = x1
//       var point = turning_point[j]

//       if (Math.abs(point.x - x1) <= 20 && (Math.abs(point.y - y2) <= 20 || point.y > y2)) {
//         if (maxy > point.y) {
//           maxy = point.y
//           maxx = point.x
//         }
//       }
//       x1 = maxx
//       y1 = maxy
//     }
//     ctx.lineTo(x1, y1)
//     ctx.stroke()

//     //向左
//     for (var j = 0; j < turning_point.length; j++) {
//       var maxy = y1
//       var maxx = x1
//       var point = turning_point[j]

//       if (Math.abs(point.y - y1) <= 20 && (Math.abs(point.x - x2) <= 20 || point.x > x2)) {
//         if (maxx > point.x) {
//           maxy = point.y
//           maxx = point.x
//         }
//       }
//       x1 = maxx
//       y1 = maxy
//     }
//     ctx.lineTo(x1, y1)
//     ctx.stroke()
//   }
// }







// if (delta_x > src.w / 2) {
//   if (src.right !=  {x:1234567890,y:1234567890} && des.top !=  {x:1234567890,y:1234567890}) //src_right-->des_top
//   {
//     ctx.moveTo(src_center_x, src_center_y)
//     ctx.lineTo(src.right.x, src.right.y)
//     ctx.stroke()
//     ctx.moveTo(des_center_x, des_center_y)
//     ctx.lineTo(des.top.x, des.top.y)
//     ctx.stroke()
//     var x1 = src.right.x
//     var y1 = src.right.y
//     var x2 = des.top.x
//     var y2 = des.top.y
//   } else if (src.bottom !=  {x:1234567890,y:1234567890} && des.left !=  {x:1234567890,y:1234567890}) //src_bottom-->des_left
//   {
//     ctx.moveTo(src_center_x, src_center_y)
//     ctx.lineTo(src.bottom.x, src.bottom.y)
//     ctx.stroke()
//     ctx.moveTo(des_center_x, des_center_y)
//     ctx.lineTo(des.left.x, des.left.y)
//     ctx.stroke()
//     var x1 = src.bottom.x
//     var y1 = src.bottom.y
//     var x2 = des.left.x
//     var y2 = des.left.y
//   }
// }
// else if(delta_x<src.w/2){

// }