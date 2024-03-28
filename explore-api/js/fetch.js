// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch('')  


function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(response => response.json())
    .then(data => addData(data));
};
function addData(data) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(bata => console.log(bata));
    // console.log(data);
};