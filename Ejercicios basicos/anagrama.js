
// function esAnagrama(p1, p2){
//     if(p1 === p2) return false;
//     if(p1.length !== p2.length) return false;

//     let ordenoP1 = p1.split("").sort().join("");
//     let ordenoP2 = p2.split("").sort().join("");
    
//     return ordenoP1 === ordenoP2 ? true : false;   
// }


//Usando conteo de frecuencia
function esAnagrama(p1, p2){
    if(p1 === p2) return false;
    if(p1.length !== p2.length) return false;
    let contador = {};

    for(let letra of p1){
        contador[letra] = ((contador[letra] || 0) + 1);
    }

    for(let letra2 of p2){
        if(!contador[letra2]) return false;
        contador[letra2]--;
    }

    return true;
}


console.log(esAnagrama("amor", "roma"));
// console.log(esAnagrama("rota", "otra"));
// console.log(esAnagrama("otra", "otra"));