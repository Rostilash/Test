// Функція для форматування часу з додаванням нулів
function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

// Функція для оновлення зворотного відліку
function updateCountdown() {
    const now = new Date(); // Поточний час
    const Birthday = new Date('2025-01-05T00:00:00'); // Час дня народження 

    // Різниця в мілісекундах
    const timeDifference = Birthday - now;

    // Розрахунок часу
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
	
    // Виведення зворотного відліку
    document.getElementById('countdown').innerHTML =
        formatTime(days) + ' days/ ' + 
        formatTime(hours) + ':' + 
        formatTime(minutes) + ':' + 
        formatTime(seconds) + '.';

    // Якщо відлік завершений
    if (timeDifference < 0) {
        document.getElementById('countdown').innerHTML = 'З Днем народження!!!';
    }
}

// Оновлюємо відлік кожну секунду
setInterval(updateCountdown, 1000);

// Початкове оновлення
updateCountdown();