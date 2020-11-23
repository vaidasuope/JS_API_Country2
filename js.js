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
                const vestiPav = document.getElementById("ieskoti");
                const vieta2 = document.getElementById("vieta2")
                if (vieta.style.display="flex"){
                    vieta.style.display="none";
                    mygtukas.value="Search";
                    vestiPav.style.display="flex";
                    const saliesPav = vestiPav.value;
                    if ((saliesPav == saliesVardas.name) && (vieta2.style.display="none")){
                        vieta2.style.display="flex";
                        const foto1 = document.getElementById("photo").src = saliesVardas.flag;
                        const pavadinimas1 = document.getElementById("pavadinimas").innerHTML=saliesVardas.name;
                        vestiPav.value="";
                    }
                }
            }
            const mygtukas2=document.getElementById("button1");
            mygtukas2.addEventListener("click", grizti);

            function grizti(){
                if ((vieta.style.display="none") && (vieta2.style.display="flex")){
                    vieta.style.display="flex";
                    vieta2.style.display="none";
                }
                else {
                    alert("Error");
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








