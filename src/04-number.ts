(() => {
  //de manera inferida
  let productPrice = 100;
  productPrice = 12;
  console.log('Product Price:', productPrice);

  //de manera explicita
  let customerAge: number = 18;
  console.log('Customer Age:', customerAge);
  customerAge = customerAge + 1;
  console.log('Customer Age:', customerAge);

  //si no se inicializa la variable, se debe especificar el tipo
  let productInStock: number;
  console.log('Product In Stock:', productInStock);
  if (productInStock > 10) {
    console.log('Product is available');
  }

  let discount = parseInt('300');
  console.log('Discount:', discount);
  if (discount <= 200) {
    console.log('Discount is valid');
  } else {
    console.log('Discount is invalid');
  }

  let hex = 0xf00d;
  console.log('Hex:', hex);
  let binary = 0b1010;
  console.log('Binary:', binary);

})();
