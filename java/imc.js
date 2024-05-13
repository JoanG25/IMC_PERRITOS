function imc(){
    let p = parseFloat( document.getElementById("p").value)
    let e = parseFloat( document.getElementById("e").value)
    let res= p/(e*e)
    let total = ""
    if (res<18.5) {
        total = "Infrapeso"
    }
    else if (res>=18.5 && res<=24.9) {
        total = "Peso Ideal"
    }
    else if (res>=25 && res<=30) {
        total = "Sobrepeso"
    }
    document.getElementById("res").innerHTML=res.toFixed(2)
    document.getElementById("est").innerHTML=total
  }