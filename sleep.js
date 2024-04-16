async function sleep(millis) {
    return await new Promise((resolve, reject) =>
        setTimeout(resolve, millis)
    )
}
let t = Date.now();
sleep(200).then(()=>console.log(Date.now()-t));