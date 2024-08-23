let arr = [-5, 4, -3, -2, -1, 0, 1, 2, 3, 4];
let target = Math.floor(Math.random() * 10) + 1;

function sumZero(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

let result = sumZero(arr, target);
console.log(result)