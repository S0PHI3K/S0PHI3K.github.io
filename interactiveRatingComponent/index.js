function submitFeedback (id) {

    if (id === 1){
        return "You have selected 1 out of 5"
    } else if (id === 2){
        return  "You have selected 2 out of 5"
    } else if (id === 3){
        return "You have selected 3 out of 5"
    } else if (id === 4){
        return "You have selected 4 out of 5"
    } else if (id === 5){
        return "You have selected 5 out of 5"
    } else {
        return "You have not provided a rating"
    }
}

submitFeedback ()

document.getElementsByClassName("score").addEventListener("click", submitFeedback)