import { addProduct, calcStock, products } from './products.service';

addProduct({
  title: 'Product 1',
  createdAt: new Date(),
  stock: 10,
  size: 'M',
});

addProduct({
  title: 'Product 2',
  createdAt: new Date(),
  stock: 31,
  size: 'M',
});

console.log(products);
const total = calcStock();
console.log(total);
