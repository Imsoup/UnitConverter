const inputEl = document.getElementById("input-el")
const inputBtn= document.getElementById("input-btn")
const lenEl = document.getElementById("len-el")
const volEl = document.getElementById("vol-el")
const massEl = document.getElementById("mass-el")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204



inputBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    lenEl.textContent = `${baseValue} meter = ${Number((baseValue) * meterToFeet).toFixed(2)} feet |
        ${baseValue} feet = ${Number((baseValue) / meterToFeet).toFixed(2)} feet` 
    volEl.textContent = `${baseValue} liters = ${Number((baseValue) * literToGallon).toFixed(2)} gallons |
        ${baseValue} gallons = ${Number((baseValue) / literToGallon).toFixed(2)} liters` 
    massEl.textContent = `${baseValue} kilos = ${Number((baseValue) * kiloToPound).toFixed(2)} pounds |
        ${baseValue} pounds = ${Number((baseValue) / kiloToPound).toFixed(2)} kilos` 
    
    
})

inputEl.addEventListener("click", function(){
    inputEl.value = ""
})



