
export function counter(num) {
    let count = 0
    return function(){
        count += num
        console.log("Counter =", count)
        title.innerText = count
    }
}