function scuberGreetingForFeet(){
  // Write your code here!
}

function ternaryCheckCity(){
  // Write your code here!
}

function switchOnCharmFromTip(){
  // Write your code here!
}




function scuberGreetingForFeet(value) {
  
  if (value <= 400) {
    return "This one is on me!";
  } else if (value > 2000 && value <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  if (city === 'NYC') {
      return 'Ok, sounds good.'
  } else {
      return 'No go.'
  }
}

function switchOnCharmFromTip(next) {
  
  switch (next) {
    case 'generous':
      return 'Thank you so much.';

    case 'not as generous':
      return 'Thank you.';



    default:
      return 'Bye.';
  }
}