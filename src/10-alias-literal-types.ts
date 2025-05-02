(() => {
  //alias literal types es la union de tipos de datos para una variable del cual permite recibir mas de un tipo de dato
  type UserID = string | boolean | number;
  let dynamicVar: UserID = '300';

  dynamicVar = true;
  dynamicVar = 200;

  function helloUser(userId: UserID) {
    console.log(`Un saludo al usuario con el número de id ${userId}`);
  }
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'M'; //CORRECTO
  shirtSize = 'S'; //CORRECTO
  // shirtSize = 'qwrty'; //ERROR. No está en las opciones.
  // shirtSize = 'SS'; //ERROR. Letra de más.
  // shirtSize = 'm'; //ERROR. Está en minúscula.

  function yourSize(userSize: Sizes) {
    console.log(`Tu medida es ${userSize}`);
  }
})();
