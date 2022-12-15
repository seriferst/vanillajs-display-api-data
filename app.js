const loadUserBtn = document.getElementById('loadUsers');
const searchBox = document.getElementById('search');
let listElements;

const loadUserNames = () => {
    const USER_URL = "https://jsonplaceholder.typicode.com/users"; 

    fetch(USER_URL)
    .then(response =>response.json())
    .then(responseJson => {
        listElements = responseJson;
        renderNames(listElements);
     })
}

function renderNames(listElements) {
    const ulist = document.getElementById('uList');
    const listDiv = document.getElementById('list');
    ulist.innerHTML = "";
    
    for (let i=0; i < listElements.length; i ++){
        const userNames = document.createElement('li');
        userNames.innerText = listElements[i]?.name;
        ulist.appendChild(userNames);
    }
    listDiv.appendChild(ulist);
}

function searchName() {
    searchBox.removeAttribute("hidden");
}


function findName() {
    let value = searchBox.value;
    const filteredList = listElements.filter(n =>  n?.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    renderNames(filteredList);
}

loadUserBtn.addEventListener('click' , () => { loadUserNames(); });
