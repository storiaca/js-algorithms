function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

logAtMost5(3);

// O(1)
