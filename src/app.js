document.addEventListener('DOMContentLoaded', ()=>{

    const cards = document.querySelectorAll(".card.cursor-pointer")

    cards.forEach(card => {
    if (!card.dataset.listenersAdded) {
        card.addEventListener("mouseenter", function(e) {
            let x = e.currentTarget.querySelector('main')
            x.classList.toggle('hidden')
            x.classList.toggle('inline-flex')
            x.setAttribute('style', 'display:-webkit-box')
        })
        card.addEventListener("mouseleave", function(e) {
            let y = e.currentTarget.querySelector('main');
            y.classList.toggle('hidden')
            y.classList.toggle('inline-flex')
            y.setAttribute('style', 'display:none')
        })

        card.dataset.listenersAdded = true
    }
    })
    
})