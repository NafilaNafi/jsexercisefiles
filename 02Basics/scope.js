let iAmGlobal = 'somevalue'

if (true) {
    let iamLocal = 'someMoreValue'
    iAmGlobal = 'superman'
    console.log(iAmGlobal);
    console.log(iamLocal);
    
}

// console.log(iamLocal);
console.log(iAmGlobal);
