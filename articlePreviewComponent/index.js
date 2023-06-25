const shareBackground = document.querySelector('.share-background')
const shareContainer = document.querySelector('#display')

shareBackground.addEventListener("mouseover", () => {
    shareContainer.style.display = 'flex';
})

shareBackground.addEventListener("mouseout", () => {
    shareContainer.style.display = 'none';
})