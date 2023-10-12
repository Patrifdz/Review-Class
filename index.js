
const myDni = 76657383;

const arrayLetra = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];



function calculateLetter(DNI, array) {
    if(typeof DNI === "number" && DNI.toString().length === 8) {
        const resto = DNI%23;
        return console.log(array[resto])
    } else {
        return console.log("error")
    }
};

calculateLetter(myDni, arrayLetra);