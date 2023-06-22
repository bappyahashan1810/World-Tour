const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
function displayCountry(data) {
    console.log(data);
    const countryContainer = document.getElementById('country-id');
    data.forEach(x => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <img src = '${x.flags.png} ' >
        <h2> Name : ${x.name.common} </h2>
        <p>Region : ${x.region}</p>
        <p>Capital: ${x.capital ? x.capital[0] : 'No capital'};

        `;
        countryContainer.appendChild(div);
    })

}


loadCountry();