function minimumDistances(a) {
    var aLength = a.length - 1
    var minimumDistance = 10000
    for (var i = 0; i < aLength; i++) {
        var temp = a[0]
        console.log(temp)
        a.shift()
        console.log(a)
        console.log(a.indexOf(temp))
        var indexOfTemp = a.indexOf(temp)
        if (indexOfTemp < minimumDistance && indexOfTemp !== -1) {
            minimumDistance = indexOfTemp + 1
            console.log(minimumDistance)
        }
    }
    if (minimumDistance == 10000) { minimumDistance = -1 }
    return minimumDistance
}

var a = [7, 1, 3, 4, 1, 7]
console.log(minimumDistances(a))