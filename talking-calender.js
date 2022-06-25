const talkingCalendar = function(date) {
  var newdate = new Date(date)
  var options = { month: 'long', day: 'numeric', year: 'numeric' };

  return newdate.toLocaleDateString("en-US",options);

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));