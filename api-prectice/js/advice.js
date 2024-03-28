const loadAdvice = async() => {
    try{
        const url = 'https://api.adviceslip.com/advice';
        const res = await fetch(url);
        const data = await res.json();

        document.getElementById('advice').innerText = data.slip.advice;
        document.getElementById('ad-id').innerHTML = `
            <p>Advice # ${data.slip.id}</p>
        `;
    }
    catch(error) {
        console.log(error);
    };
};

loadAdvice();

