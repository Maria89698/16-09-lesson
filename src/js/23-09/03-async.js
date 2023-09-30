// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }


function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fruits[name])
    }, 500);
  })
}

async function aMakeSmoothie() {
  console.time('aMakeSmoothie')

  const kiwi = await getFruit('kiwi');
  console.log(kiwi);

  const apple = await getFruit('apple');
  console.log(apple);

  const strawberry = await getFruit('strawberry');
  console.log(strawberry);

  const smoothie = await Promise.all([kiwi, apple, strawberry]);
  
  console.timeEnd('aMakeSmoothie')
};
aMakeSmoothie()
