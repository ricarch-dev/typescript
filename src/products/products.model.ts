/*en este archivo iran todo los modulado de datos */

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};
