export default function switchFunction() {
    dateButton.onclick = function () {
        document.querySelector('#dateBlock').classList.remove('hidden');
        document.querySelector('#dateBlock').classList.add('show');
        document.querySelector('#timeBlock').classList.remove('show');
        document.querySelector('#timeBlock').classList.add('hidden');
    }

    timeButton.onclick = function () {
        document.querySelector('#dateBlock').classList.remove('show');
        document.querySelector('#dateBlock').classList.add('hidden');
        document.querySelector('#timeBlock').classList.remove('hidden');
        document.querySelector('#timeBlock').classList.add('show');
    }
}