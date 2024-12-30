document.addEventListener("DOMContentLoaded", function() {
    const openCalculatorBtn = document.getElementById("open-calculator-btn");
    const closeCalculatorBtn = document.getElementById("close-calculator-btn");
    const calculatorPopup = document.getElementById("calculator-popup");
    const calculatorDisplay = document.getElementById("calculator-display");
    const clearBtn = document.getElementById("clear-btn");
    const equalsBtn = document.getElementById("equals-btn");

    // Функція для відкриття пупапу з калькулятором
    openCalculatorBtn.addEventListener("click", function() {
        calculatorPopup.style.display = "block";
    });

    // Функція для закриття пупапу
    closeCalculatorBtn.addEventListener("click", function() {
        calculatorPopup.style.display = "none";
    });

    // Логіка для натискання кнопок калькулятора
    const calcBtns = document.querySelectorAll(".calc-btn");
    
    calcBtns.forEach(function(button) {
        button.addEventListener("click", function() {
            const value = button.getAttribute("data-value");
            calculatorDisplay.value += value; // Додаємо значення кнопки до дисплею
        });
    });

    // Очищення дисплею
    clearBtn.addEventListener("click", function() {
        calculatorDisplay.value = "";
    });

    // Логіка для обчислення результату
    equalsBtn.addEventListener("click", function() {
        const expression = calculatorDisplay.value;
        try {
            const result = calculateExpression(expression); // Обчислюємо вираз
            calculatorDisplay.value = result; // Виводимо результат в дисплей
        } catch (e) {
            calculatorDisplay.value = "Error"; // Якщо сталася помилка, виводимо "Error"
        }
    });

    // Функція для обчислення математичних виразів
    function calculateExpression(expression) {
        // Заміна математичних символів на стандартні (наприклад × -> *)
        expression = expression.replace(/×/g, "*").replace(/÷/g, "/");

        // Перевірка на наявність невалідних символів
        if (/[^0-9+\-*/().]/.test(expression)) {
            throw new Error("Invalid character in expression");
        }

        // Обчислюємо вираз за допомогою вбудованого методу
        try {
            // Враховуємо пріоритет операцій
            return Function('"use strict";return (' + expression + ')')();
        } catch (e) {
            throw new Error("Invalid expression");
        }
    }
});
