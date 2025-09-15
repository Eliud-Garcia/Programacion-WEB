
//variables
let a = "Hola";
let b = 10;
let c = 43.831;

//salida por consola
console.log(a);
console.log(b);
console.log(c);

//entrada
//let edad = prompt('Ingrese su edad');


// arreglos
array = ['hola', 10, 98, false, a];
array.push(0);


//for
for(let i = 0; i < 10; i++){
    console.log(i);
}
array.forEach(element => {
    console.log(element);
});


//objetos

objeto = {id:34, nombre:"Eliud"};
console.log(objeto);

//funciones

function saludar(nombre){
    alert('Hola ' + nombre)
}

const funcionFlecha = ()=>{console.log('usando funcion flecha')};
const f1 = (x, y) =>{return x + y};
const f2 = x => x + 5;

//funciones de orden superior

//la funcion forEach recibe otra funcion
array.forEach( function (elemento) {
    console.log(elemento);
} );

arrayObj = [
    {id:1, name: "Eliud"},
    {id:2, name: "Pedro"},
    {id:3, name: "Pedro"},
    {id:4, name: "Carlos"},
];

const array_ans = arrayObj.filter( (element) => {
    return element.name == "Pedro";
});

console.log(array_ans);


//JSON

let persona = {
    "nombre" : "Eliud",
    "apellido" : "Garcia",
    "edad": 20,
    "direccion" : {
        "calle" : "Calle 15",
        "ciudad" : "Florencia",
        "pais" : "Colombia"
    }

};
