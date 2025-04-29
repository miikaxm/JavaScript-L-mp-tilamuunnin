document.getElementById("btn").addEventListener("click", muunna)



function muunna(event){
    event.preventDefault()
    let desimaali = 0
    let vaihtoehto = document.getElementById("vaihtoehdot").value
    let radio1 = document.getElementById("radio1").checked;
    let radio2 = document.getElementById("radio2").checked;
    let radio3 = document.getElementById("radio3").checked;

    if (radio1 == true) {
        desimaali = 1
    }
    if (radio2 == true) {
        desimaali = 2       
    }
    if (radio3 == true) {
        desimaali = 3       
    }

    let inputTempature = document.getElementById("teksti").value
    
    if (inputTempature.length < 1){
        document.getElementById("tulokset").innerText = "Tekstikenttää ei voi jättää tyhjäksi"
        return
    }
    if (isNaN(inputTempature)) {
        document.getElementById("tulokset").innerText = "Syötäthän tekstikenttään luvun"
        return
    }
    let fahrenheit = inputTempature * (9/5) + 32
    let celsius = (inputTempature -32) * (5/9)



    if (vaihtoehto == 1) {
        if (inputTempature <= -273.15) {
            document.getElementById("tulokset").innerText = inputTempature + " Celsiusta on " + fahrenheit.toFixed(desimaali) + " Fahrenheitia , joka on pienempi kuin absoluuttinen nollapiste"
        } else {
            document.getElementById("tulokset").innerText = inputTempature + " Celsiusta on " + fahrenheit.toFixed(desimaali) + " Fahrenheitia"
        }
    }

    if (vaihtoehto == 2) {
        if (celsius <= -273.15) {
            document.getElementById("tulokset").innerText = inputTempature + " Fahrenheitia on " + celsius.toFixed(desimaali) + " Celsiusta, joka on pienempi kuin absoluuttinen nollapiste"
        } else {
            document.getElementById("tulokset").innerText = inputTempature + " Fahrenheitia on " + celsius.toFixed(desimaali) + " Celsiusta"
        }
    }
    
}