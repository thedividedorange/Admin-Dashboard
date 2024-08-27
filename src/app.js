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
    
    const menuBtn = document.getElementById('menu-btn')
    const sidebar = document.getElementById('sidebar')
    const body = document.querySelector('body')
    
  
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        sidebar.classList.toggle('translate-x-0')
        sidebar.classList.toggle('transition-transform')
    })
    
    body.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
            sidebar.classList.remove('translate-x-0')
            sidebar.classList.remove('transition-transform')
        }
    })
})