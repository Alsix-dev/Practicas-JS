
function esAnagrama(p1, p2){
    if(p1 === p2) return false;
    if(p1.length !== p2.length) return false;

    let ordenoP1 = p1.split("").sort().join("");
    let ordenoP2 = p2.split("").sort().join("");
    
    return ordenoP1 === ordenoP2 ? true : false;   
}

console.log(esAnagrama("amor", "roma"));
console.log(esAnagrama("rota", "otra"));
console.log(esAnagrama("otra", "otra"));