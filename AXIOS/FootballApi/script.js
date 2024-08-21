let url = "https://dummyjson.com/users/search?id=";

let id = 1;
async function getData() {
    try {
        let res = await axios.get(url + id);
        console.log(res.data.users);
    } catch (e) {
        console.log("Error : -", e);
    }
}

getData();