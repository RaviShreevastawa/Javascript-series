const promiseOne = new Promise(function(resolve, reject) {
    // Do an async Task
    // Db calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task two');
        resolve()
    },1000)
}).then(function(){
    console.log('Async Two Resolved')
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Ranjan", password : '1233456'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Ranjan", password : '1233456'})
    },1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log("The Promise is either resolve or rejected"))