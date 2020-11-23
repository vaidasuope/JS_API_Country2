"use strict"

console.log("pradzia");

duomenuFunkcija();

async function duomenuFunkcija() {
    try {
        const gautiDuomenis = await fetch(`https://restcountries.eu/rest/v2/all`);
        const saliusDuomenys = await gautiDuomenis.json();

        saliusDuomenys.forEach(saliesVardas => {
            console.log(saliesVardas.name);
            console.log(saliesVardas.flag);

            const vieta = document.getElementById("vieta");
            const vieta2 = document.getElementById("vieta2");
            const saliesVieta = document.createElement("div");
            const foto = document.createElement("img");
            foto.src = saliesVardas.flag;
            foto.innerHTML = foto;

            const pavadinimas = document.createElement("h4");
            pavadinimas.innerHTML = saliesVardas.name;
            pavadinimas.style.textTransform = "uppercase";
            pavadinimas.style.textAlign = "center";

            vieta.appendChild(saliesVieta);
            saliesVieta.appendChild(foto);
            saliesVieta.appendChild(pavadinimas);

            const mygtukas=document.getElementById("button");
            mygtukas.addEventListener("click", pradeti);

            function pradeti (){
                const vieta = document.getElementById("vieta");
                const vestiPav = document.getElementById("ieskoti"); //reset idet reikes dar
                if (vieta.style.display="flex"){
                    vieta.style.display="none";
                    mygtukas.value="Search";
                    vestiPav.style.display="flex";
                    const saliesPav = vestiPav.value;
                    if (saliesPav == saliesVardas.name){
                        console.log(saliesPav);
                        console.log(saliesVardas.flag);
                        foto.src = saliesVardas.flag;
                        foto.innerHTML = foto;
                        pavadinimas.innerHTML = saliesVardas.name;
                        pavadinimas.style.textTransform = "uppercase";

                        vieta2.appendChild(saliesVieta);
                        saliesVieta.appendChild(foto);
                        saliesVieta.appendChild(pavadinimas);
                    }
                }
                else {
                    alert("Not possible to load the data!")
                }
            }

        });

    } catch (klaida) {
        alert("Klaida! Neužkrauna duomenų!")
        console.log("Neužkrauna duomenų!");
    }
}

// const mygtukas=document.getElementById("button");
// mygtukas.addEventListener("click", pradeti);
//
// function pradeti (){
//     const vieta = document.getElementById("vieta");
//     const vestiPav = document.getElementById("ieskoti");
//     if (vieta.style.display="flex"){
//         vieta.style.display="none";
//         mygtukas.value="Search";
//         vestiPav.style.display="flex";
//     }
//     else {
//         alert("Nepavyko užkrauti!")
//     }
// }



console.log("pabaiga");








