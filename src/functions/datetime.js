var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec']

function FormatTime(str){
  var d = new Date(str)
  var now = new Date()

  if(now.getMonth() == d.getMonth() && now.getDate() == d.getDate()){ 
    var res = `  ${d.getHours()}:${`${d.getMinutes()}`.padStart(2,0)}`
  } else {
    var res = `${months[d.getMonth()]} ${`${d.getDate()}`.padStart(2,0)}`
  }

  return res
}

module.exports = {FormatTime}