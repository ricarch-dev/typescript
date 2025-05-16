(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';


  //función tradicional
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const product1 = createProductToJson('P1', new Date(), 12, 'S');
  console.log(product1);
  console.log(product1.title);
  console.log(product1.stock);
  console.log(product1.size);
  console.log(product1.createdAt);


  //función arrow
  const  createProductToJson2 = (
    title: string,
    createdAt: Date,
    stock: number | undefined | null, //al agregar undefined y null, se puede recibir un valor nulo o indefinido
    size?: Sizes //? hace que el tamaño sea opcional
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const product2 = createProductToJson2('P2', new Date(), 12, 'M');
  console.log(product2);

})();
