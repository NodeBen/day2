const myPromise = new Promise(function(resolve,reject) {
    
    setTimeout(() => {
        resolve('fine 1');
    }, 1000);

})
.then(function whenOk(response) {
    
    console.log("log 1",response);

    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            resolve('fine 2');
        },1000);
    })
    .then(function whenOk(response) {
        
        console.log("log 3",response);
        return response;
    
    }) 
})
.then(function whenOk(response) {
    
    console.log("log 2",response);
    return response;

})
.catch(function notOk(err) {
    console.error(err);
})