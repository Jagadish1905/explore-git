let ram = async () => {

    return new Promise((res, rej) => {
        res("hello world")
    })
}
console.log(ram())
ram().then((res) => console.log(res))

// let p = new Promise((resolve, reject) => {
//     resolve("hello world!")
// })

// console.log(p)

// p.then((res) => console.log(res))

