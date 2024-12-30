document.addEventListener("DOMContentLoaded", function() {
    const hoursInput = document.getElementById("hours-input");
    const minutesInput = document.getElementById("minutes-input");
    const secondsInput = document.getElementById("seconds-input");
    const startTimerBtn = document.getElementById("start-timer-btn");
    const timerDisplay = document.getElementById("timer-display");
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("close-popup-btn");

    let countdownInterval;

    // Функція для запуску таймера
    function startTimer() {
        let hours = parseInt(hoursInput.value) || 0; // Якщо не введено значення, за замовчуванням 0
        let minutes = parseInt(minutesInput.value) || 0; // Якщо не введено значення, за замовчуванням 0
        let seconds = parseInt(secondsInput.value) || 0; // Якщо не введено значення, за замовчуванням 0

        // Перевіряємо, чи введені правильні значення
        if (hours < 0 || minutes < 0 || seconds < 0 || minutes > 59 || seconds > 59) {
            alert("Невірний формат часу!");
            return;
        }

        // Конвертуємо введений час в мілісекунди
        let totalMilliseconds = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);

        // Очищаємо попередній інтервал, якщо він був
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        // Відображаємо час
        countdownInterval = setInterval(function() {
            totalMilliseconds -= 1000; // Віднімаємо 1 секунду

            // Рахуємо години, хвилини та секунди
            const remainingHours = Math.floor(totalMilliseconds / (1000 * 60 * 60));
            const remainingMinutes = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
            const remainingSeconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);

            // Оновлюємо відлік на екрані
            timerDisplay.textContent = `${pad(remainingHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;

            // Якщо час досяг 00:00:00, показуємо пупап
            if (totalMilliseconds <= 0) {
                clearInterval(countdownInterval); // Зупиняємо таймер
                showPopup(); // Виводимо пупап з повідомленням
            }
        }, 1000);
    }

    // Допоміжна функція для додавання нуля перед одиничними цифрами
    function pad(num) {
        return num < 10 ? "0" + num : num;
    }

    // Функція для показу пупапа
    function showPopup() {
        popup.style.display = "block";
    }

    // Закрити пупап
    closePopupBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Запуск таймера при натисканні кнопки
    startTimerBtn.addEventListener("click", startTimer);
});
