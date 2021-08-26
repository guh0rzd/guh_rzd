function calcular(){
    var a = window.document.getElementById('na')
    var b = window.document.getElementById('nb')
    var c = window.document.getElementById('nc')
    var na = Number(a.value)
    var nb = Number(b.value)
    var nc = Number(c.value)
    var delta =  nb * nb - 4 * na * nc
    
    if  (na == 0){
    window.alert( "o valor de A não pode ser 0")
    exit()
    
} else if (delta < 0) {
    window.alert("Sem raízes reais")
    res.innerHTML = `Delta = ${delta}`
    res1.innerHTML = `Valor de x1 invalido`
    res2.innerHTML = `Valor de x2 invalido` 
    exit()
} else {
        
const x1 = (-nb + Math.sqrt(delta)) / (2 * na);
const x2 = (-nb - Math.sqrt(delta)) / (2 * na);

res.innerHTML = `Delta = ${delta}`
res1.innerHTML = `Valor de x1 = ${x1}`
res2.innerHTML = `Valor de x2 = ${x2}`   
return;
}
}
