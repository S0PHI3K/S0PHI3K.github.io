async function getData() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        if (!response.ok){
            throw new Error(response.status)
        } else {
            const data = await response.json()
            const advice = document.getElementById("advice")
            advice.innerHTML = `ADVICE #${data.slip.id}`
            const statement = document.getElementById("statement")
            statement.innerHTML = `"${data.slip.advice}"`
        }
    }
    catch (error){
        console.error(error)
    }
}
getData()

const button = document.querySelector('.dice-button')
button.addEventListener("click", () => {
    getData()
})