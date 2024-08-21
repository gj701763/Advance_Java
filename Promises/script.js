// function saveToDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 5) {
//         success();
//     } else {
//         failure();
//     }
// }


// saveToDB("Gajanan Jadhav", () => {
//     console.log("success : Save to data to database");
//     saveToDB("Raje", () => {
//         console.log("success : Save to data to database");
//         saveToDB("Jadhav", () => {
//             console.log("success : Save to data to database");
//         }, () => {
//             console.log("failure : Unable to save data to database");
//         });
//     }, () => {
//         console.log("failure : Unable to save data to database");
//     });
// }, () => {
//     console.log("failure : Unable to save data to database");
// });



function saveToDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : Save to data to database");
        } else {
            reject("failure : Unable to save data to database");
        }
    });
}

saveToDB("Gajanan Jadhav")
    .then((result) => {
        console.log(result);
        console.log("data1 saved");
        return saveToDB("Raje");
    }).then((result) => {
        console.log(result);
        console.log("data2 saved");
        return saveToDB("Jadhav");
    }).then((result) => {
        console.log(result);
        console.log("data3 saved");
    })
    .catch((err) => {
        console.log(err);
        console.log("failure database");
    })