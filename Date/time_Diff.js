const startDate = new Date(2023, 0, 1);
const endDate = new Date(2023, 11, 31);
const timeDifference = endDate.getTime() - startDate.getTime(); // in milliseconds
console.log(timeDifference);