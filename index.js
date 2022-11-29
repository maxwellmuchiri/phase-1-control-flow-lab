function scuberGreetingForFeet(feet){

  
  
  if (feet <=400){
      print = 'This one is on me!';
    }else if (feet<=2500){
      print = 'I will gladly take your thirty bucks.'
    }else {
      print = 'No can do.'
    }
  console.log(feet)
  return print
  }
  
  
function ternaryCheckCity(city){

 return city==='NYC'?'Ok, sounds good.':`No go.`
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
    return'Thank you so much.'
      
      case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
      
  }

}