
function checkY(){
    var x = 10;

    if (true){
        let y = 20;
    }

    console.log(x); //10
    console.log(y); // Reference error

}

//checkY();

// Creating a constant variable means
// The values dont hange (cannot be altered)

const PI = 3.14159

///

const person = {name: "Juan"}; // Creating a perso data structure (Dictironay)
// The key is the const attribute that cannot be changed
// However we can reassign the attribute value

// to Access a value from a dictionary
// We have to use the path refecening

console.log(person);

person.name = "Carlos"

console.log(person);

person