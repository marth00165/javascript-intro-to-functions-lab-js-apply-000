function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
 var spy = (string).toUpperCase()
  console.log(spy);
  
}

function logWhisper(string) {
  var chicken = (string).toLowerCase()
  console.log(chicken);
}

function sayHiToGrandma(string){
  if (string.toLowerCase()=== string) {
    return "I can't hear you!"
  }
    
}