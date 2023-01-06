let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

Object.keys(instructor); // O(n)

Object.values(instructor); // O(n)

Object.entries(instructor); // O(n)

instructor.hasOwnProperty("firstName"); // O(1)