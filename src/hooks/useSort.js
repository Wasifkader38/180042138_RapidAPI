

export const useSort = () => {

  const merge = (left, right, key) => {
    let arr = [];

    while (left.length && right.length) {
      
      if (left[0][key] <= right[0][key]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }

    //console.log([...arr, ...left, ...right]);
    return [...arr, ...left, ...right];
  };

  const sort = (data,key) => {
    //console.log(data);
    const array = [].concat(data);

    const half = array.length / 2;

    if (array.length < 2) {
      return data;
    }

    const left = array.splice(0, half);
    
    return merge(sort(left,key), sort(array,key), key);
  };

  

  return {
      sort
  }
};
