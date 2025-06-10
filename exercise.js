
function getIssuer(number) {
  // Code your solution here
 let text = number.toString();

  if (((text[0] === '3' && text[1]==='4') || (text[0] === '3' && text[1]==='7') )&& (text.length === 15 )){
     return 'AMEX';
}
  else if((text[0] === '6' && text[1]==='0' && text[2] ==='1' && text[3] ==='1') && (text.length === 16)){
     return 'Discover';
}
  else if(((text[0] === '5' && text[1]==='1') ||(text[0] === '5' && text[1]==='2') || (text[0] === '5' && text[1] ==='3') || (text[0] === '5' && text[1]==='4') || (text[0] === '5' && text[1]==='5')) && (text.length === 16)){
    return 'Mastercard';
}
  else if ( (text[0] === '4') && (text.length === 13 || text.length === 16)){
    return 'VISA';
}
  else{
     return 'Unknown';
}
}
 console.log(getIssuer(4111111111111111)); 