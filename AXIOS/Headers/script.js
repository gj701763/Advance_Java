let url = "https://icanhazdadjoke.com/";


let btn = document.querySelector("button");
btn.addEventListener('click', async () => {
    let imgdata = await getJokes();
    let a = document.querySelector("a");
    a.classList.add("p-5");
    a.innerText = imgdata;
})

async function getJokes() {
    try {
        const config = {
            headers: {
                Accept: "application/json"
            }
        };
        let res = await axios.get(url, config);
        return res.data.joke;
    } catch (e) {
        console.log(e);
    }
}

getJokes();