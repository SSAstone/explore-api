const loadText = async (text) => {
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
        const data = await res.json();
        loadDisplay(data[0]);
    }
    catch (error) {
        console.log(error);
    };

};


const searchText = () => {
    const search = document.getElementById('inpText').value;
    loadText(search);
};

const loadDisplay = (data) => {
    console.log(data.phonetics[0].audio)
    const dis = document.getElementById('display');
    dis.innerText = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <h3>word: ${data.word}</h3> 
        <h3>phonetics: ${data.meanings[0].synonyms[0].antonyms ? data.meanings[0].synonyms[0].antonyms : 'no phonetics'}</h3> 
        <audio controls>
//   <source src="horse.ogg" type="audio/ogg">
  <source src="${data.phonetics[1].audio}" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
        <h3>partOfSpeech: ${data.meanings[0].partOfSpeech}</h3>
        <h3>synonyms: ${data.meanings[0].synonyms[0] ? data.meanings[0].synonyms[0] : 'no synonyms'}</h3>
        <h3>antonyms: ${data.meanings[0].antonyms[0] ? data.meanings[0].antonyms[0] : 'no antonyms'}</h3>

    `;
    dis.appendChild(div);
};
