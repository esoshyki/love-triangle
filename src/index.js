/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var C = preferences;
  var answer = 0;
  for (var i=0; i< C.length; i++) {
    var first= C[i];
    var second = C[first-1];
    var third = C[second-1];
    if (third == i+1 && i != C[i]-1) {
      answer +=1;
    };
  };
  return (answer / 3) 
};
