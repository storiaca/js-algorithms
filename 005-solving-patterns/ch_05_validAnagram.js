// function validAnagram(str1, str2){
//   // add whatever parameters you deem necessary - good luck!
//   
//   if(str1.length !== str2.length) {
//       return
//   }
  
//   let strArr1 = str1.split('').sort().join('')
//     let strArr2 = str2.split('').sort().join('')
    
//    if(strArr1 === strArr2) {
//        return true
//    } else {
//        return false
//    }
// }

function validAnagram(first, second){
   if(first.length !== second.length) {
      return
   }

   const lookup = {}

    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, othervise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

    validAnagram('', '') // true
    validAnagram('aaz', 'zza') // false
    validAnagram('anagram', 'nagaram') // true
    validAnagram("rat","car") // false) // false
    validAnagram('awesome', 'awesom') // false
    validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
    validAnagram('qwerty', 'qeywrt') // true
    validAnagram('texttwisttime', 'timetwisttext') // true