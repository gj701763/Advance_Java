const today = new Date();

// today date
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// today time

const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

let date = `${day}/${month}/${year}`;
let time = `${hours}:${minutes}:${seconds}`;

console.log(date);
console.log(time);