
function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
    // if(arr.length === 0) {
    //      return 0
    //  } else {
    //    return un = new Set(arr).size
    //  }
    if(arr.length>0){
        let i=0;
        for(let j=1;j<arr.length;j++){
            if(arr[i]!=arr[j]){
              i++;
              arr[i] = arr[j];
            }
        }
        return i+1;
    } else {
        return 0
    }
}

//countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4