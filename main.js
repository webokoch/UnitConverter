const btn = document.getElementById("input-button")
const input = document.getElementById("input-number")
const lengthConversion = document.getElementById("length-conversion")
const volumeConversion = document.getElementById("volume-conversion")
const massConversion = document.getElementById("mass-conversion")

btn.addEventListener('click', ()=>{
    const numberToConvert = input.value
    convertLength(numberToConvert)
    convertVolume(numberToConvert)
    convertMass(numberToConvert)
})

const convertLength = (num) => {
    const length = `${num} meters = ${(num * 3.281).toFixed(3)} feet | ${num} feet = ${(num / 3.281).toFixed(3)} meters`
    lengthConversion.innerText = length
}
const convertVolume = (num) => {
    const volume = `${num} liters = ${(num * 0.264).toFixed(3)} gallons | ${num} gallons = ${(num / 0.264).toFixed(3)} liters`
    volumeConversion.innerText = volume
}
const convertMass = (num) => {
    const mass = `${num} kilos = ${(num * 2.204).toFixed(3)} pounds | ${num} pounds = ${(num / 2.204).toFixed(3)} kilos`
    massConversion.innerText = mass
}

