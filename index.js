const myDni = 76657383;
const arrayLetra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

export function calculateLetter(DNI, array) {
  try {
    if (typeof DNI === "number" && DNI.toString().length === 8) {
      const resto = DNI % 23;
      return array[resto];
    } else {
      throw new Error("Invalid input: DNI must be an 8-digit number");
    }
  } catch (error) {
    return error.message; // Return the error message
  }
}

console.log(calculateLetter(myDni, arrayLetra));

console.log("prueba_1");