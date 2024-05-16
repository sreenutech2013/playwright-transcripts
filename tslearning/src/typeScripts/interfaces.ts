// interface car {

//     function abc{

//     }

//     function xyz{

//     }
// }

// class newCar implements car{

//     abc{
    
// }
    
// xyz{

// }
// }
// }



export interface empData {
    empName: string,
    empDesg: string,
    empNumber: number
}

export let emp: empData = {
    empName: "Kumar",
    empDesg: "SE",
    empNumber: 123123
}

console.log(emp)