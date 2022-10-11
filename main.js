const data = [3, 2, 1,]


function sorted(arr) {
    const tmp = [...arr]
    tmp.sort()
    return tmp
}

console.log(
    sorted(data)
)