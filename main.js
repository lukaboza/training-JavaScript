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

/* 
-> exemplo pratico trabalhando com listas
-> const usada nos exemplos do json
*/

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

/*
---------------------------------> JSON
-> Json são "strings gigantescas" que usamos para passar informações, usado muito
na passagem de dados de uma API.
*/

// Convertendo objeto em json
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// Convertendo json para uma lista
const todosList = JSON.parse(todosJSON);
console.log(todosList);

//---------------------------------------For----------------------------------------------------//

/*

-> for cria um loop até uma determinada condição for concluida.
-> sintaxe: 

for ([inicialização]; [condição]; [expressão final]) {
  declaração a ser executada;
}

Inicialização: 
Uma expressão (incluindo expressões de atribuição) ou declarações variáveis

condição:
Uma expressão para ser avaliada antes de cada iteração do loop

expressão final:
Uma expressão que será validada no final de cada iteração de loop

declaração:
Uma declaração que é executada enquanto a condição for verdadeira

*/

// printando números
for (let index = 0; index < 10; index++) {
  console.log(index);
}

// percorrendo uma lista com "for"
const cars = ["ferrari", "BMW", "Tesla"];

// Metodo 1
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// Metodo 2
for (let car of cars) {
  console.log(car);
}

// Metodo 3
cars.forEach(function (car) {
  console.log(car);
});

//--------------------------------------While--------------------------------------------------//

/*

-> while cria um loop até uma determinada condição for concluida.
-> sintaxe:
while (condição) {
  rotina
}

-> Condição:
Uma expressão avaliada antes de cada passagem através do laço.

-> rotina:
Uma declaração que é executada enquanto a condição é avaliada como verdadeira.

*/

let index = 0;

while (index < 10) {
  console.log(index);
  index++;
}

// -----> Exercício usando o "for in"
const pessoa = {
  name: "Luka",
  age: 21,
};

/*
-> dando loop para printar todos os conteudos de um objeto 
-> esse loop não é muito usado
*/
for (property in person) {
  console.log(person[property]);
}

//------------------------------------Condicionais----------------------------------------------//

/*
-> Condicional if...else usada em qualquer tipo de linguagem.
-> Sintaxe:

if (condição1) {
   instrução1
} else if {
    condição2
}
.
.
.
else {
  instruçãoElse
}

*/

const sum = 1 + 1;

if (sum === 2) {
  console.log("Soma igual a 2");
} else if (sum === 3) {
  console.log("Soma diferente de 2");
} else {
  console.log("Soma definitivamente não é 2");
}

// -----> Condicional com &&(e) e ||(ou)

const sum2 = 2 + 2;
const sum3 = 10 + 10;

if (sum2 === 4 && sum3 === 10) {
  console.log("Usando a variavel && (e)");
}

if (sum2 === 4 || sum3 === 10) {
  console.log("Usando a variavel || (ou)");
}

// -----> Switch-case

const carro = "ferrari";

switch (carro) {
  case "ferrari":
    console.log("Vocês escolheu a ferrari!");
  case "BMW":
    console.log("Vocês escolheu a BMW!");
  case "Ford":
    console.log("Vocês escolheu a Ford!");
}

//-----------------------------------Truthy & Falsy----------------------------------------------//

/*
-> No caso de uma espressão for uma string vazia ou 0, ela retorna SEMPRE "false".
-> todos os valores são veracidade exceto false, 0, -0, 0n, "", null, undefined, e NaN.
*/

const a = "";
// FALSE

const b = 0;
// FALSE

const c = null;
const d = undefined;
// FALSE

const list = [];
// TRUE

const object = {};
// TRUE

/*
-> O operador "!" inverte o valor booleano da variavel
-> O operador "!!" verifica se o valor da variavel é "true" ou "false"
*/

console.log(!false);
// TRUE

console.log(!!0);
// FALSE

//--------------------------------Funções & Arrow Functions-----------------------------------------//

/*
-> Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.
-> Uma função JavaScript é executada quando "algo" a invoca (a chama).

-> Sintaxe:
function myFunction(p1, p2) {
  return p1 * p2;
}

*/

// função criada
function soma(h, m) {
  return h + m;
}

// função invocada
soma(10, 1);

/*
-----> Arrow Functions
-> O Arrow Functions trabalha igual a função normal.
*/

// nesse exemplo fazemos a mesma coisa que a função padrão.
const somaArrow = (h, m) => h + m;

// ou... (mesma coisa)

const somaArrow1 = (h, m) => {
  h + m;
};

//-----------------------------------POO--------------------------------------------//

/*
-> Programação Orientada a Objetos é usado muito na manipulação de objetos
-> A classe precisa ser Instanciamos para FUNCIONAR
-> Apenas os metodos staticos funcionam sem precisar que a classe seja Instanciada
*/

// criamos o objeto "person" (usando classes)
class Person {
  constructor(firstName, LastName, age) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.age = age;
  }

  // exemplo de um metodo para juntar o "firstName" e "LastName".
  getFullName() {
    console.log(`${this.firstName} ${this.LastName}`);
  }

  // exemplo de metodo statico
  static hello() {
    console.log("Hello World!");
  }
}

// Instanciamos nosso objeto
const person = new Person("Luka", "Amaral", "25");

// Por fim, temos nosso objeto criado
console.log(person);

// Chamada do metodo para juntar os nomes
person.getFullName();

// Chamada de um metodo STATICO
Person.hello();

/*
--------> Herança
-> Usado para "estender" as classes, usando o metodo de "Herança entre classes"
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} fez algum barulho!`);
  }
}

// classe que se "estende" da classe "Animal"
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  // Aqui sobreescrevemos o "speak" do "Animal" e usamos um "speak" novo.
  speak() {
    console.log(`${this.name} barked!`);
  }
}

const animal = new Animal("Simba");
const dog = new Dog("Bob");

animal.speak();
dog.speak();

/**
 *
 * -> DOM
 * -> DOM é a "arvore" HTML (HTML que aparece ao inspencionar elemento no browser),
 * que é usada para criar/manipular/inputar elementos.
 *
 * -> os elementos usado abaixo são de exemplo, mais duvidas acessar vídeo:
 * https://www.youtube.com/watch?v=csf3dyY4GGg&t=26s&ab_channel=FelipeRocha%E2%80%A2dicasparadevs
 *
 */

// -----> 2 METODOS PARA SELECIONAR E ALTERAR UM ELEMENTO DO DOM

/*
// -> getElementById
// -> getElementById tras uma referencia do elemento DOM selecionado.
*/

// puxamos/selecionamos nosso elemento pelo seu ID
const addUserTextId = document.getElementById("add-user");

//vai aparecer no console "<h1 id="add-user">Add user</h1>"
console.log(addUserTextId);

// alterando o elemento "Add User" para "Adicionar usuário"
addUserTextId.innerText = "Adicionar usuário";

/*
// -> querySelector
// -> querySelector tras o elemento em si selecionado.
*/

// seleciona o elemento em si | mais atual | por id usa #
const addUserText = document.querySelector("#add-user");
console.log(addUserText);
// console: h1#add-user

// alterar o elemento 'Add User para Adicionar usuário'
addUserText.textContent = "Adicionar usuário";

/*
-> Selecionando mais de um elemento
*/

// dentro do formulário pega o elemento "my-form" dentro da classe container
const myForm = document.querySelector(".container #my-form");
console.log(myForm);

// Seleciona apenas 1 elemento, mesmo dentro a classe tendo mais elementos
const myForm1 = document.querySelector(".item");

// Para selecionar mais de um elemento (retornando todos)
const allItems = document.querySelectorAll(".item");
console.log(allItems);

// selecionando apenas item na posição 1
console.log(allItems[1]);

//ou
const allItems1 = document.querySelectorAll(".items .item");
console.log(allItems);

/**
 * -----> Manipulando Elementos do DOM
 */

// Removendo os itens (todos)
const items = document.querySelector(".items");
items.remove();

// Remove um item
items.firstElementChild.remove(); //elimina o primeiro li
items.lastElementChild.remove(); //elimina o ultimo li

// Mdifica o texto no elemento indicado
items.children[0].textContent = "Item UM"; //primeiro elemento

// muda o HTML do elemento
items.lastElementChild.innerHTML = "<h1>Hello world!</h1>";

// alterações que podemos fazer em determinados elementos
const button = document.querySelector(".btn");
button.style.background = "red";
button.style.color = "blue";

/* 
Exemplos acima são usados mais para deixar a página interativa e executar mudanças
no HTML, dependendo do evento que ocorrer.
*/
