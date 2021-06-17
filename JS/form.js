import addMessage, { resetError as resetMessage, renderDiff, timer, stopFunction } from  './common.js'
import { diffDates, diffTime } from './calc.js'
import switchFunction from './switchContent.js'

const form1 = document.getElementById('dateForm');
const form2 = document.getElementById('timeForm');

switchFunction();

form1.addEventListener('submit', (evt) => {
    evt.preventDefault();
    resetMessage();

    const formdata = new FormData(evt.target);
    let date1 = formdata.get('date1');
    let date2 = formdata.get('date2');

    if (!date1 || !date2) {
        addMessage('Произошла ошибка');
    } else {
        if (date1 > date2){
            [date2, date1] = [date1, date2];
        }
        const result = diffDates(date1, date2);
        renderDiff(result);
    }

})

form2.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (stopButton.onclick) {
        console.log(1);
        stopFunction();
    }
    else{
        const formdata = new FormData(evt.target);
        let time = formdata.get('time');
        const result = diffTime(time);
        timer(result);
    }
})