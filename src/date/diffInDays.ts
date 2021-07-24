import { startOfDay } from './startOfDay';

const DAY_IN_MILISECONDS = 1000 * 60 * 60 * 24;

export function diffInDays(a, b) {
    const end = startOfDay(b).getTime();
    const start = startOfDay(a).getTime();
    const diff = end - start;

    return diff / DAY_IN_MILISECONDS; 
}

