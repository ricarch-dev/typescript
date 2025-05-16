(() => {
  const calcTotal = (prices: number[]) => {
    let total = 0;

    //me sugiere usar for...of por que es mas eficiente
    prices.forEach((item) => {
      total += item;
    });
    return total;
  };

  const total = calcTotal([1, 2, 3, 4, 5]);
  console.log(total);

  //de manera explicita se puede indicar el tipo de dato que va a retornar la función
  const calcTotal2 = (prices: number[]): string => {
    let total = 0;
    for (const item of prices) {
      total += item;
    }
    return total.toString();
  };

  const rta = calcTotal2([1, 2, 3, 4, 5]);
  console.log(rta);

  //funcion que no retorna nada
  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };

  printTotal([1, 2, 3, 4, 5]);

  //funcion que explicitamente que no retorna nada
  const printTotal2 = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
    //esto indica que la funcion no retorna nada
    //return prices;
  };

  printTotal2([1, 2, 3, 4, 5]);

})();
