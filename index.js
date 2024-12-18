// select elements
const form = document.getElementById('form');



form.addEventListener('submit', (e) => {
    e.preventDefault()
    const mortgageAmount = form.elements.amount.value
    const term = form.elements.term.value
    const rate = form.elements.rate.value

    console.log(term,rate)
})
