setTimeout(() => {
    try {
        console.log("a")
        id;
        console.log("b")
    } catch (error) {
        console.log(error);
    }
}, 500);

console.log("c");