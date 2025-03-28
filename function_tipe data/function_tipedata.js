// Mengembalikan String
function getString() {
    return "Hello, World!";
}

// Mengembalikan Number
function getNumber() {
    return 42;
}

// Mengembalikan BigInt
function getBigInt() {
    return 9007199254740991n;
}

// Mengembalikan Boolean
function getBoolean() {
    return true;
}

// Mengembalikan Undefined
function getUndefined() {
    return undefined;
}

// Mengembalikan Null
function getNull() {
    return null;
}

// Mengembalikan Symbol
function getSymbol() {
    return Symbol("unique");
}

// Mengembalikan Object
function getObject() {
    return { name: "Alice", age: 25 };
}

// Tes Output
console.log(getString());    
console.log(getNumber());    
console.log(getBigInt());   
console.log(getBoolean());  
console.log(getUndefined()); 
console.log(getNull());     
console.log(getSymbol());    
console.log(getObject());    
