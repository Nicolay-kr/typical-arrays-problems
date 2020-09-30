
exports.min = function min (array) {
  if(arguments.length && array.length !== 0){
    let min = array[0];
    for(let i = 1; i < array.length;i++ ){
      array[i] < min ? min = array[i] : min ;
    }
    return min;
  }else{return 0}
}

exports.max = function max (array) {
  if(arguments.length && array.length !== 0){
    let max = array[0];
    for(let i = 1; i < array.length;i++ ){
      array[i] > max ? max = array[i] : max ;
    }
    return max;
  }else{return 0}
}
  
exports.avg = function avg (array) {
  if(arguments.length && array.length !== 0){
    let avg = 0;
    for(let i = 0; i < array.length;i++ ){
      avg += array[i] ;
    }
    return avg/array.length;
  }else{return 0}
}
