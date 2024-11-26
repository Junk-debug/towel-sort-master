
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix == undefined) return result;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let clmnidx = (i % 2 === 0) ? j : (matrix[i].length - 1 - j)
      result.push(matrix[i][clmnidx]);
    };
  };
  return result;
}