import './styles.css';

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
// Для генерации случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


let timerId = null;
btnStart.addEventListener('click', () => {
    timerId = setInterval(() => {
        btnStart.disabled = true; // во время смены цветов кнопка Старт не активна
        document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)]; 
    }, 1000);
});

btnStop.addEventListener("click", () => {
    clearInterval(timerId);
    btnStart.disabled = false;
});

