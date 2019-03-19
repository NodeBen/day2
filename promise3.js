const myPromise = new Promise(function(resolve,reject) {
    
    setTimeout(() => {
        resolve('fine 1');
    }, 1000);

    
})
.then(function whenOk(response) {
    
    console.log("log 1",response);
    return "lol";
})
.then(function whenOk(response) {
    
    console.log("log 2",response);
    reject("bug");

})
.then(function whenOk(response) {
    
    console.log("log 3",response);

})
.catch(function notOk(err) {
    console.error(err);
})