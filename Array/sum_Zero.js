let arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4];


function sumZero(arr) {
    for (number of arr) {
        for (let i = 1; i < arr.length; i++) {
            if (number + arr[i] === 0) {
                return [number, arr[i]];
            }
        }

    }
}

let result = sumZero(arr);
console.log(result);