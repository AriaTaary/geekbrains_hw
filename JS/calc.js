import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.js';

export const diffDates = (date1, date2) => {
    const iso1 = DateTime.fromISO(date1);
    const iso2 = DateTime.fromISO(date2);

    return iso2.diff(iso1, ['years', 'months', 'days']).toObject();
}

export const diffTime = (time) => {
    const iso = DateTime.fromISO(time);
    let hour = iso.hour;
    let minute = iso.minute;
    return hour*60*60 + minute*60;
}