// Immediately Invoked Function Expression (IIFE)


// Named iife
(function connect(){
    console.log(`DB Connected`)
}) (); // ; is must to end the code


//()(): IIFE 
// Global scope ke pollution se hatane ke liye


// unknown iife
( () =>{
    console.log(`Db is connected`)
}
)();


( (name) =>{
    console.log(`${name} Db is connected`)
}
)("sql");