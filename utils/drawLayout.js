module.exports = (ctx, that,width,height) => {

  var first = that.data.areas[that.data.areas.length - 1]
  ctx.beginPath()
  ctx.fillStyle = '#F5F5F5'
  ctx.fillRect(first.x , first.y , first.w , first.h)

  var areas = that.data.areas
  ctx.beginPath()

  for (var i in areas) {


    var item = areas[i]

    var tempx = item.x
    var tempy = item.y
    var tempw = item.x + item.w
    var temph = item.y + item.h

    var xx = tempx == 0 ? tempx - 1 : tempx
    var yy = tempy == 0 ? tempy - 1 : tempy
    var ww = tempw >= width ? item.w + 1 : item.w
    var hh = temph >= height ? item.h + 1 : item.h
    ctx.rect(xx, yy, ww, hh)
  }
  ctx.stroke()

  for (var i = 0; i < that.data.areas.length - 1; i++) {
    var item = that.data.areas[i]
    var xx = item.x + item.w / 2
    var yy = item.y + item.h / 2
    ctx.beginPath()
    ctx.moveTo(xx, yy);
    ctx.fillStyle = 'black'; //设置填充颜色为紫色
    ctx.font = '40px "微软雅黑"'; //设置字体
    ctx.textBaseline = 'middle'; //设置字体底线对齐绘制基线
    ctx.textAlign = 'center'; //设置字体对齐的方式
    ctx.fillText(item.name, xx, yy); //填充文字
  }

  var listlen = that.data.list.length
  var row = listlen % 2 == 0 ? listlen / 2 : (listlen + 1) / 2
  var lineH = first.h / row
  for (var i = 1; i < row; i++) {
    ctx.beginPath()
    ctx.moveTo(first.x, first.y + i * lineH)
    ctx.lineTo(first.x + first.w, first.y + i * lineH)
    ctx.stroke()
  }

  var end = listlen % 2 == 0 ? (first.y + first.h) : (first.y + first.h - lineH)
  ctx.beginPath()
  ctx.moveTo(first.x + first.w / 2, first.y)
  ctx.lineTo(first.x + first.w / 2, end)
  ctx.stroke()

  var list = that.data.list
  ctx.beginPath()
  ctx.fillStyle = 'black'; //设置填充颜色为紫色
  ctx.font = '40px "微软雅黑"'; //设置字体
  ctx.textBaseline = 'middle'; //设置字体底线对齐绘制基线
  ctx.textAlign = 'center'; //设置字体对齐的方式
  var lastrow = listlen % 2 == 0 ? row : row - 1
  for (var i = 0; i < lastrow; i++) {
    ctx.fillText(list[2 * i].name, first.x + first.w / 4, first.y + (2 * i + 1) * (lineH / 2)); //填充文字
    ctx.fillText(list[2 * i + 1].name, first.x + 3 * first.w / 4, first.y + (2 * i + 1) * (lineH / 2)); //填充文字
  }
  if (lastrow == row - 1)
    ctx.fillText(list[listlen - 1].name, first.x + first.w / 2, first.y + first.h - lineH / 2); //填充文字
}