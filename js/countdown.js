// Функція для форматування часу з додаванням нулів
function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

// Функція для оновлення зворотного відліку
function updateCountdown() {
    const now = new Date(); // Поточний час
    const newYear = new Date('2025-01-01T00:00:00'); // Час нового року

    // Різниця в мілісекундах
    const timeDifference = newYear - now;

    // Розрахунок часу
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Виведення зворотного відліку
    document.getElementById('countdown').innerHTML =
        formatTime(days) + ' Дн. ' + 
        formatTime(hours) + ' Г. ' + 
        formatTime(minutes) + ' М. ' + 
        formatTime(seconds) + ' С.';

    // Якщо відлік завершений
    if (timeDifference < 0) {
        document.getElementById('countdown').innerHTML = 'З Новим Роком!';
    }
}

// Оновлюємо відлік кожну секунду
setInterval(updateCountdown, 1000);

// Початкове оновлення
updateCountdown();