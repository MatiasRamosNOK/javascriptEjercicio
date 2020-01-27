var edad = prompt("Cual es tu edad?");


if (edad < 0) {
    alert("Tu edad no puede ser negativa");
} else {
    if (edad % 2 != 0) {
        alert("Tu edad es impar!");
        if (edad > 0 && edad < 18) {

            alert("Puedes pasar pero no tomar");
        } else {
            alert("Puedes pasar y tomar todo lo que quieras!")
        }
    }
}