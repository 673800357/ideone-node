const delay = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
         resolve()   
        }, 2000);
    })
}
delay().then(d =>console.log(111))

;(async () =>{
    await delay();
    console.log(23333)
})()