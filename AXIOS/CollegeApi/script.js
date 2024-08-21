let url = "http://universities.hipolabs.com/search?name=";


let btn = document.querySelector("button");
btn.addEventListener('click', async () => {
    let country = document.querySelector("input").value;
    let colArr = await getData(country);
    console.log(colArr);
    show(colArr);
});


function show(colArr) {
    let list = document.getElementById("list");
    list.innerText = "";
    for (col of colArr) {
        let li = document.createElement("li");
        li.innerHTML = col.name;
        list.appendChild(li);
    }
}


async function getData(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;

    } catch (e) {
        console.log("Error : - ", e);
        return [];
    }
}