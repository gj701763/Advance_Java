let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         return res.json();
//     }).then((data) => {
//         console.log(data.fact);
//         return fetch(url);
//     }).then((res) => {
//         return res.json();
//     }).then((data) => {
//         console.log(data.fact);
//     }).catch((err) => {
//         console.log(err);
//     })


async function getData() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (e) {
        console.log(e);
    }
}

getData();