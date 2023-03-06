//--------------------------------------Strings---------------------------------------------------------//

const FirstName = "Luka";
const LastName = "Boza";

// Duas maneiras de manipular strings.
console.log("Meu nome é " + FirstName + " " + LastName);
console.log(`Meu Nome é ${FirstName} ${LastName}`);

// Manipulando string com UpperCase e LowerCase.
console.log(`Meu Nome é ${FirstName.toUpperCase()} ${LastName.toLowerCase()}`);

//---Listas---//

const Nomes = "Luka, Julia, Luca";

// Manipulando string com split.
console.log(Nomes.split(","));

// Nesse segundo caso, quando split é passado sem o delimitador, ele separa cada letra da string.
console.log(Nomes.split(""));

//--------------------------------------Numeros-------------------------------------------------------//

const number = 100;

//calculos Númericos.
console.log(number + 10);
console.log(number - 10);
console.log(number * 10);
console.log(number / 10);
console.log(number % 10);

//Converter números para string.
console.log(number.toString());

//descobrindo o tipo tipo da variavel.
console.log(typeof number);

//-------------------------------------Booleanos-----------------------------------------------------//

//Retorna de true.
console.log(2 == 2);

//Retorna de false.
console.log(2 == 5);

//-----------------------------------Null & Undefined------------------------------------------------//

// nessa variavel indicamos que a variavel x CONTEM um valor nulo.
const x = null;

// aqui a variavel
const y = undefined;

//----------------------------------------Listas-----------------------------------------------------//

// Lista numerica (int)
const listNumber = [1, 2, 3, 4, 5];

// lista de nomes (string)
const listName = ["Luka", "Roberto", "Marcio", "Edilson", "Marcia"];

// lista variada
const listBox = [undefined, 3, 3, "Teste", "", null];

//-------------------------------> Lista usada como exemplo abaixo
const list = ["Pedro", "João", "Antonio", "mario"];
//               0        1        2         3

// O conteudo das lista são acessiveis pelos seus respectivos indices (0 -> x)
const id0 = list[0];
const id1 = list[1];
const id2 = list[2];

// Mudar um valor especifico, apartir do ID (nesse caso mudaria o valor "mario")
list[3] = "Gustavo";

// Para adicionar um novo conteudo no FINAL da lista
list.push("Nome Adicionado 1");

// Para adicionar um novo conteudo no INICIO da lista
list.unshift("Nome Adicionado 2");

// Remove o ULTIMO valor da lista
list.pop();

// Nessa função, retorna a posição (index), retornando nesse caso 2
list.indexOf("Antonio");

// Ordenando a lista em ordem alfabetica
list.sort();

// Verifica se a variavel é uma lista (retornando true ou false)
Array.isArray(list);

//-------------------------------> Lista usada como exemplo abaixo
const numbers = [1, 2, 3, 4, 5];

/* 
-----> Map
-> nesse exemplo acessamos todos os valores da lista "numbers" e multiplicamos por 2.
-> ""number" é o nome que damos para a variavel que iremos receber (receber da lista "numbers")
e passar para a função, retornando então uma nova lista (multiplicada por 2).
*/
const nuberMultpliedByTwo = numbers.map(function (number) {
  return number * 2;
});

console.log(nuberMultpliedByTwo);

/*
-----> Filter
-> Nesse exemplo mostramos apenas os números pares.
-> Funcionando no mesmo modelo do "map" (atraves da função), o "filter" 
filtra uma determinada variavel, retornando apenas os valores "TRUE"
da expressão que foi passada.
*/
const evenAeges = numbers.filter(function (idade) {
  return idade % 2 === 0;
});

console.log(evenAeges);

/*
-----> Reduce
-> Nesse exemplo mostraremos a soma de todos os numeros dentro da lista.
-> Funcionando no mesmo modelo do "map" (atraves da função), o "reduce"
vem para "reduzir" a nossa lista, no nosso caso abaixo reduzimos ela
acumulando os valores.
*/

const sumOfAges = numbers.reduce(function (age, accumulator) {
  return accumulator + age;
}, 0);

console.log(sumOfAges);

//---------------------------------------Objetos----------------------------------------------------//

const object = {
  firstName: "Luka",
  lastName: "Boza",
  age: 24,
  hobbies: ["jogar", "estudar", "codar"],
  dog: {
    nome: "luma",
    age: 14,
  },
};
// nesse exemplo trazemos o valor de "firstName"
const firstName1 = object.firstName;

// nesse exemplo trazemos o valor do "lastName"
const lastName1 = object.lastName;

// nesse exemplo trazemos o valor do "age"
const age1 = object.age;

// nesse valor trazemos o valor de um "hobbies" especifico (nesse caso 1)
const hobbies1 = object.hobbies[1];

/*
----->Destructuring
-> O Destructuring trabalha com a desconstrução de um objeto, armazenando seus "pedaços"
em variaveis pré definidas em seu escopo
-> Usar o metodo Destructuring ou usar o "const" (como usado acima) chega no mesmo resultado
-> mostrado no firstName como se renomeia uma variavel.
*/

const {
  firstName: Nome,
  lastName,
  age,
  hobbies,
  dog: { nome: dogName, age: idade },
} = object;

// variaveis usadas no jeito padão
console.log(firstName1);
console.log(lastName1);
console.log(age1);
console.log(hobbies1);

// variaveis usadas com o metodo Destructuring
console.log(Nome);
console.log(lastName);
console.log(age);
console.log(hobbies);

// adicionando um novo onjeto e seu novo valor
object.jogo = "cs";

console.log(object);

// agora podemos também acessar objetos dentro de objetos de 2 formas:
// -> jeito padão
const nameDog1 = object.dog.nome;
const age2 = object.dog.age;

// -> metodo Destructuring
const nameDog = dogName;
const age3 = idade;

// resultado
console.log(nameDog1);
console.log(nameDog);

console.log(age2);
console.log(age3);

// exemplo pratico trabalhando com listas

const todos = [
  {
    id: 1,
    description: "Estudas",
    isCompleted: true,
  },
  {
    id: 2,
    description: "Jogar",
    isCompleted: false,
  },
  {
    id: 3,
    description: "Dormir",
    isCompleted: false,
  },
];

const descriptionTodo = todos[1].description;
console.log(descriptionTodo);

// https://www.youtube.com/watch?v=BVrSRTJffxM&ab_channel=FelipeRocha%E2%80%A2dicasparadevs
