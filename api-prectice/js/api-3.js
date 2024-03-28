const loadCountry = async(text) => {
    try{
        const url = `https://restcountries.com/v3.1/region/${text}`;
        const res = await fetch(url);
        const data = await res.json();
        disCun(data);
    }
    catch(error) {
        console.log(error);
    };
};

// loadCountry();

const disCun = (cuns) => {
    const cunList = document.getElementById('cun-list');
    cunList.innerText = '';
    cuns.forEach(cun => {
        // console.log(cun.capital);
        const li = document.createElement('li');
        li.innerHTML = `
        <li><a class="dropdown-item" href="#">${cun.name.common}</a></li>
        `;
        cunList.appendChild(li);
    });
};

const textValue = () => {
    const text = document.getElementById('search-inp').value;
    loadCountry(text);
};

document.getElementById('re-list').addEventListener('click', function(e) {
    const tar = e.target.innerText;
    // tar.innerText;
    loadCountry(tar);
});

// document.getElementById('cun-list').addEventListener('click', function(e) {
//     const tar = e.target.innerText;
//     console.log(tar);
// });

