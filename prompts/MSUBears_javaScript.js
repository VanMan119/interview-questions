for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("MSUBears");
    } else if (i % 5 === 0) {
        console.log("Bears");
    } else if (i % 3 === 0) {
        console.log("MSU");
    } else {
        console.log(i);
    }
} 