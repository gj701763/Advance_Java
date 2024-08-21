let url = "https://dog.ceo/api/breeds/image/random";



let btn = document.querySelector("button");
btn.addEventListener('click', async () => {
    let imgdaga = await getData();
    let img = document.querySelector("img");
    img.setAttribute("src", imgdaga);
    let a = document.querySelector("a");
    console.log(a.this);
    a.setAttribute("href", imgdaga);
    a.classList.add("px-3");
    a.innerText = imgdaga;
})

async function getData() {
    try {
        let res = await axios.get(url2);
        return res.data.message;

    } catch (e) {
        console.log("Error : - ", e);
    }
}

getData();