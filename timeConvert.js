let s ='07:05:45PM'
let a ='07:05:45AM'
let noon = '12:35:45PM'
let midnight = '12:35:45AM'
//does not account for the 12 o clock hours.  Add two if statements at the top of our function to filter through those first then do the other checks
function timeConversion(s) {
  if (s.includes('PM')) {
    let removeSuffix = s.slice(0, -2)
    let splitTime = removeSuffix.split(':')  
    splitTime[0] = parseInt(splitTime[0]) + 12
    splitTime[0] = splitTime[0].toString()
    let militaryTime = splitTime.join(':')
    console.log(militaryTime)
    return militaryTime
  } else {
    let removeSuffix = s.slice(0, -2)
    console.log(removeSuffix)
    return removeSuffix
  }
}

timeConversion(s);
timeConversion(a);
timeConversion(noon);
timeConversion(midnight);