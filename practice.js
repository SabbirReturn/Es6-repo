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

console.log(data.Sophia.study[1].secondary[1].location)