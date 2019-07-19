let s ='07:05:45PM'
let a ='07:05:45AM'
let noon = '12:35:45PM'
let midnight = '12:35:45AM'
//does not account for the 12 o clock hours.  Add two if statements at the top of our function to filter through those first then do the other checks
function timeConversion(s) {

  let twelveCheck = s.slice(0, 2)
  //first check to see if it is in the 12 oclock hours
  if(twelveCheck === '12') {
    //if it is noon remove PM and return time
    if(s.includes('PM')) {
      let removeSuffix = s.slice(0, -2)
      return removeSuffix
      // if it is midnight remove AM and turn 12 into 00
    } else if (s.includes('AM')) {
      let removeSuffix = s.slice(0, -2)
      let splitTime = removeSuffix.split(':')
      splitTime[0] = '00'
      let militaryTime = splitTime.join(':')
      return militaryTime
    }
    //if it is a time that is not start with 12
      // then check to see if PM and remove PM and add 12 to the time
  } else if (s.includes('PM')) {
    let removeSuffix = s.slice(0, -2)
    let splitTime = removeSuffix.split(':')  
    splitTime[0] = parseInt(splitTime[0]) + 12
    splitTime[0] = splitTime[0].toString()
    let militaryTime = splitTime.join(':')
    return militaryTime
    // otherwise will be AM, remove AM and return time
  } else {
    let removeSuffix = s.slice(0, -2)
    return removeSuffix
  }
}

timeConversion(s);
timeConversion(a);
timeConversion(noon);
timeConversion(midnight);