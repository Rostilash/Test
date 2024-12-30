document.addEventListener("DOMContentLoaded", function() {
    // Кнопка для відкриття календаря
    const calendarBtn = document.getElementById("calendar-btn");
    const calendarContainer = document.getElementById("calendar-container");
    const closeCalendarBtn = document.getElementById("close-calendar-btn");
    const prevMonthBtn = document.getElementById("prev-month-btn");
    const nextMonthBtn = document.getElementById("next-month-btn");
    const monthYearDisplay = document.getElementById("month-year");
    const calendarTable = document.getElementById("calendar-table");

    // Поточна дата
    let currentDate = new Date();

    // Функція для оновлення календаря
    function updateCalendar() {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        // Виведення місяця та року
        monthYearDisplay.textContent = `${currentDate.toLocaleString('uk-UA', { month: 'long' })} ${year}`;

        // Отримуємо перший день місяця
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();

        // Очищаємо таблицю
        calendarTable.innerHTML = "";

        // Додаємо заголовки днів тижня
        const daysOfWeek = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        const headerRow = document.createElement("tr");
        daysOfWeek.forEach(day => {
            const th = document.createElement("th");
            th.textContent = day;
            headerRow.appendChild(th);
        });
        calendarTable.appendChild(headerRow);

        // Створення рядків для календаря
        let row = document.createElement("tr");
        for (let i = 0; i < firstDay.getDay(); i++) {
            row.appendChild(document.createElement("td"));
        }

        for (let day = 1; day <= daysInMonth; day++) {
            if (row.children.length === 7) {
                calendarTable.appendChild(row);
                row = document.createElement("tr");
            }

            const td = document.createElement("td");
            td.textContent = day;

            // Перевірка, чи є цей день сьогоднішнім
            if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                td.classList.add("today");
            }

            row.appendChild(td);
        }

        // Додаємо останній рядок, якщо потрібно
        if (row.children.length > 0) {
            calendarTable.appendChild(row);
        }
    }

    // Оновлюємо календар при відкритті
    calendarBtn.addEventListener("click", function() {
        calendarContainer.style.display = "block";
        updateCalendar();
    });

    // Закриття календаря
    closeCalendarBtn.addEventListener("click", function() {
        calendarContainer.style.display = "none";
    });

    // Перехід до попереднього місяця
    prevMonthBtn.addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    });

    // Перехід до наступного місяця
    nextMonthBtn.addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    });

    // Початкове оновлення календаря
    updateCalendar();
});
