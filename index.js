function theBeatlesPlay(musicians, instruments) {
  var sentence = []
  
  for (var i = 0; i < musicians.length; i++) {
    sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  console.log(sentence);
  return sentence
}

function johnLennonFacts(facts) {
 var i = 0;
 var newArray = [];
 while (i < facts.length) {
   newArray.push(facts[i] + '!!!');
   i++;
 }
 return newArray;
}

function iLoveTheBeatles(num) {
  var newArray = [];
<<<<<<< HEAD
  do {
    newArray.push('I love the Beatles!');
    num++;
=======
  var i = 0;
  do {
    newArray.push('I love the Beatles!');
    i++;
>>>>>>> a9e56d8e6e84c1a75177b9f8b75a8e8bd634e9e6
  } while
  (num < 15);
  return newArray;
}