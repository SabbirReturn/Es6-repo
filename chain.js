// data access

let data = [{id:1, name:'Sabbir', address:'Uttara'}]

// console.log(data[0].name);


let products = {
    count: 5000,
    data: [
        {id:1, name: 'Hp Laptop', price: 65000},
        {id:2, name: 'MackBook', price: 165000}
    ]
}

// console.log(products.data[1].price);

let user1 = {
    id:5001,
    name: 'Sabbir Hasan',
    address: {
        street :{
            house : '73/f',
            road: '12/B',
            flat: '4B'
        },
        city: 'Dhaka'
    }
}
let user2 = {
    id:5001,
    name: 'Sabbir Hasan',
    address: {
        Location: "Uttara",
        city: 'Dhaka'
    }
}

console.log(user1.address.street.flat);
console.log(user2.address.street?.flat);



