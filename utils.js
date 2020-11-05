exports.getDate = () => {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dateObj = new Date()
    var dayName = dayNames[dateObj.getDay()]
    var day = String(dateObj.getDate()).padStart(2, '0')
    var month = monthNames[dateObj.getMonth()]
    var year = dateObj.getFullYear()
    return (dayName + ', ' + day + ' ' + month + ' ' + year)  
  }