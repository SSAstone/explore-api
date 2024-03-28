function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display(data))
};
function display(jata) {
    const ul = document.getElementById('users-email-list');
    for(const user of jata) {
        // console.log(user.email);
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
    };
};