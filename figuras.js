//Código del Cuadrado
console.group("Cuadrado");

    // const ladoCuadrado = 5;
    // console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

    function perimetroCuadrado(lado) {
        return lado * 4 + " cm";
    } 
    // console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

    function areaCuadrado (lado) {
        return lado * lado + " cm²";      
    }
    // console.log("El área del cuadrado es: " + areaCuadrado + "cm²");

console.groupEnd();

//Código del Triángulo
console.group("Triángulo");

    // const ladoTriangulo1 = 6;
    // const ladoTriangulo2 = 6;
    // const ladoTriangulo3 = 4;

    // console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + ladoTriangulo3 + "cm");

    // const alturaTriangulo = 5.5;
    // console.log("El altura del triángulo es: " + alturaTriangulo + "cm");

    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }
    // console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

    function areaTriangulo(base, altura) {
        return (base * altura)/2;
    }
    // console.log("El área del triángulo es: " + areaTriangulo + "cm²");

console.groupEnd();

//Código del Círculo
console.group("Círculo");

//  const radioCirculo  = 4;
    function diametroCirculo(radio) {
        return radio * 2;
    }

    const pi = Math.PI;

    console.log("PI es: " + pi)

    function perimetroCirculo (radio) {
        const diametro = diametroCirculo(radio);
        return diametro * pi;
    }

//    console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

    function areaCirculo (radio) {
         return (radio * radio) * pi;
    }
//    console.log("El área del círculo es: " + areaCirculo + "cm²");

console.groupEnd();

//Código del triángulo isosceles

function alturaIsosceles(lados, base) {
    return (Math.sqrt(Math.pow(lados,2)-(Math.pow(base,2)/4)));
}

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo() {

    const input1 = document.getElementById("lado1");
    const valueLado1 = Number(input1.value);    
    const input2 = document.getElementById("lado2");
    const valueLado2 = Number(input2.value);    
    const input3 = document.getElementById("base");
    const valueBase = Number(input3.value);    


    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro)
}
function calcularAreaTriangulo() {

    const input3 = document.getElementById("base");
    const valueBase = input3.value;    
    const input4 = document.getElementById("altura");
    const valueAltura = input4.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area)
    

}


function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo (value);
    alert (perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}

function calcularAlturaIsosceles() {
    const input = document.getElementById("isoLadosIguales");
    const valueL =  input.value;    
    const input2 = document.getElementById("isoBase");
    const valueB = input2.value;

    const altura = alturaIsosceles(valueL, valueB);
    alert(altura);
}