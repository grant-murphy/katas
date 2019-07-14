let repeatNumbers = function(data) {
  let numString = '';

  data.forEach(function(numberPair, index) {
    // console.log(numberPair, index)
    for (let i = 0; i < numberPair[1]; i++) {
      //console.log(i)
      numString += numberPair[0];
      //console.log(numString)
      
    }
    
    if (index < (data.length - 1)) {
      // console.log(data)
      numString += ", ";
      
    }
  });
  return numString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));