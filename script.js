function converter(){
    var moeda = Number(document.querySelector('#moeda1').value)
    var unidade1 = document.querySelector('#unidade1').value
    var unidade2 = document.querySelector('#unidade2').value
    var resultado = document.querySelector('#resultado')

    if(unidade1 == "reais"){
        conversorReal(unidade2, moeda, resultado)
    }else if(unidade1 == "dolar" ){
        conversorDolar(unidade2, moeda, resultado)
    }else if(unidade1 == "euro"){
        conversorEuro(unidade2, moeda, resultado)
    }else if(unidade1 == "bitcoin"){
        conversorBitcoin(unidade2, moeda, resultado)
    }
}

function conversorReal(unidade2, moeda, resultado){
    if(unidade2 == "dolar"){
        var dolar = moeda * 5.29
        resultado.innerHTML = `R$${moeda.toFixed(2).replace(".",",")} é igual à US$${dolar.toFixed(2).replace(".",",")}`
    }else if(unidade2 == "euro"){
        var euro = moeda * 6.20
        resultado.innerHTML = `R$${moeda.toFixed(2).replace(".",",")} é igual à &euro;${euro.toFixed(2).replace(".",",")}`
    }else if(unidade2 == "bitcoin"){
        var bitcoin = moeda * 249486.71
        resultado.innerHTML = `R$${moeda.toFixed(2).replace(".",",")} é igual à &#8383;${bitcoin.toFixed(2).replace(".",",")}`
    }else{
        resultado.innerHTML = `R$${moeda.toFixed(2).replace(".",",")} é igual à R$${moeda.toFixed(2).replace(".",",")}`
    }
}

function conversorDolar(unidade2, moeda, resultado){
    if(unidade2 == "reais"){
        var reais = moeda / 5.29
        resultado.innerHTML = `US$${moeda.toFixed(2).replace(".",",")} é igual à R$${reais.toFixed(2).replace(".",",")}`
    }else if(unidade2 == "euro"){
        var euro = moeda / 1.17
        resultado.innerHTML = `US$${moeda.toFixed(2).replace(".",",")} é igual à &euro;${euro.toFixed(2).replace(".",",")}`
    }else if(unidade2 == "bitcoin"){
        var bitcoin = moeda / 47505.20
        resultado.innerHTML = `US$${moeda.toFixed(2).replace(".",",")} é igual à &#8383;${bitcoin.toFixed(6).replace(".",",")}`
    }else{
        resultado.innerHTML = `US$${moeda.toFixed(2).replace(".",",")} é igual à US$${moeda.toFixed(2).replace(".",",")}`
    }
}

function conversorEuro(unidade2, moeda, resultado){
    if(unidade2 == "reais"){
        var reais = moeda / 6.20
        resultado.innerHTML = `&euro;${moeda.toFixed(2).replace(".",",")} é igual à R$${reais.toFixed(2).replace(".",",")}`
    }else if(unidade2 == "dolar"){
        var euro = moeda * 1.17
        resultado.innerHTML = `&euro;${moeda.toFixed(2).replace(".",",")} é igual à US$${euro.toFixed(2).replace(".",",")}`
    }else if(unidade2 == "bitcoin"){
        var bitcoin = moeda / 40403.11
        resultado.innerHTML = `&euro;${moeda.toFixed(2).replace(".",",")} é igual à &#8383;${bitcoin.toFixed(6).replace(".",",")}`
    }else{
        resultado.innerHTML = `&euro;${moeda.toFixed(2).replace(".",",")} é igual à &euro;${moeda.toFixed(2).replace(".",",")}`
    }
}

function conversorBitcoin(unidade2, moeda, resultado){
    if(unidade2 == "reais"){
        var reais = moeda / 249486.71
        resultado.innerHTML = `&#8383;${moeda.toFixed(2).replace(".",",")} é igual à R$${reais.toFixed(6).replace(".",",")}`
    }else if(unidade2 == "dolar"){
        var dolar = moeda * 47505.20
        resultado.innerHTML = `&#8383;${moeda.toFixed(2).replace(".",",")} é igual à US$${dolar.toFixed(2).replace(".",",")}`
    }else if(unidade2 == "euro"){
        var bitcoin = moeda * 40403.11
        resultado.innerHTML = `&#8383;${moeda.toFixed(2).replace(".",",")} é igual à &euro;${bitcoin.toFixed(2).replace(".",",")}`
    }else{
        resultado.innerHTML = `&#8383;${moeda.toFixed(2).replace(".",",")} é igual à &#8383;${moeda.toFixed(2).replace(".",",")}`
    }
}