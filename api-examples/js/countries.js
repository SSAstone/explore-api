function loadCun() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCun(data))
};
loadCun();

const displayCun = (cun) => {
    const cunCon = document.getElementById('cun-con');
   
    cun.forEach(c => {
        console.log(c);
        const div = document.createElement('div');
        div.classList.add('cun-con-item')
        div.innerHTML = `
            <h3>Name: ${c.name.common}</h3>
            <p>Capital: ${c.capital ? c.capital[0] : 'No capital'}</p>
            <button onclick="loadCunDe('${c.cca2}')">Details</button>   
        `;
        cunCon.appendChild(div);

    });
};


const loadCunDe = code => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json())
    .then(data => displayCunDe(data[0]))
};

const displayCunDe = cun => {
    const countryDe = document.getElementById('country')
    countryDe.innerHTML = `
        <h3>Name: ${cun.name.common}</h3>
        <img src="${cun.flags.png}">
    `;
};