// Load the full build.
import _ from 'lodash';

const data = [
  {
    username: 'Ricardo',
    role: 'admin',
  },
  {
    username: 'Juan',
    role: 'seller',
  },
  {
    username: 'Maria',
    role: 'seller',
  },
  {
    username: 'Santiago',
    role: 'seller',
  },
];

const rta = _.groupBy(data, 'role');
console.log(rta);
