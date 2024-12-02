class Calculator {
    constructor() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = null;
        this.createCalculatorUI();
    }

    createCalculatorUI() {
        // Créer le conteneur de la calculatrice
        const calculator = document.createElement('div');
        calculator.className = 'calculator';
        document.body.appendChild(calculator);

        // Créer l'affichage
        this.display = document.createElement('input');
        this.display.type = 'text';
        this.display.className = 'display';
        this.display.disabled = true;
        calculator.appendChild(this.display);

        // Créer le conteneur des boutons
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons';
        calculator.appendChild(buttonsContainer);

        // Étiquettes des boutons
        const buttons = [
            '7', '8', '9', '/', 
            '4', '5', '6', '*', 
            '1', '2', '3', '-', 
            '0', '.', '=', '+', 
            'C'
        ];

        // Créer les boutons
        buttons.forEach(label => {
            const button = document.createElement('button');
            button.className = 'button';
            button.textContent = label;
            button.addEventListener('click', () => this.handleButtonClick(label));
            buttonsContainer.appendChild(button);
        });

        // Styles
        const style = document.createElement('style');
        style.textContent = `
            .calculator {
                border: 1px solid #000;
                display: inline-block;
                padding: 20px;
                border-radius: 5px;
            }
            .display {
                width: 100%;
                height: 40px;
                text-align: right;
                margin-bottom: 10px;
                font-size: 20px;
            }
            .buttons {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
            }
            .button {
                width: 60px;
                height: 60px;
                font-size: 20px;
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);
    }

    handleButtonClick(label) {
        if (label >= '0' && label <= '9' || label === '.') {
            this.appendNumber(label);
        } else if (label === 'C') {
            this.clearDisplay();
        } else if (label === '=') {
            this.calculate();
        } else {
            this.setOperation(label);
        }
    }

    appendNumber(number) {
        if (number === '.' && this.currentNumber.includes('.')) return;
        this.currentNumber += number;
        this.updateDisplay();
    }

    setOperation(op) {
        if (this.currentNumber === '') return;
        if (this.previousNumber !== '') {
            this.calculate();
        }
        this.operation = op;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    }

    calculate() {
        let result;
        const prev = parseFloat(this.previousNumber);
        const current = parseFloat(this.currentNumber);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        this.currentNumber = result;
        this.operation = null;
        this.previousNumber = '';
        this.updateDisplay();
    }

    clearDisplay() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = null;
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.value = this.currentNumber;
    }
}

// Créer une nouvelle instance de la calculatrice
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});