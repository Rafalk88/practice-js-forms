const inputElements = document.querySelectorAll('input')
const ulList = document.querySelector('.users-list')

function addUserToUl(e) {

    e.preventDefault()
    const liElement = document.createElement('li')
    liElement.classList.add('users-list__person')
    liElement.innerText = inputElements[0].value + ' ' + inputElements[1].value

    ulList.appendChild(liElement)

}

inputElements[2].addEventListener('click', addUserToUl)