function sumar() {
    let n1, n2, suma;

    alert("Este algoritmo suma dos numeros ingresados por el usuario");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));


    suma = n1 + n2;

    alert("El resultado de la suma es:"+ suma);
}   

function operacionesBasicas(){

    let n1 ,n2, s, r, m, d;

    alert("Este algoritmo realizara operaciones basicas");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));

    s = n1 + n2;
    r = n1 - n2;
    m = n1 * n2;
    d = n1 / n2;

    alert("El resultado de la suma es:"+ s);
    alert("El resultado de la resta es:"+ r);
    alert("El resultado de la multiplicacion es:"+ m);
    alert("El resultado de la division es:"+ d);
}

function ConversionLongitud(){
    
    let cm, m ,km;
    
    alert("Este algoritmo realizara la conversion de metros a centimetros y kilometros");
    m = parseFloat(prompt("Ingrese los metros"));

    cm = m * 100;
    km = m / 1000;

     alert("El resultado en centimetros es: "+ cm);
     alert("El resultado en kilometros es: "+ km);
}

function ConversionTemperatura(){

     let t, f, k;

     alert("Este algoritmo realizara la conversion de grados Celsius convertida en Fahrenheit y Kelvin");
     t = parseFloat(prompt("Ingrese los grados Celsius"));

     f = (t * 1,8) + 32;
     k = t + 273,15;

     alert("El resultado en Grados Fahrenhei es: "+ f);
     alert("El resultado en Grados Kelvin es: "+ k);
}

function AreaPerimetro(){

    let al, p, b, a;

    alert("Este algoritmo determinara el area y el perimetro de un rectangulo");
    b = parseFloat(prompt("Ingrese la base del rectangulo"));
    al = parseFloat(prompt("Ingrese la altura del rectangulo"));

    p = 2 * (b + al);
    a = b * al;

    alert("El perimetro del rectangulo es: "+ p);
    alert("El area del rectangulo es: "+ a);
}

function Promedio(){

    let n1, n2, n3, s, p;

    alert("Este algoritmo determinara el promedio de 3 notas");
    n1 = parseFloat(prompt("Ingrese la primera nota"));
    n2 = parseFloat(prompt("Ingrese la segunda nota"));
    n3 = parseFloat(prompt("Ingrese la tercera nota"));


    s = n1 + n2 + n3;
    p = s / 3;

    alert("El promedio de las notas es: "+ p);
}

function ConversionTiempo(){

    let s, m, h;

    alert("Este algoritmo determinara los segundos convertidos a minutos y horas");
    s = parseFloat(prompt("Ingrese los segundos"));

    m = s / 60;
    h = s / 3600;

   alert("El resultado en minutos es: "+ m);
   alert("El resultado en horas es: "+ h);
}

function Peso(){

    let kg, g, l, t;

    alert("este algoritmo mostrara el resultado de kilogramos a gramos, libras y tonedalas");
    kg = parseFloat(prompt("ingrese el peso"));

    g = kg * 1000;
    l = kg / 2;
    t = kg / 1000;

    alert("El resultado en gramos es: "+ g);
    alert("El resultado en libras es: "+ l);
    alert("El resultado en toneladas es: "+ t);
}

function ConversionPlanetas(){

    let pt , l, m, v, mt, j, s, u, n;
    alert("Este algoritmo mostrar el peso de una persona u objeto en diferentes planetas");
    pt = parseFloat(prompt("ingrese el peso"));

    l = pt * 1,62;
    m = pt * 3,78;
    v = pt * 8,87;
    mt = pt * 3,71;
    j = pt * 24,79;
    s = pt * 10,44;
    u = pt * 8,69;
    n = pt * 11,15;

    alert(" el resultado en la luna es: "+ l +" en mercurio: "+ m +" en venues: "+ v +" en marte: "+ mt +" en jupiter: "+ j +" en saturno: "+ s +" en urano: "+ u +" en neptuno: "+ n);

}

function CalculoCompra(){

    let p1, p2, p3, c1, c2, c3, s1 ,s2 ,s3 ,total;

    alert("Este algoritmo realizara el calculo de una compra");
    p1 = parseFloat(prompt("ingrese el precio de la compra"));
    c1 = parseFloat(prompt("ingrese la cantidad de la compra"));
    p2 = parseFloat(prompt("ingrese el precio de la compra"));
    c2 = parseFloat(prompt("ingrese la cantidad de la compra"));
    p3 = parseFloat(prompt("ingrese el precio de la compra"));
    c3 = parseFloat(prompt("ingrese la cantidad de la compra"));

    s1 = p1 * c1;
    s2 = p2 * c2;
    s3 = p3 * c3;
    total = s1 + s2 + s3;

    alert("El total de la compra es: "+ total);
}

function CalculoSalario(){

    let pd, sm, dt, va, pp, total;

    alert("Este algoritmo mostrara el calculo de un salario");
    sm = parseFloat(prompt("ingrese el salario mensual"));
    dt = parseFloat(prompt("ingrese los  dias trabajados"));
    va = parseFloat(prompt("ingrese el valor adicional"));

    pd = sm / 30;
    pp = pd * dt;
    total = pp + va;

    alert("El total de su salario es: "+ total);
}

function FacturaServicio(){

    let c, vu, p, sb, i, total;
    alert("Este algoritmo realizara el calculo de una factura de un servicio");
    c = parseFloat(prompt("ingrese el valor del consumo"));
    vu = parseFloat(prompt("ingrese el valor unitario"));
    p = parseFloat(prompt("ingrese el porcentaje del impuesto"));

    sb = c * vu;
    i = (p / 100) * sb
    total = sb + i

    alert("El subtotal de la factura de servicio es: "+ sb +" el valor del impuesto: "+ i +" y el total a pagar es: "+ total);
}

function CostoViaje(){

    let dt, c, p, l, costo;
    alert("Este algoritmo realizara el calculo del costo de un viaje");
    dt = parseFloat(prompt("ingrese la distancia"));
    c = parseFloat(prompt("ingrese el consumo promedio"));
    p = parseFloat(prompt("ingrese el precio del combustible"));

    l = dt / c;
    costo = l * p;

    alert("El costo aproximado para del combustible utilizado es: "+ costo);
}

function CalculoViaje(){

    let d, v , th, tm;
    alert("Este algoritmo realizara el promedio del tiempo de un viaje");
    d = parseFloat(prompt("ingrese la distancia"));
    v = parseFloat(prompt("ingrese la velocidad"));

    th = d / v;
    tm = th * 60;

    alert("El tiempo total del viaje es de: "+ tm +" minutos");
}

function SistemaNotas(){

    let n1, n2, n3, nf;
    alert("Este algoritmo realizara el calculo de la nota final de un estudiante");
    n1 = parseFloat(prompt("ingrese la primer nota"));
    n2 = parseFloat(prompt("ingrese la segunda nota"));
    n3 = parseFloat(prompt("ingrese la tercera nota"));

    nf = (n1 * 0.20) + (n2 * 0.30) + (n3 * 0.50);

    alert("La nota final es: "+ nf);
}

function ConversorMonedas(){

    let p , d, e;
    alert("Este algoritmo realizara la conversion de diferentes monedas");
    p = parseFloat(prompt("Ingrese los pesos que desea convertir"));

    d = p / 4000;
    e = p / 4300;
    
    alert("Los pesos en dolares son: "+ d +"y en euros son: "+ e);
}

//ALGORITMOS CONDICIONALES



function PositivoNegativo(){
    let n;

    n = parseInt(prompt("Ingrese el numero a analizar"));

    if (n > 0) {
        alert("El número " + n + " es positivo.");
    } else {
        alert("El número " + n + " Es negatiivo.");
    }
}

function ParImpar(){
    let n;

    alert("Algoritmo para determinar si un número es par o impar");
    n = parseInt(prompt("Ingrese un número a evaluar:"))

    if (n % 2 === 0) {
        alert("El número " + n + " es par.");
    } else {
        alert("El número " + n + " es impar.");
    }

}

function Mayor(){

    let n1, n2;

    alert("Algoritmo para determinar el mayor de dos numeros");

    n1 = parseInt(prompt("Ingrese el primer numero"));
    n2 = parseInt(prompt("Ingrese el segundo numero"));

    if (n1 > n2) {
        alert(n1 + " Es mayor que " + n2);
    } else {
        alert(n2 + " Es mayor que " + n1);
    }
}

function Descuento(){
    let c;

    alert("Algoritmo para ver el descuento de una compra");

    c= parseFloat(prompt("Ingrese el valor de la compra"));

    if (c>=200000) {
        
        alert("Tiene desciento del 10%");
    } else {
        alert("No tiene descuento");
    }
}

function Temperatura(){

    let t;

    alert ("Sistema para determinar la temperatura de un a ciudad");

    t= parseFloat(prompt("Ingrese la temperatura en grado celsius "));

    if (t>=30) {
        alert("La temperatura es alta");
    } else{
        alert("La temperatura es baja");
    }
}

function MayorEdad(){
    let e;

    alert("Este algoritmo dejara ver si es mayor o menor de edad");

    e = parseFloat(prompt("Ingrese su edad"));

    if (e>=18) {
        alert("es mayor de edad");
    } else{
        alert ("es menor de edad");
    }
}

function RetiroDinero(){
    let r, ns;
    const s = 500000;
    
    alert ("Este algoritmo ayudaraa determinar si puedes retirar dinero o no");

    r = parseFloat(prompt("Ingrese el valor a retirar"));

    if(r<=s) {
        alert("Retiro aceptado");
    } else{
        alert ("saldo insuficiente");
    }
    ns = s - r;

    alert("El salario que te queda es: "+ ns);
}

function EnvioGratis(){
    let v;

    alert("Este algoritmo determinara si tu envio saldra gratis");

    v = parseFloat(prompt("Ingrese el valor del envio"));

    if (v>=150000) {
        alert("El envio es gratis");
    } else{
        alert("El envio tiene un costo de 12,000");
    }
}

function CompararNumeros(){
    let a, b;

    alert("Este algoritmo ayudara a comparar 2 numeros");

    a = parseFloat(prompt("Ingresa el primer numero"));
    b = parseFloat(prompt("Ingresa el segundo numero"));

    if (a>b) {
        alert("El primer numero es mayor");
    } else if (a<b) {
        alert("El primero es menor");
    } else {
        alert("Los numeros son iguales");
    }
}

function TarifaParqueadero(){
    let h, t;

    alert("Este algoritmo ayudara a saber la tarifa de el parqueadero");

    h = parseFloat(prompt("Ingrese las horas que duro en el parqueadero"));

    if (h<=0) {
        t = 0;
    } else if (h<=1) {
        t = 5000;
    } else if (h<=3) {
        t = 10000;
    } else if (h<=6) {
        t = 18000;
    } else {
        t = 25000
    }
    alert("El valor a pagar es : "+ t);
}

function TarifaEdad(){
    let e, t;

    alert("Este algoritmo mostrara la tarifa del transporte segun su edad");

    e = parseFloat(prompt("Ingrese su edad"));

    if (e<5) {
        t = 0;
    } else if (e<=17) {
        t = 2000;
    } else if (e <= 59) {
        t = 3500;
    } else {
        t = 2500;
    }
    alert("El valor de su pasaje es : "+ t);
}

function ClasificacionVelo(){
    let v;

    alert("Este algoritmo le dira a que velocidad esta");

    v = parseFloat(prompt("Ingrese su velocidad"));

    if (v<=30) {
       alert("Velocidad baja.");
    } else if (v<=60) {
       alert("Velocidad moderada.");
    } else if (v<=100) {
       alert("Velocidad alta.");
    } else {
       alert("Velocidad muy alta.");
    }
}

function DiasMes(){
    let  mes;
    
    alert("Este algoritmo te dira los dias del mes");

    mes = parseFloat(prompt("Ingrese el numero del mes"));

    if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
        alert("El mes tiene 31 días.");
    } else if ([4, 6, 9, 11].includes(mes)) {
        alert("El mes tiene 30 días.");
    } else if (mes === 2) {
       alert("Febrero tiene 28 días.");
    } else {
       alert("Número de mes inválido.");
    }
}

function AccesoAtraccion(){
    let ed, et;

    alert("Este algoritmo te dira si puedes ingresar a la atraccion");

    ed = parseFloat(prompt("Ingrese su edad"));
    et = parseFloat(prompt("Ingrese su estatura en metros"));

    if (ed>=12 && et>=1.40) {
        alert("Puede ingresar a la atraccion");
    } else {
        alert("No puede ingresar a la atraccion");
    }
}

function DescuentoCliente(){
    let t, c, p1, p2, d, total;
    
    alert("Este algoritmo mostrara el descuento a un cliente");

    t = parseFloat(prompt("Que tipo de cliente es normal/frecuente"));
    c = parseFloat(prompt("Valor de la compra"));

    p1 = 0.05;
    p2 = 0.10;
    d = c * p1;
    total = c - d

    if (c>=200000) {
        alert("Eres un cliente normal");
    } else {
        alert("Eres un usuario frecuente");
    }

    alert("Descuento : "+ d);
    alert("Total a pagar : "+ total);
}

function switcMes(){
    let mes;
    alert("Este algoritmo mostrara los meses del año");

    mes = parseFloat(prompt("Ingrese el numero del mes"));
    switch (mes){
        case  1:
            console.log("Enero");
            break;
        case  2:
            console.log("Febrero");
            break;
        case  3:
            console.log("Marzo");
            break;
        case  4:
            console.log("Abril");
            break;
        case  5:
            console.log("Mayo");
            break;
        case  6:
            console.log("Junio");
            break;
        case  7:
            console.log("Julio");
            break;
        case  8:
            console.log("Agosto");
            break;
        case  9:
            console.log("Septiembre");
            break;
        case  10:
            console.log("Octubre");
            break;
        case  11:
            console.log("Noviembre");
            break;
        case  12:
            console.log("Diciembre");
            break;
        default :
            alert("Error ese mes no existe");
            break;
        }
}

function CajeroAutomatico(){
    let s, r;

    alert("Este algoritmo funcionara para validar un retiro");

    s = parseFloat(prompt("Saldo disponible"));
    r = parseFloat(prompt("Valor a retirar"));

    if (r <= 0) {
        alert("El retiro debe ser mayor a cero");
    }else if (r % 10000 !==0) {
        alert("El retiro debe ser múltiplo de 10.000");
    } else if (r > s) {
        alert("Saldo insuficiente.");
    } else {
        alert("Retiro exitoso.");
        alert("Saldo restante: " + (s - r));
    }
}

function ValidacionContra(){
    let c, n;

    alert("Este algoritmo ayudara a validar tu contraseña");

    c = parseFloat(prompt("Ingrese su contraseña"));

    if (c.length >= 8) {
        if (c != "12345678") {
        alert("La contraseña cumple con dos condiciones");

        n = prompt("Ingrese un numero que tenga la contraseña");

    if (c.includes(n) && n != "") {
        alert("La contraseña es valida");
    } else {
        alert("La contraseña debe contener un numero");
}

    } else {
        alert("La contraseña no puede ser 12345678");
        }
    } else {
        alert("La contraseña debe tener minimo 8 caracteres");
    }
}

function AñoBisiesto(){
    let año;

    año = parseFloat(prompt("Ingrese el año"));

    if ((año % 4 == 0 && año % 100 != 0) || año % 400 == 0) {
        alert("El año es bisiesto");
    } else {
        alert("El año no es bisiesto");
    }
}

function ClasificarTriangulo(){
    let a, b, c;

    a = parseFloat(prompt("Ingrese el lado 1"));
    b = parseFloat(prompt("Ingrese el lado 2"));
    c = parseFloat(prompt("Ingrese el lado 3"));

    if (a <= 0 || b <= 0 || c <= 0 ||
        a + b <= c || a + c <= b || b + c <= a) {
        alert("No forman un triangulo");
    } else if (a == b && b == c) {
        alert("Triangulo equilatero");
    } else if (a == b || a == c || b == c) {
        alert("Triangulo isosceles");
    } else {
        alert("Triangulo escaleno");
    }
}

function Calculadora(){
    let a, b, op;

    a = parseFloat(prompt("Ingrese el primer numero"));
    b = parseFloat(prompt("Ingrese el segundo numero"));
    op = parseInt(prompt("1 Suma, 2 Resta, 3 Multiplicacion, 4 Division"));

    if (op == 1) {
        alert("Resultado: " + (a + b));
    } else if (op == 2) {
        alert("Resultado: " + (a - b));
    } else if (op == 3) {
        alert("Resultado: " + (a * b));
    } else if (op == 4) {
        if (b != 0) {
            alert("Resultado: " + (a / b));
        } else {
            alert("No se puede dividir entre cero");
        }
    } else {
        alert("Opcion invalida");
    }
}

function TarifaEquipaje() {
    let p;

    p = parseFloat(prompt("Ingrese el peso de la maleta"));

    if (p <= 23) {
        alert("No tiene costo adicional");
    } else if (p <= 30) {
        alert("Debe pagar 50000");
    } else if (p <= 40) {
        alert("Debe pagar 100000");
    } else { 
        alert("No se permite transportar la maleta");
    }
}

function FacturaCompra() {
    let c, d, sub, iva, total;

    c = parseFloat(prompt("Ingrese el valor de la compra"));
    d = 0;

    if (c >= 500000) {
        d = c * 0.15;
    } else if (c >= 300000) {
        d = c * 0.10;
    } else if (c >= 100000) {
        d = c * 0.05;
    }

    sub = c - d;
    iva = sub * 0.19;
    total = sub + iva;

    alert("Compra: " + c);
    alert("Descuento: " + d);
    alert("Subtotal con descuento: " + sub);
    alert("IVA: " + iva);
    alert("Total: " + total);
}

function RiesgoCredito() {
    let edad, i;

    edad = parseInt(prompt("Ingrese su edad"));
    i = parseFloat(prompt("Ingrese sus ingresos mensuales"));

    if (edad < 18) {
        alert("No elegible");
    } else if (edad <= 25) {
        if (i >= 2000000) {
        alert("Elegible");
    } else {
        alert("No elegible");
        }
    } else {
    if (i >= 1500000) {
        alert("Elegible");
    } else {
        alert("No elegible");
    }
}
}

function MayorMenorTres() {
    let a, b, c, my, mn;

    a = parseFloat(prompt("Ingrese el primer numero"));
    b = parseFloat(prompt("Ingrese el segundo numero"));
    c = parseFloat(prompt("Ingrese el tercer numero"));

    my = a;
    mn = a;

    if (b > my) {
        my = b;
    }

    if (c > my) {
        my = c;
    }

    if (b < mn) {
        mn = b;
    }

    if (c < mn) {
        mn = c;
    }

    alert("El mayor es: " + my);
    alert("El menor es: " + mn);

    if (a == b || a == c || b == c) {
        alert("Existen numeros iguales");
    } else {
        alert("No existen numeros iguales");
    }
}


// ALGORITMOS BUCLES

function ContarNumeros() {
    let inicio, fin, i;

inicio = parseInt(prompt("Ingrese el numero inicial"));
fin = parseInt(prompt("Ingrese el numero final"));

for (i = inicio; i <= fin; i++) {
    console.log(i);
 }
}

function CuentaRegresiva() {
    let n, i;

n = parseInt(prompt("Ingrese el numero inicial"));

for (i = n; i >= 0; i--) {
    console.log(i);
 }

    console.log("La cuenta termino");
}

function NumerosPares() {
    let limite, i;

limite = parseInt(prompt("Ingrese el limite"));

for (i = 2; i <= limite; i = i + 2) {
    console.log(i);
 }
}

function NumerosImpares() {
    let limite, i;

limite = parseInt(prompt("Ingrese el limite"));

for (i = 1; i <= limite; i = i + 2) {
    console.log(i);
 }
}

function SumaNumeros() {
    let n, i, suma;

n = parseInt(prompt("Ingrese el numero limite"));
suma = 0;

for (i = 1; i <= n; i++) {
    suma = suma + i;
 }
    console.log("La suma total es: " + suma);
}

function TablaMultiplicar() {
    let n, i;

n = parseInt(prompt("Ingrese un numero"));

for (i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
 }
}

function ContarParesImpares() {
    let limite, i, pares, impares;

limite = parseInt(prompt("Ingrese el limite"));
pares = 0;
impares = 0;

for (i = 1; i <= limite; i++) {
    if (i % 2 == 0) {
        pares = pares + 1;
    } else {
        impares = impares + 1;
     }
    }

    console.log("Cantidad de pares: " + pares);
    console.log("Cantidad de impares: " + impares);
}

function PromedioNumeros() {
    let cantidad, i, numero, suma, promedio;

cantidad = parseInt(prompt("Cuantos numeros ingresara"));
suma = 0;

for (i = 1; i <= cantidad; i++) {
    numero = parseFloat(prompt("Ingrese el numero " + i));
    suma = suma + numero;
 }

    if (cantidad > 0) {
    promedio = suma / cantidad;
    console.log("Cantidad: " + cantidad);
    console.log("Suma: " + suma);
    console.log("Promedio: " + promedio);

    } else {
    console.log("Ingrese una cantidad mayor que cero");
 }
}

function NumeroMayor() {
    let cantidad, i, numero, mayor;

cantidad = parseInt(prompt("Cuantos numeros ingresara"));

    if (cantidad > 0) {
    numero = parseFloat(prompt("Ingrese el numero 1"));
    mayor = numero;

for (i = 2; i <= cantidad; i++) {
    numero = parseFloat(prompt("Ingrese otro numero"));

    if (numero > mayor) {
    mayor = numero;
}
    }

    console.log("El numero mayor es: " + mayor);
    } else {
    console.log("Debe ingresar al menos un numero");
 }
}

function NumeroMenor() {
    let cantidad, i, numero, menor;

cantidad = parseInt(prompt("Cuantos numeros ingresara"));

    if (cantidad > 0) {
    numero = parseFloat(prompt("Ingrese el numero 1"));
    menor = numero;

for (i = 2; i <= cantidad; i++) {
    numero = parseFloat(prompt("Ingrese otro numero"));

    if (numero < menor) {
        menor = numero;
}
  }

    console.log("El numero menor es: " + menor);
    } else {
    console.log("Debe ingresar al menos un numero");
 }
}

function ClasificacionNumeros() {
    let cantidad, i, numero, positivos, negativos, ceros;

cantidad = parseInt(prompt("Cuantos numeros ingresara"));
positivos = 0;
negativos = 0;
ceros = 0;

for (i = 1; i <= cantidad; i++) {
    numero = parseFloat(prompt("Ingrese un numero"));

    if (numero > 0) {
        positivos = positivos + 1;
    } else if (numero < 0) {
        negativos = negativos + 1;
    } else {
        ceros = ceros + 1;
        }
 }

    console.log("Positivos: " + positivos);
    console.log("Negativos: " + negativos);
    console.log("Ceros: " + ceros);
}

function EstadisticasVentas() {
    let cantidad, i, venta, suma, mayor, menor;

cantidad = parseInt(prompt("Cuantas ventas se realizaron"));
suma = 0;

    if (cantidad > 0) {
    venta = parseFloat(prompt("Ingrese la primera venta"));
    suma = venta;
    mayor = venta;
    menor = venta;

for (i = 2; i <= cantidad; i++) {
    venta = parseFloat(prompt("Ingrese otra venta"));
    suma = suma + venta;

    if (venta > mayor) {
    mayor = venta;
}

    if (venta < menor) {
    menor = venta;
}
    }

    console.log("Total de ventas: " + suma);
    console.log("Promedio: " + (suma / cantidad));
    console.log("Venta mayor: " + mayor);
    console.log("Venta menor: " + menor);
    } else {
    console.log("Debe ingresar al menos una venta");
 }
}

function IngresarHastaCero() {
    let numero, suma, cantidad;

    suma = 0;
    cantidad = 0;

    numero = parseFloat(prompt("Ingrese un numero; 0 para terminar"));

while (numero != 0) {
    suma = suma + numero;
    cantidad = cantidad + 1;

    numero = parseFloat(prompt("Ingrese otro numero; 0 para terminar"));
    }

    console.log("Cantidad de numeros: " + cantidad);
    console.log("Suma: " + suma);

    if (cantidad > 0) {
        console.log("Promedio: " + (suma / cantidad));
    } else {
        console.log("No ingreso numeros");
    }
}

function ContraseñaBucle() {
    let contraseña;

contraseña = prompt("Ingrese la contraseña");

while (contraseña != "JavaScript123") {
    console.log("Contraseña incorrecta");
    contraseña = prompt("Intente nuevamente");
    }

    console.log("Contraseña correcta. Acceso permitido");
}

function MenuOpciones() {
    let opcion;

    opcion = 0;

while (opcion != 4) {

    opcion = parseInt(prompt("MENU\n1. Mostrar mensaje\n2. Mostrar informacion\n3. Sumar dos numeros\n4. Salir"));

    if (opcion == 1) {
        console.log("Hola, bienvenido");
    } else if (opcion == 2) {
        console.log("Programa de algoritmia");
    } else if (opcion == 3) {
    let a, b;

    a = parseFloat(prompt("Ingrese el primer numero"));
    b = parseFloat(prompt("Ingrese el segundo numero"));

    console.log("La suma es: " + (a + b));
    } else if (opcion == 4) {
        console.log("Programa finalizado");
    } else {
        console.log("Opcion invalida");
    }
 }
}

function CajeroAutomatico() {
    let saldo, opcion, valor;

saldo = 500000;
opcion = 0;

while (opcion != 4) {

opcion = parseInt(prompt("CAJERO\n1. Consultar saldo\n2. Retirar\n3. Depositar\n4. Salir"));

    if (opcion == 1) {
        console.log("Saldo disponible: " + saldo);
    } else if (opcion == 2) {
        valor = parseFloat(prompt("Ingrese el valor a retirar"));

    if (valor > 0 && valor <= saldo) {
        saldo = saldo - valor;
        console.log("Retiro exitoso");
        console.log("Saldo restante: " + saldo);
    } else {
        console.log("Valor incorrecto o saldo insuficiente");
    }
    } else if (opcion == 3) {
        valor = parseFloat(prompt("Ingrese el valor a depositar"));

    if (valor > 0) {
        saldo = saldo + valor;
        console.log("Nuevo saldo: " + saldo);
    } else {
        console.log("El deposito debe ser mayor que cero");
}
    } else if (opcion == 4) {
        console.log("Gracias por utilizar el cajero");
    } else {
        console.log("Opcion invalida");
        }
    }
}

function NotasGrupo() {
    let cantidad, i, nota, suma, aprobados, reprobados;
    let mayor, menor;

    cantidad = parseInt(prompt("Cantidad de estudiantes"));
    suma = 0;
    aprobados = 0;
    reprobados = 0;

    if (cantidad > 0) {
    nota = parseFloat(prompt("Ingrese la nota del estudiante 1"));

    suma = nota;
    mayor = nota;
    menor = nota;

    if (nota >= 3) {
        aprobados = aprobados + 1;
    } else {
        reprobados = reprobados + 1;
    }

for (i = 2; i <= cantidad; i++) {
    nota = parseFloat(prompt("Ingrese la nota del estudiante"));

    suma = suma + nota;

    if (nota >= 3) {
        aprobados = aprobados + 1;
    } else {
        reprobados = reprobados + 1;
}

    if (nota > mayor) {
        mayor = nota;
    }

    if (nota < menor) {
        menor = nota;
    }
}

    console.log("Estudiantes: " + cantidad);
    console.log("Aprobados: " + aprobados);
    console.log("Reprobados: " + reprobados);
    console.log("Promedio: " + (suma / cantidad));
    console.log("Nota mayor: " + mayor);
    console.log("Nota menor: " + menor);
    } else {
    console.log("Ingrese al menos un estudiante");
    }
}

function AdivinarNumero() {
    let secreto, numero, intentos;

secreto = 9;
intentos = 0;

    numero = parseInt(prompt("Adivine el numero secreto"));

while (numero != secreto) {
        intentos = intentos + 1;

    if (numero < secreto) {
        console.log("El numero secreto es mayor");
    } else {
        console.log("El numero secreto es menor");
    }

    numero = parseInt(prompt("Intente nuevamente"));
    }

    intentos = intentos + 1;

    console.log("Adivinaste el numero");
    console.log("Intentos: " + intentos);
}

function RegistroProductos() {
    let cantidad, i, nombre, precio, unidades;
    let total, mayor, menor, productoMayor, productoMenor;

cantidad = parseInt(prompt("Cantidad de productos"));
total = 0;

    if (cantidad > 0) {
        nombre = prompt("Nombre del primer producto");
        precio = parseFloat(prompt("Precio del producto"));
        unidades = parseInt(prompt("Cantidad disponible"));

        total = precio * unidades;
        mayor = precio;
        menor = precio;
        productoMayor = nombre;
        productoMenor = nombre;

for (i = 2; i <= cantidad; i++) {
    nombre = prompt("Nombre del producto");
    precio = parseFloat(prompt("Precio del producto"));
    unidades = parseInt(prompt("Cantidad disponible"));

   total = total + precio * unidades;

   if (precio > mayor) {
        mayor = precio;
        productoMayor = nombre;
}

    if (precio < menor) {
        menor = precio;
        productoMenor = nombre;
    }
}

    console.log("Productos registrados: " + cantidad);
    console.log("Valor del inventario: " + total);
    console.log("Producto mas costoso: " + productoMayor);
    console.log("Producto menos costoso: " + productoMenor);
    } else {
    console.log("Debe registrar al menos un producto");
    }
}

function AcumuladorCien() {
    let numero, suma, cantidad;

    suma = 0;
    cantidad = 0;

while (suma < 100) {
    numero = parseFloat(prompt("Ingrese un numero"));

    suma = suma + numero;
    cantidad = cantidad + 1;
    }

    console.log("Cantidad de numeros: " + cantidad);
    console.log("Suma acumulada: " + suma);
    console.log("Promedio: " + (suma / cantidad));
}

function SistemaCompras() {
    let nombre, precio, cantidad, subtotal;
    let productos, continuar, descuento, iva, total;

subtotal = 0;
productos = 0;
continuar = "si";

while (continuar == "si") {
    nombre = prompt("Nombre del producto");
    precio = parseFloat(prompt("Precio del producto"));
    cantidad = parseInt(prompt("Cantidad"));

    subtotal = subtotal + precio * cantidad;
    productos = productos + 1;

    console.log("Producto registrado: " + nombre);

    continuar = prompt("Desea agregar otro producto? Escriba si o no");
}

descuento = 0;

if (subtotal >= 500000) {
    descuento = subtotal * 0.15;
} else if (subtotal >= 300000) {
    descuento = subtotal * 0.10;
} else if (subtotal >= 100000) {
    descuento = subtotal * 0.05;
}

    subtotal = subtotal - descuento;
    iva = subtotal * 0.19;
    total = subtotal + iva;

    console.log("Cantidad de productos: " + productos);
    console.log("Subtotal con descuento: " + subtotal);
    console.log("Descuento: " + descuento);
    console.log("IVA: " + iva);
    console.log("Total a pagar: " + total);
}