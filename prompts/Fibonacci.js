const input = document.getElementById("fib_input");
const button = document.getElementById("fib_button");
const output = document.getElementById("fib_output");

function fibonacci(n) {
    let a = 1;
    let b = 1;

    if (n === 0 || n === 1) {
        return 1;
    }

    for (let i = 2; i <= n; i++) {
        let x = a + b;
        a = b;
        b = x;
    }
    return b;
}

button.addEventListener("click", () => {
    const input_value = input.value;
    const num = Number(input_value)
    if (!isNaN(num)) {
        fib_number = fibonacci(num);
        output.textContent = "Your Fibonacci Number: " + fib_number
    }
    else {
        output.textContent = "Invalid Input";
    }
})