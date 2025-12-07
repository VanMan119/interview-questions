const input = document.getElementById("fib_input");
const button = document.getElementById("fib_button");
const output = document.getElementById("Fib_output");

function fibonacci(n) {
    return 1;
}

button.addEventListener("click", () => {
    const input_value = input.value;
    const num = Number(input_value)
    if (!isNaN(num)) {
        fib_number = fibonacci(value);
        output.textContent = "Your Fibonacci Number: " + fib_number
    }
    else {
        output.textContent = "Invalid Input";
    }
})