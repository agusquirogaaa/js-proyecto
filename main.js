let boton = $("#btn-dolar");


function crearCardResultados(equipo){

    let card = document.createElement("div");
    card.className = "card";
    let contenedorGeneral = $("#contenedorGeneral");

    let infoPartidos = `
            <div class="card-body">
                <h3 class="card-title">${equipo}</h3>
            </div>
    `
    
    card.innerHTML = infoPartidos;
    contenedorGeneral[0].appendChild(card);
}

let numeroRandom = () => {
    let numeroStep = Math.floor(Math.random() * (10 - 1) + 1);
    //para limitar el rango a 52
    let numero = numeroStep % 52;
    return numero;
}

let prueba = () => {
    $.ajax({
        async: false,
        headers: { 'X-Auth-Token': 'bfaaa1592fa244dda6a0391eb056a576' },
        url: 'https://api.football-data.org/v2/teams',
        dataType: 'json',
        type: 'GET',
    }).done(function(response) {
        let equipo = response.teams[numeroRandom()].name;
        crearCardResultados(equipo)
    });
}

boton.on("click", ()=>{
    prueba();
})