var name = prompt("¿Cual es tu nombre?");
var edad = prompt("¿Cual es tu edad?");
var gender = prompt("¿Como desea ser llamado?(Sr o Sra o Srta)");
var isMember = prompt("¿Eres miembro?(solo 'si' o 'no')");
var thirsty = prompt("¿Tienes sed?(solo 'si' o 'no')");


isMember == "si" ? isMember = true : isMember = false;
thirsty == "si" ? thirsty = true : thirsty = false;
if (isMember == false || edad < 21) {
    alert("Disculpe " + gender + " usted no puede ingresar al club,hasta luego,vuelvan prontos");
} else {
    alert("Bienvenido " + gender + " " + name);
    if (thirsty == true) {
        var drinkName = prompt("¿Que le gustaria tomar?");
        if (drinkName != "Cafe descafeinado") {
            alert("Si " + name + " un " + drinkName + " viniendo!");
        } else {
            alert("AFUERA DEL BAR!!!!");
        }
    }
}