/**
 * Naive string search
 */
function naiveSearch(long, short) {
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(long[i], short[j]);
    }
  }
}

naiveSearch("lorie loled", "lol");
