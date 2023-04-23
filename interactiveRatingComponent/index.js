const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".score")


rates.forEach((rate)=> {
    rate.addEventListener("click", () => {
        // rate.style.backgroundColor = 'hsl(25, 97%, 53%)'
        rating.innerHTML = rate.innerHTML
    })
})

const cardContainer = document.querySelector('.card-container')
const thanksContainer = document.querySelector('.thank-you-container')
const submit = document.querySelector('.submit-button')

submit.addEventListener("click", () => {
    cardContainer.style.display = 'none';
    thanksContainer.style.display = 'block';
})