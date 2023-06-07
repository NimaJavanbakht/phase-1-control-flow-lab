function scuberGreetingForFeet(ride) {

  if (ride <= 400) {
    ride = 'This one is on me!';
    return ride;
  }
  else if (ride > 400 && ride <= 2000) {
    ride = 'That will be twenty bucks.';
    return ride;
  }
  else if (ride > 2000 && ride <= 2500) {
    ride = 'I will gladly take your thirty bucks.';
    return ride;
  }
  else 
    return 'No can do.'
}

function ternaryCheckCity(city){
  const cityMessage = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  
  return cityMessage;
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
  }

  }