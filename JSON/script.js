//JSON.stringify (JSON) method to parse a js oject data into json data

let api = {
    "fact": "In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.",
    "length": 158
};


let japi = JSON.stringify(api);
console.log(japi);


// JSON.parse (data) method to parse a string data into a js object


let api2 = '{"fact":"In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.","length":158}';

let japi2 = JSON.parse(api2);
console.log(japi2);