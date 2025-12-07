const input = document.getElementById("fib_input");
const button = document.getElementById("fib_button");
const output = document.getElementById("Fib_output");

function fibonacci(n) {
    return 1;
}

button.addEventListener("click", () => {
    const value = input.value;
    if (typeof value === "number") {
        fib_number = fibonacci(value);
        output.textContent = "Your Fibonacci Number: " + fib_number
    }
    else {
        output.textContent = "Invalid Input";
    }
})