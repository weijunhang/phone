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

module.exports = {
  formatTime: formatTime
}

// 在js中
//获取当前日期
//  let date = new Date(todate);
//将时间字符串转成date,时间戳也是这个方法
// let date = new Date(''2019 - 10 - 25");
//获取当前年
  // var year = date.getFullYear();
//获取当前月
// var money = date.getMonth() + 1;
//获取当前日
// var day = date.getDate();
///当前周几
// let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
// var strWeek = show_day[day];


// 在wxs中
//获取当前日期
// var date = getDate();
//将时间字符串转成date,时间戳也是这个方法
// var date = getDate(''2019 - 10 - 25");
//获取当前年
// var year = date.getFullYear();
//获取当前月
// var money = date.getMonth() + 1;
//获取当前日
// var day = date.getDay();
///当前周几
// var show_day = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
// var strWeek = show_day[day];