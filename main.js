var RandomNumber;
function deployGame(vidas) {
    while (vidas > 0) {
        GetRandomNumber();
    }
}
function GetRandomNumber() {
    RandomNumber = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    if (RandomNumber.length == 2){
        GetRandomNumber()
    } else {
        RandomNumber = parseInt(RandomNumber)
    }    
}
function getUserNumber() {
    var userNumber = document.getElementById('')
}
function compareNumbers() {

}

function StartGame() {
    var vidas = 10;
    deployGame(vidas)
    GetRandomNumber();
    alert("El numero aleatorio es: " + RandomNumber)
}  