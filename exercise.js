
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


 function productArray(numbers){
  //your code here
  let result =[];
  // The outer loop The outer loop selects which element to exclude 

  for(let i =0;i<numbers.length;i++){
     let product =1;
    // The inner loop calculates the product of all other elements
  for(let j=0;j<numbers.length;j++){
    // if condition skips only when j matches i (the excluded number)
     if(j !== i){
       product*=numbers[j];
}
   
}  
    result.push(product); 
}
  return result;
}
console.log(productArray([2,3,4]));