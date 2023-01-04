function logAtMost5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

logAtMost5(30)

// O(n)
