valor1 = 9
valor2 = 354
valor3 = 156
if (valor1 > valor2 && valor1 > valor3){
    if(valor2>valor3){
        console.log(valor1, valor2, valor3)
    }else{
        console.log(valor1, valor3, valor2)
    }
}
if ( valor2 > valor1 && valor2 > valor3){
    if(valor1> valor3){
        console.log(valor2,valor1,valor3)
    }else{
        console.log(valor2, valor3, valor1)
    }
}
if(valor3>valor1 && valor3>valor2){
    if(valor1>valor2){
        console.log(valor3, valor1, valor2)
    }else {
        console.log(valor3, valor2, valor1 )
    }
}