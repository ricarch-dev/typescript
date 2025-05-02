(() => {
  let myDynamicVar: any;

  myDynamicVar = 100; // number
  myDynamicVar = null;
  myDynamicVar = {}; // Object
  myDynamicVar = ''; // string

  //Caso 1
  myDynamicVar = 'HOLA';
  const otherString = (myDynamicVar as string).toLowerCase();

  //Caso 2
  myDynamicVar = 1212;
  const otherNumber = (<number>myDynamicVar).toFixed();
})();
