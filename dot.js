let objet ={
    123:'Digit',
    name:'Start with digit',
    name123: 'Does not start with digit',
}
// let {name,name123}= objet;

let digit = objet['123'];
let name = objet.name;
console.log(name);
console.log(digit);