const loadUserBtn = document.getElementById('load-users');
const USER_URL = "https://jsonplaceholder.typicode.com/users"
var listElements;


const loadUserNames = () => {
    fetch(USER_URL)
    .then(response =>response.json())
    .then(responseJson => {
        listElements = responseJson;
        renderNames(listElements);
     })
}

function renderNames(listElements){
    const ulist = document.getElementById('ulist');
    const listDiv = document.getElementById('list');
    ulist.innerHTML = "";
    
    for (let i=0; i < listElements.length; i ++){
        const userNames = document.createElement('li');
        userNames.innerText = listElements[i].name;
        ulist.appendChild(userNames);
    }
    listDiv.appendChild(ulist);
}



//alternative
loadUserBtn.addEventListener('click' , () => { loadUserNames(); });
