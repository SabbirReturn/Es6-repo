let data = {
    Sophia: {
        id:33,
        study:
        [
            {
                primary:
                [
                    {school_name: 'ABC primary school'},
                    {location:'Peters burg'}
                ]
            },
            {
                secondary:
                [
                    {school_name:'Abc secondary school'},
                    {location:'St lorence'}
                ]
            }
        ]
    }
}

// console.log(data.Sophia.study[1].secondary[1].location)


// let student = {
//     2222:{
//         name:'Jack',
//         section:'c',
//         class:'IX',
//         address:{
//             'building no':12,
//             'street': 'St jonson',
//             'city':'Petersburg',
//             'country':'UK'
//         }
//     },
//     3333:{
//         name:'Herry',
//         section:'D',
//         class:'X',
//         address:{
//             'bulding no': 85,
//             'street': 'DC road',
//             'City': ' kachukhet',
//             'Country': 'Bangladesh'
//         }
//    }
// }
// // console.log(student['2222'].address['city']);
// console.log(student['3333'].name)
let student = {
    2222:{
        name:'Jack',
        section:'c',
        class:'IX',
        address:{
            'building no':12,
            'street': 'St jonson',
            'city':'Petersburg',
            'country':'UK'
        }
    },
    3333:{
        name:'Herry',
        section:'D',
        class:'X',
        address:{
            'bulding no': 85,
            'street': 'DC road',
            'City': ' kachukhet',
            'Country': 'Bangladesh'
        }
   }
}
// console.log(student['2222'].address['city']);
console.log(student['3333'].name)