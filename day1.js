///Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.

function reverseArray( array ) {
    var reversedArray = [];
  
    while( i = array.pop() )
        reversedArray.push( i );
    
    return reversedArray;
  }
  
  function reverseArrayInPlace( array ) {
    for( var i = 0; i < Math.floor( array.length/2 ); i++ ) {
      var temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  }
  
  console.log(reverseArray(["A", "B", "C"]));



//2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
//```js
//#
//##
//###
//####
//#####
//######
//#######

var content = '';

for (var i = 0; i < 7; i++) {
    content = content + '#';
    console.log(content);
}

//1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters. It compare  which word is most frequently occurred in the paragraph.
const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`


function countWords(sentence){
return sentence.trim().split(/\s+/).length;
}
console.log(countWords(sentence));





