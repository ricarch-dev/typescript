/*en este archivo iran todo los modulado de logica de negocio */

import type { Product } from './products.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
};

export const calcStock = (): number => {
  return products.reduce((acc, product) => acc + product.stock, 0);
};
