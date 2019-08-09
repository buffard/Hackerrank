let myString = 'hello'

//This function will take a string and reverse it 
function stringReverse(string) {
  //break the string into individual characters and put them in an array
  let stringArray = string.split("")
  //empty string for us to build in
  let reversedString = ""
  //the length of the array is 5 so subtract 1 for when we loop over it as long as i is greater than
  //or equal to 0. each time we go over the loop lower the value of i by 1
  for(let i=stringArray.length-1; i >= 0; i--) {
    //for each item in our array add it to the end of our string
    reversedString += stringArray[i]    
  }  
  console.log(reversedString) 
}
stringReverse(myString)
//***Next try to figure out how to reverse multiple words but keep the order of the words the same

// maybe split on spaces and make each word an obj in an array then break it down from there