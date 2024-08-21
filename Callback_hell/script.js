let h1 = document.querySelector("h1");

// let arr = ["red", "orange", "blue", "yellow", "green", "violet"];

// function randomColor(arr) {
//     let rIndex = Math.floor(Math.random() * arr.length);
//     return arr[rIndex];
// }

// let colors = randomColor(arr);

// Outputs a random color from the array
//console.log(colors);

// CallBack Hell

// function changeColor(color, delay, nextchangeColor) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextchangeColor) nextchangeColor();
//     }, delay);
// }

// Promises

function changeColor(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, delay);
    })
}

changeColor("red", 1000).then(() => {
    return changeColor("blue", 1000);
}).then(() => {
    return changeColor("green", 1000);
}).then(() => {
    return changeColor("yellow", 1000);
}).then(() => {
    return changeColor("violet", 1000);
})

// changeColor("red", 1000, () => {
//     changeColor("blue", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("violet", 1000);
//             });
//         })
//     });
// });