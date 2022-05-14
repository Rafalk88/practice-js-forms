(function() {

const formEl = document.querySelector('form')

function checkData(e) {
    
    const email = e.target.elements.login
    const pass1 = e.target.elements.pass1
    const pass2 = e.target.elements.pass2
    const accept = e.target.elements.accept
    const errors = []
    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i

    if (!reg.test(email.value)) {

        errors.push(email)

    }

    if (pass1.value !== pass2.value || pass1.value.length <= 6 || pass2.value.length <= 6) {

        errors.push(pass1, pass2)

    }

    if (!(accept.checked === true)) {

        errors.push(accept)

    }

    if (errors.length > 0) {

        e.preventDefault()
        errors.forEach(function(err) {

            err.previousElementSibling.style.color = 'red'
            console.log(err)

        })

    } else {

        e.preventDefault()
        const inputs = [email, pass1, pass2, accept]
        inputs.forEach(function(element) {

            element.previousElementSibling.removeAttribute('style')

        })
        
        console.log('Done')

    }

}

formEl.addEventListener('submit', checkData)

})()