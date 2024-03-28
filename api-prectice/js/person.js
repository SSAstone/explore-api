
const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};
function personIs(p) {
    const name = document.getElementById('person-1');
    name.innerHTML = `
        <p>Person name: ${p.result[0].name.fullName[0] + '' + person.result[0].name.fullName[1]}</p>
        <p>age: ${p.result[0].age}</p>
        <p>street: ${p.result[0].address.street}</p>
    `;
    const name2 = document.getElementById('person-2');
    name2.innerHTML = `
        <p>Person name: ${p.result[1].name.fullName[0] + '' + person.result[0].name.fullName[1]}</p>
        <p>age: ${p.result[1].age}</p>
        <p>street: ${p.result[1].address.street}</p>
    `;
};
personIs(person);
