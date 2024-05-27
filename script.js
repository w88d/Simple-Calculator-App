document.addEventListener('DOMContentLoaded', (event) => {
    const resultElement = document.querySelector('.container-result');

    let currentInput = '';
    let operator = null;
    let firstOperand = null;

    const buttons = document.querySelectorAll(".grid-item, .grid-item-big");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
        const value = button.textContent.trim();

        if(!isNaN(value) || value === "."){
            handleNumber(value)
        } else {
            handleOperator(value)
        }
        })

    })

    const backspace = document.querySelector('.backspace-button');
    backspace.addEventListener('click', () => {
        if(currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }
    })

    const handleNumber = (number) => {
        if(operator && firstOperand === null) {
        firstOperand = currentInput;
        currentInput = '';
        }
        
        currentInput += number;
        updateDisplay();
        }

    const handleOperator = (op) => {
        if(op === "AC") {
        currentInput = '';
        operator = null;
        firstOperand = null;
        } else if(op === "=") {
        if(operator && firstOperand != null) {
        currentInput = String(
        performCalculation(firstOperand, currentInput, operator)
        )
        operator = null;
        firstOperand = null;
        }
        } else {
            operator = op;
            if(currentInput === "") {
                currentInput = "0"
            }}
        updateDisplay();
        }

        const performCalculation = (a, b, op) => {
            a = parseFloat (a)
            b = parseFloat (b)

            switch(op) {
                case "+":
                return a + b;
                case "-":
                    return a - b;
                    case "*":
                        return a * b;
                        case "/":
                            return a / b;
                            default:
                             return b;
                            }
            }



    const updateDisplay = () => {
        resultElement.textContent = currentInput;
        }
})