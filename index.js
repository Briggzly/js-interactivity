const addButton = document.querySelector('#add-btn')

let message = document.querySelector('#message')


const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('#userinput')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    inputField = ''
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted.`
    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('.checked')
    if (event.target.classList.contains('.checked') === true) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} Added Back!`
    }
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(function() {message.classList.add('hide')}, 2000)
}

document.querySelector('form').addEventListener('submit', addMovie)



