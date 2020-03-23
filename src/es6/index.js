//!data default
function newFunction(name, age, country) {
  var name = name || 'manu';
  var age = age || 29;
  var country = country || 'ES'
  console.log(name, age, country)
}
newFunction()

//es6
function newFunction2(name = 'manu', age = 29, country = 'ES') {
  console.log(name, age, country)
}
newFunction2('ricardo', 23, 'CO')

//!template string
let hello = 'Hello'
let world = 'World'

let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

//es6
let expiParase2 = `${hello} ${world}`
console.log(expiParase2)

//!multilínea
let lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry \n'
+ 'otra frase epica que necesitamos.'
console.log(lorem)

//es6
let lorem2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry 
otra frase epica que necesitamos.`
console.log(lorem2)

//!deconstrucción
let person = {
  'name': 'manu',
  'age': 29,
  'country': 'ES'
}

console.log(person.name, person.age)

//es6
let { name, age, country } = person;
console.log(name, age, country)

//!spread operator
let team1 = ['manu', 'julian', 'ricardo']
let team2 = ['thor', 'alex', 'jorge']

//es6
let education = ['david', ...team1, ...team2]
console.log(education)

//!let y const
var hola = 'hola' // disponible de forma global

{
  var globalVar = 'Global Var'
}

{
  let glboalLet = 'Global Let'
  console.log(glboalLet)
}

console.log(globalVar)
// console.log(glboalLet) // no accesible 'is not defined'

const a = 'b'
a = 'a'
console.log(a) // no se puede asignar 'Assignment to constant variable.'