let mensaje: string = "Hola mundo";

mensaje = "Curso de React - UTN";

mensaje = "chau mundo";

console.log(mensaje);

/*
    TIPOS DE JS
    number
    string
    boolean
    null
    undifined
    object 
    function

    TIPOS en TS
    any (No usar)
    unknown
    never 
    arrays
    tuplas
    enums

    TIPOS INFERIDO
    Cuando se inicializa una variable, TS sabrá de que tipo es.
*/

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "Velociraptor";
let extintos = true;

let myvar; //Sale "any"
myvar = "UTN";
myvar = 5;

//Para evitar que salga "any", SIEMPRE incializar la variable y/o especificar el tipo de dato

function dameElConfig(config: any) {
  return config;
}

let animales: string[] = ["Simon", "Laika", "Ciro"];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

// animales.map( x => x.) autocompleta sugiere funciones correspondientemente al tipo de dato

let tupla: [number, string[]] = [1, ["TypeScript", "@", "UTN"]];

const small = "s";
const medium = "m";
const large = "l";
const extralarge = "xl";

//PascalCase (Primer letra con mayus, resto minus)
enum Talles {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = "xl",
}

const varUno = Talles.ExtraGrande;

console.log(varUno);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Error;

const obj = { id: 1 };
//obj.nombre = "Hola mundo" //No se puede, ya que dentro de nuestro objeto, no está incializada o declarada la propiedad "nombre"

const obj2 = { id: 1, nombre: "" };
obj2.nombre = "@UTN";

const obj3: {
  id: number;
  nombre: string;
} = { id: 3, nombre: "Curso REACT" };

const obj4: {
  readonly id: number; // "readonly" evita que esta propiedad pueda ser modificada más adelante
  nombre?: string;
  talle: Talles;
} = { id: 4, talle: Talles.ExtraGrande }; //Al poner "?" tras la declaración de una propiedad, ésta se vuelve OPCIONAL de incializar.

type Marca = {
  nombre: string;
  lugarFabrica: string;
};

type Prenda = {
  readonly id: number;
  nombre?: string;
  talle: Talles;
  marca: Marca;
};

const prenda: Prenda = {
  id: 10,
  nombre: "Pullover",
  talle: Talles.Chica,
  marca: {
    nombre: "Galpón Gaucho",
    lugarFabrica: "Argentina",
  },
};

const arr: Prenda[] = [prenda];
