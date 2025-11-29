import { formatCurrency } from '../scripts/utils/money.js';

if (formatCurrency(2095) === '20.95') {
  console.log('success');
} else {
  console.log('failed');
}

if (formatCurrency(0) === '0.00') {
 console.log('success');
} else {
  console.log('failed');
}