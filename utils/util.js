const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const addTopurchased = (index, that) => {

  var good = that.data.list[index]

  var purchased = that.data.purchased

  var spurchased = JSON.stringify(purchased)

  var sgood = ((JSON.stringify(good)).split('{')[1]).split('}')[0]

  if (spurchased.indexOf(sgood) == -1) {
    good['id'] = purchased.length + 1
    purchased.push(good)
  }

  that.setData({
    purchased: purchased
  })

  const app = getApp()
  var list = JSON.stringify(app.globalData.goods)
  if (list.indexOf(sgood) == -1) {
    app.globalData.goods.push(good)
  }

}


module.exports = {
  formatTime: formatTime,
  addTopurchased: addTopurchased
}