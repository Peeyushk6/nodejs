// const name = 'Peeyush';
// const userAge = 27;

// const user = {
//     name,
//     age: 34,
//     location: 'Philadelphia'
// }

// console.log(user);

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label;
// const stock = product.stock;

// console.log(label);
// console.log(stock);

const { label, stock, rating } = product
console.log(label);
console.log(stock);
console.log(rating);