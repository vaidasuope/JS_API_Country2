"use strict"

const paimtiDuomenis = fetch(`https://restcountries.eu/rest/v2/all`);
paimtiDuomenis.then(gautiAtsakyma => {
    return gautiAtsakyma.json();
})
    .then(saliuDuomenys => {
        console.log(saliuDuomenys);
        saliuDuomenys.forEach(saliesVardas => {
            console.log(saliesVardas.name);
            console.log(saliesVardas.flag);

            const vieta = document.getElementById("vieta");
            const saliesVieta = document.createElement("div");
            const foto = document.createElement("img");
            foto.src=saliesVardas.flag;
            foto.innerHTML=foto;

            const pavadinimas = document.createElement("h4");
            pavadinimas.innerHTML=saliesVardas.name;
            pavadinimas.style.textTransform="uppercase";
            pavadinimas.style.textAlign="center";

            vieta.appendChild(saliesVieta);
            saliesVieta.appendChild(foto);
            saliesVieta.appendChild(pavadinimas);
        });
    })