function getFruit(name) {
    const fruits = {
      strawberry: '🍓',
      kiwi: '🥝 ',
      apple: '🍎',
    };
    return Promise.resolve(fruits[name]);
}

async function aMakeSmoothie() {
    const kiwi = await getFruit('kiwi');
    console.log(kiwi);

    const apple = await getFruit('apple');
    console.log(apple);
};
aMakeSmoothie()
