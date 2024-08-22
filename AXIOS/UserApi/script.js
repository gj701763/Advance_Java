let urlBase = "https://dummyjson.com/users/search?id=";
let btn = document.querySelector("button");
let form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    let searchInput = document.getElementById("default-search").value;
    let url = urlBase + searchInput;
    await show(url, searchInput);
});

async function show(url, searchInput) {
    let ul = document.querySelector("ul");
    ul.innerHTML = ""; // Clear previous results
    let data = await getData(url);
    if (data && data.length > 0) {

        let col = data[searchInput - 1];
        let li = document.createElement("li");
        li.classList.add("flex", "justify-center", "items-center", "flex-col", "gap-10", "w-full", "h-screen", "bg-white", "p-4", "rounded", "shadow");
        li.innerHTML = `
                <img src="${col["image"]}" class="w-[100px] h-[100px] text-center rounded-full" />
            <div class="grid grid-cols-7  gap-3 w-full">
                
                    <span class="font-bold border p-2 w-full border-gray-600">ID: ${col.id}</span>
                    <span class="font-bold border p-2 w-full border-gray-600  col-span-2">Name: ${col["firstName"]} ${col["lastName"]}</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-2">Birthday: ${col["birthDate"]}</span>
                    <span class="font-bold border p-2 w-full border-gray-600">Age: ${col["age"]}</span>
                    <span class="font-bold border p-2 w-full border-gray-600">Gender: ${col["gender"]}</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-2">Phone: ${col["phone"]}</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-2">Eye Color: ${col["eyeColor"]}</span>
                    <span class="font-bold border p-2 w-full border-gray-600">Height: ${col["height"]}</span>
                    <span class="font-bold border p-2 w-full border-gray-600">Weight: ${col["weight"]}</span><span class="font-bold border p-2 w-full border-gray-600">Role: ${col.role}</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-4">Bank: ${col.bank.cardType} - ${col.bank.cardNumber} (Expires: ${col.bank.cardExpire})</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-3">University: ${col["university"]}</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-3">Email: ${col["email"]}</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-2">Password: ${col["password"]}</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-2">Hair Color: ${col.hair.color} (${col.hair.type})</span>              
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-4">Address: ${col.address.address}, ${col.address.city}, ${col.address["state"]} - ${col.address["city"]},${col.address.country}</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-1">StateCode: ${col.add.stateCode}</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-2">SSN: ${col.ssn}</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-start-1 col-end-7">Cryptocurrency:${col.crypto.coin} (Wallet: ${col.crypto.wallet}, Network: ${col.crypto.network})</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-1">IP: ${col.ip}</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-5">Company:  ${col.company.name} (${col.company.department}, ${col.company.title})</span>
                    <span class="font-bold border p-2 w-full border-gray-600 col-span-2">Domain: ${col.crypto.coin}</span>

            </div>
            `;
        // li.innerHTML = `
        // <img src="${user.image}" class="w-[100px] h-[100px] text-center rounded-full mb-4" alt="User Image" />
        // <h2 class="text-xl font-bold">${user.firstName} ${user.lastName}</h2>
        // <p><strong>ID:</strong> ${user.id}</p>
        // <p><strong>Username:</strong> ${user.username}</p>
        // <p><strong>Email:</strong> ${user.email}</p>
        // <p><strong>Phone:</strong> ${user.phone}</p>
        // <p><strong>Gender:</strong> ${user.gender}</p>
        // <p><strong>Age:</strong> ${user.age}</p>
        // <p><strong>Birth Date:</strong> ${user.birthDate}</p>
        // <p><strong>Blood Group:</strong> ${user.bloodGroup}</p>
        // <p><strong>Eye Color:</strong> ${user.eyeColor}</p>
        // <p><strong>Hair Color:</strong> ${user.hair.color} (${user.hair.type})</p>
        // <p><strong>Address:</strong> ${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.country}</p>
        // <p><strong>University:</strong> ${user.university}</p>
        // <p><strong>Company:</strong> ${user.company.name} (${user.company.department}, ${user.company.title})</p>
        // <p><strong>Bank:</strong> ${user.bank.cardType} - ${user.bank.cardNumber} (Expires: ${user.bank.cardExpire})</p>
        // <p><strong>Cryptocurrency:</strong> ${user.crypto.coin} (Wallet: ${user.crypto.wallet}, Network: ${user.crypto.network})</p>
        // <p><strong>Role:</strong> ${user.role}</p>`;
        ul.appendChild(li);
    } else {
        ul.innerHTML = "<li>No users found.</li>";
    }
};

async function getData(url) {
    try {
        let res = await axios.get(url);
        return res.data.users;
    } catch (e) {
        console.log("Error:", e);
        return [];
    }
}