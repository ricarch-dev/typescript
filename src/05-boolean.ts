(() => {
  let isEnable = true;
  isEnable = false;

  //explicity type
  let isNew: boolean = false;
  console.log(isNew);
  //implicit type
  isNew = true;
  console.log(isNew);

  const randomNumber = Math.random();
  console.log(randomNumber);

  isNew = randomNumber >= 0.5 ? true : false;
  console.log(isNew);
})();
