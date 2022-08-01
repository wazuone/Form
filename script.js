const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

// WALIDATOR FORMULARZA

// 2. Funkcja, która wysietla błąd gdy np. pole jest puste

const showError = (input, msg) => {
	// argument INPUT przechowuje nasze INPUTy
	// argument MSG przechowuje nasze placeholdery

	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

// 1. Funkcja, która prawdza nasz formularz czy wszystkie pola są wypełnione

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
} // argument INPUT z funkcji "checkForm" przechowuje tablicę z inputami
// argument EL odnosi się do kazdej zmiennej, którą umieściliśmy w tablicy

sendBtn.addEventListener('click', e => {
	e.preventDefault()

	checkForm([username, pass, pass2, email])
})

// 3. Funkcja odpowiada za to aby skasować błąd

clearBtn.addEventListener('click', e => {
	e.preventDefault()

	// pętla, która przechodzi przez każdy element i usuwa z niego wartość
	;[username, pass, pass2, email].forEach(el => {
		el.value = ''
	})
})
