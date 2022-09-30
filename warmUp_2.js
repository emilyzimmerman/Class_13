let sentence = "My name is John!";

// function reverse(str) {

  
//   let splitstring = str.split(''); 
  
//     let reverseArray = splitstring.reverse();

//     let joinArray = reverseArray.join(''); 

//     return joinArray; 
// }
  
  
//   reverse(sentence); 

  // Correct Solutoin 

function reverseTwo(str){
  let newStr = '';

  for (let i = sentence.length -1; i >= 0; --i){
    newStr += str[i]
  }
return newStr;
}

reverse(sentence);
