function addToNum(num){
    let sum = 0
    for(let i = 0; i<= num; i++){
        sum += i
    }

    return sum;
}

let t1 = performance.now()
console.log(addToNum(1000000000))
let t2 = performance.now
console.log(`Time elapsed: ${(t2-t1)/1000} seconds.`)