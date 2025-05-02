(() => {
  //union types es la union de tipos de datos para una variable del cual permite recibir mas de un tipo de dato
  let userId: string | number;
  userId = 123;
  userId = '123';

  function greeting(userId: string | number) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    } else {
      console.log(`number ${userId.toFixed(2)}`);
    }
  }

  greeting(3.1416);
  greeting('Hola mundo');
})();
