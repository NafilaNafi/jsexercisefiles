// let iAmGlobal = 'somevalue'

// if (true) {
//     var iamLocal = 'someMoreValue'
//     iAmGlobal = 'superman'
//     console.log(iAmGlobal);
//     console.log(iamLocal);
    
// }

// console.log(iamLocal);
// console.log(iAmGlobal);


//kings problem

let king = 'john'

if (true) {
    let king = 'Sam'

    if (true) {
        let king = 'Ram'
        console.log(king);

    }
}

if (true) {
    console.log(" I am second part" + king);
    
}
