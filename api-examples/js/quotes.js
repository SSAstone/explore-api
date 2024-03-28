function loadQuotes() {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
};

// function displayQuotes(data) {
//     const quo = document.getElementById('quotes');
//     quo.innerText = data.quote;
// };

const displayQuotes = data => {
    const quo = document.getElementById('quotes');
    quo.innerText = data.quote;
};

function loadUser() {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
};

const displayUser = data => {
    const use = document.getElementById('user');
    use.innerText = data.results[0].name.first + '' + data.results[0].name.last;
    // console.log(data)
    // document.getElementById('images').innerText = data.results[0].picture.large;
    const img = document.getElementById('images');
    img.setAttribute('src', data.results[0].picture.large);
    document.getElementById('location').innerText = data.results[0].location.city;
};
// loadUser()
