function addToNum(num){
    return num * (num +1)/ 2
}

t1 = performance.now()
console.log(addToNum(1000000000))
t2 = performance.now()
console.log(`Time elapsed: ${(t2-t1)/1000} seconds.`)