document.addEventListener('DOMContentLoaded', init)

function init () {

    const formEl = document.forms[0]
    const messagesEl = document.querySelector('.messages')
    const btn = document.querySelector('input[type=submit]')

    btn.addEventListener('click', validateForm)

    function validateForm(e) {

        e.preventDefault()
        
        const errors = []

        fields = [

            {name: 'firstName', label: 'Imię', required: true},
            {name: 'lastName', label: 'Nazwisko', required: true},
            {name: 'street', label: 'Ulica', required: true},
            {name: 'houseNumber', label: 'Numer budynku', required: true},
            {name: 'flatNumber', label: 'Numer mieszkania', required: false},
            {name: 'zip', label: 'Kod pocztowy', pattern: "/[0-9]{2}-[0-9]{3}/", required: true},
            {name: 'city', label: 'Miejscowość', required: true},
            {name: 'voivodeship', label: 'Województwo', required: true},

        ]

        fields.forEach(function(object) {

            const value = formEl.elements[object.name].value

            if (object.required) {

                if (value.length === 0) {

                    errors.push(`Dane w polu ${object.label} są niepoprane!`)

                }

            }

            if (object.number === 'number') {

                if (Number.isNaN(Number(value))) {

                    errors.push(`Dane w polu ${object.label} muszą być liczbą!`)

                }

            }

            if (object.pattern) {

                const reg = new RegExp(object.pattern)
                if (!reg.test(value)) {

                    errors.push(`Dane w polu ${object.label} muszą być zgodne ze wzorem: ${object.pattern} !`)

                }

            }

        })

        messagesEl.innerText = ''

        if (errors.length === 0) {

            alert('Dane zostały wysłane prawidłowo.')

        } else {

            errors.forEach(function(text) {

                const liEl = document.createElement('li')
                liEl.innerText = text
                liEl.style.color = 'red'
                messagesEl.appendChild(liEl)

            })

        }

    }
    
}