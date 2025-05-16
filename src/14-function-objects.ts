(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'test@test.com',
    password: '123456',
  });

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'Product 1',
    createdAt: new Date(),
    stock: 10,
    size: 'M',
  });

  console.log(products);
})();
