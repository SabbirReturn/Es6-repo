let products = [
    {id:1, name:'Lenovo', price:65000},
    {id:2, name:'HP', price:75000},
    {id:3, name:'Mac', price:165000},
]
let name = products.map(product=>product.name);
let price = products.map(product=>product.price);
let sumPrice = products.reduce((p,c)=>p+c.price,0);
let affordablePrice = products.find(product=>product.price<100000)
console.log(affordablePrice);
// console.log(sumPrice);
// console.log(price);
// console.log(name);