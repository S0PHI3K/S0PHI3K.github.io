const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".score")


rates.forEach((rate)=> {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})