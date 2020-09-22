const utils = require('../../utils/util.js')
Page({

  data: {
    list: [
      { name: "肉类", x: 50, y: 0, w: 400, h: 350, 
        chosen:false,image:'http://imgservice3.suning.cn/uimg1/b2c/image/Rar4APc0Wvs6DfwK43hIwg.jpg_400w_400h_4e'},
      { name:"宠物",x: 500, y: 0, w: 200, h: 350 ,
        chosen:false,image:'http://imgservice5.suning.cn/uimg1/b2c/image/50grfd7bUa5VIx1KbaeG2A.jpg_400w_400h_4e'},
      { name:"饮用水",x: 50, y: 400, w: 100, h: 200 ,
        chosen:false,image:'http://imgservice3.suning.cn/uimg1/b2c/image/FzmH5YvPHLS3UWBQ3w5AdQ.jpg_400w_400h_4e'},
      { name:"纸品",x: 200, y: 400, w: 100, h: 200 ,
        chosen:false,image:'https://imgservice2.suning.cn/uimg1/b2c/image/SPH-H1XkVYv6Y3iDYO2Xew.jpg_400w_400h_4e'},
      { name:"水果",x: 200, y: 650, w: 100, h: 450 ,
        chosen:false,image:'http://imgservice3.suning.cn/uimg1/b2c/image/c4yHI6gngLV9i2Tj0fSv6w.jpg_400w_400h_4e'},
      { name: "粮油", x: 350, y: 400, w: 200, h: 200,
        chosen:false,image:'https://imgservice1.suning.cn/uimg1/b2c/image/1ERpugpHCLQ_CHi7n_M5ew.jpg_400w_400h_4e'},
      { name:"海鲜",x: 350, y: 650, w: 350, h: 200 ,
        chosen:false,image:'https://imgservice4.suning.cn/uimg1/b2c/image/4SVWlOWJXUviLiwowULKMA==.jpg_400w_400h_4e'},
      { name:"美妆个护",x: 50, y: 650, w: 100, h: 450 ,
        chosen:false,image:'https://imgservice5.suning.cn/uimg1/b2c/image/QiimP34AzAZckU1yJsXs9g.jpg_400w_400h_4e'},
      { name:"调料",x: 600, y: 400, w: 100, h: 200 ,
        chosen:false,image:'https://imgservice2.suning.cn/uimg1/b2c/image/f8rfLwb2gWSFfhNKhiXrmw.jpg_400w_400h_4e'},
      { name:"休闲食品",x: 350, y: 900, w: 350, h: 250 ,
        chosen:false,image:'../../images/three.jpg'}

    ],
    purchased: [{id:1, name: "入口", x: 0, y: 1150, w: 50, h: 50, image: ''}],
    goodSelect:null
  },

  addTopurchased:function(e){
    var list = this.data.list
    list[e.currentTarget.dataset.index].chosen=true
    this.setData({
     list:list
    })
    utils.addTopurchased(e.currentTarget.dataset.index,this)
    console.log(this.data.purchased)
  },
  checkthepath:function(){

    var purchased = JSON.stringify(this.data.purchased)
    var goods = JSON.stringify(this.data.list)
    try {
      wx.setStorageSync('purchased', purchased)
    } catch (e) { }
   
    wx.navigateTo({
      url: '../../path/floor1path/floor1path'
    })
  },
  removeGood:function(e){
   var good  = this.data.list[e.currentTarget.dataset.index]
   var list = this.data.list
   list[e.currentTarget.dataset.index].chosen = false
   this.setData({
      list: list
    })
   var index  = this.data.purchased.indexOf(good)
   var purchased = this.data.purchased
   if(index!=-1)
   {  
      purchased.splice(index,1)
      for(var i=index;i<purchased.length;i++)
     {
         purchased[i].id--
      }
   this.setData({purchased:purchased})}
   console.log(purchased)
  }
})