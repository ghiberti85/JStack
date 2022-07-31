// Function Sintax

function myFunction () {};

// Arrow Function Sintax

const myArrowFunction = () => {};

// Arrow Funcrtion ShortSintax

const shortArrowFunction = () => ('Return Value or Ternary Condition');

// Differences between these sintaxes
// - this object context: 
// Regular functions has your own this while in Arrow functions
// this keyword has the value from the scope that it was created

// Class in javascript is a Sugar Sintax to functions 
// In the end what will run is a functions
// Basically is a function with constructor when you are using the object this
// When you use constructor in functions you are telling that this functions 
// is an object

// By default function's value is undefined
// When you return something the value will change
// When you use the property new before function's call, this function become
// an object and now you can use the keyword this to give properties for this 
// object/function

// Arrow functions use the keyword this on the context/scope where it was created 
// while regular functions have your own scope your own this when you call regular
// functions with the keyword new before

// When you use an arrow function inside a regular functions the this's arrow 
// function will heritage the scope/context where it was created that is regular
// function's scope/context

// For instance, when you use an arrow function's in the general context, arrow function's 
// keyword this belong to Node's Context/ Browser's Window Context

// Args Concept
// Javascript Keyword arguments will recognize all the parameters that you pass
// to the function automatically. This keyword is an object and it will storage
// all the parameters that you give to the function