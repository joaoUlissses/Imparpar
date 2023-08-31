n1 = 2
n2 = 2

// teste de par ou impar 
if (n1%2 == 0){
    console.log(n1 +" par")
}else{
    console.log(n1 +" impar")
}if (n2%2 == 0){
    console.log(n2 +" par")
}else{
    console.log(n2 +" impar")
}
//teste de positivo negativo 
if (n1 >0){
    console.log(n1 +" é positivo")
}else{
    console.log(n1 + " é negativo")
}if (n2 >0){
    console.log(n2 +" é positivo")
}else{
    console.log(n2 + " é negativo")
}
// teste de inteiro ou decimal 
if (Number.isInteger(n1)){
    console.log(n1 +" é inteiro")
} else {
    console.log(n1+ " é decimal")
}if (Number.isInteger(n2)){
    console.log(n2 +" é inteiro")
} else {
    console.log(n2 + " é decimal")
}