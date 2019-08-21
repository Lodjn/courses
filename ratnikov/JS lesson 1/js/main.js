function getFahrenheit() {
    var temperature;
    temperature = document.getElementById("celsius").value;
    if (temperature.match(/[0-9]+/) != null) {
        temperature = Number(temperature);
        alert(9/5*temperature+32);
    }
    else {
        alert("Пожалуйста задайте температуру")
    }
}
var admin,
    name;
name = "Василий";
admin = name;
console.log(admin);
console.log(1000 + "108");


