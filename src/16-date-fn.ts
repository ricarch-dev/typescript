import { format, subDays } from 'date-fns';

const date = new Date(1987, 3, 12);
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);

