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
  var icecream = string;
  if (icecream.toLowerCase()=== icecream) {
    return "I can't hear you!"
  }
    
/*
function sayHiToGrandma(string){
  var pancake = string;
  if (pancake.toUpperCase === pancake) {
    return "YES INDEED!"
  }
}
function sayHiToGrandma(string){
  var potato = string;
  if(potato == "I love you, Grandma."){
    return "I love you, too."
  }*/
}

