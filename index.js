let counter = 0; // Инициализация переменной счетчика
let intervalId = null; // Инициализация переменной для хранения идентификатора интервала

// Функция для увеличения счетчика и обновления текста на экране
function changeCounter() {
    counter++; // Увеличиваем значение счетчика
    document.querySelector('.counter__screen').innerText = counter; // Обновляем текст на экране
}

// Функция-обработчик нажатия кнопки
function handleButtonClick() {
    const button = document.querySelector('.counter__button'); // Получаем саму кнопку

    // Проверяем текущее состояние с помощью текста кнопки
    if (intervalId === null) {
        // Если интервал не запущен, запускаем его
        intervalId = setInterval(changeCounter, 1000); // Устанавливаем интервал на 1 секунду
        button.innerText = "Стоп"; // Меняем текст кнопки на "Стоп"
    } else if (button.innerText === 'Стоп') {
        // Если интервал запущен, останавливаем его
        clearInterval(intervalId); // Останавливаем интервал
        intervalId = null; // Сбрасываем идентификатор интервала
        button.innerText = 'Сбросить'; // Меняем текст кнопки на "Сбросить"
    } else {
        // Если кнопка в состоянии "Сбросить"
        counter = 0; // Сбрасываем значение счетчика
        document.querySelector('.counter__screen').innerText = counter; // Обновляем текст на экране
        button.innerText = 'Старт'; // Меняем текст кнопки на "Старт"
    }
}

// Добавляем обработчик события на кнопку
document.querySelector('.counter__button')
    .addEventListener('click', handleButtonClick);
