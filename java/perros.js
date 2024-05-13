function formula(){
    let p = parseFloat( document.getElementById("p").value)
    let c
    if (p<=1) {
        c= 16 * Math.log(p) + 31
    }
    else if (p>1) {
        c= 4 * (p - 2) + 21
    }
    document.getElementById("res1").innerHTML=c.toFixed(1)
}

function sieteaños(){
    let p = parseFloat( document.getElementById("p").value)
    let c = p+7
    document.getElementById("res2").innerHTML=c.toFixed(1)
}
