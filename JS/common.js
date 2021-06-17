const messageDate = document.querySelector('.messageDate');
const messageTime = document.querySelector('.messageTime');

export default function renderError(text) {
    messageDate.textContent = text;
}

export function resetError() {
    messageDate.textContent = '';
}

export function renderDiff(diff) {
    messageDate.innerHTML = `<span>
        Года: ${diff.years}
        Месяца: ${diff.months}
        Дни: ${diff.days}
    </span>`
}

var setTimer;

export function timer(timeInterval){
    setTimer = setInterval(function () {
        let seconds = timeInterval % 60
        let minutes = timeInterval / 60 % 60
        let hour = timeInterval / 60 / 60 % 60
        if (timeInterval <= 0) {
            clearInterval(setTimer);
            alert("Время закончилось");
            return;
        } else {
            let strHour = Math.trunc(hour);
            let strMinute = Math.trunc(minutes);
            let strSeconds = seconds;
            messageTime.innerHTML = `<span> Осталось: часы: ${strHour}, минуты: ${strMinute}, секунды: ${strSeconds}</span>`;
        }
        --timeInterval;
    }, 1000)
}

export function stopFunction() {
    clearInterval(setTimer);
}