(() => {
  //de forma implicita
  //con comillas simples
  let productName = 'Product 1';
  //productName = null;
  //productName = undefined;
  productName = 'My amazing product';
  console.log(productName);

  //de forma explicita
  //con comillas dobles
  //a la hora de declarar de forma explicita siempre se debe colocar de la primera letra en minúscula
  const productDescription: string = "This is a product description";
  console.log(productDescription);

  let productPrice = 100;
  let isAvailable = true;

  //con backticks de forma implicita
  const summary = `
  title: ${productName}
  description: ${productDescription}
  price: ${productPrice}
  isAvailable: ${isAvailable}
  `;
  console.log(summary);
})();
