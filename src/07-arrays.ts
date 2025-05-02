(() => {
  let prices = [1, 2, 3, 4, 5];

  /* Método Push para agregar un elemento al final del array */
  prices.push(6);
  console.log(prices); // [1,2,3,4,5,6]
  //TypeScript
  //prices.push('texto'); //ERROR. Se espera agregar solo números al array.

  let meses = ['Mayo', 'Junio', 'Julio'];
  //meses.map((item) => item * 2); //ERROR. Se pretende realizar una multiplicación usando strings.

  //tipados de arrays
  let price: (number | string)[] = ['hola', 2, 4, 6, 'mundo'];
  let otherPrices: (boolean | number)[];

  //TypeScript
  let price2 = ['hola', 2, 4, 6, 'mundo'];
  // "hola", "mundo" => string
  // 2,4,6 => number
})();
