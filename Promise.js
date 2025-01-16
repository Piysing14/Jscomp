let firstPromise = new Promise((resolve,reject)=>{
    let a=true
    if(a)resolve("Promise fulfilled")
    else reject("Rejected")
  })
  
  firstPromise.then(message=>{
    console.log("got a message:"+ message)
  
  }).catch(error=>{
    console.log("got a message:"+ error)
  })
  