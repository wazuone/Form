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
		if (el.value === '') { // sprawdza czy inputa ma wypełioną treść
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
} // argument INPUT z funkcji "checkForm" przechowuje tablicę z inputami
// argument EL odnosi się do kazdej zmiennej, którą umieściliśmy w tablicy

// Funkcja do sprawdzania długości tekstu

const checkLength = (input, min) => {
	if (input.value.length < min) {
		// sprawdzamy czy to co wpiszemy do nasszego inputa będzie mniejsze niż jakaś wartość
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z min. ${min} znaków.`)
	}
}

//funkcja która porównuje czy hasła są takie same

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, 'Hasła do siebie nie pasują')
	}
}

// RegExp i walidacja maila

const checkMail = email => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	// sprawdzenie czy to co wpisalismy do inputa maila porównuje się z regex

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'E-mail jest niepoprawny')
	}
}

// funkcja do wysyłania formularza i sprawdzanie błędów. Można zliczyć błędy "error"

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form-box')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		popup.classList.add('show-popup')
	}

	console.log(errorCount);
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()

	checkForm([username, pass, pass2, email])
	checkLength(username, 6)
	checkLength(pass, 8)
	checkPassword(pass, pass2)
	checkMail(email)
	checkErrors()
})

// 3. Funkcja odpowiada za to aby skasować błąd

clearBtn.addEventListener('click', e => {
	e.preventDefault() // sprawia że po kliknięciu formularz się nie przeładowywuje

	// pętla, która przechodzi przez każdy element i usuwa z niego wartość
	;[username, pass, pass2, email].forEach(el => { // zamiast odwoływać się do każdego elementu osobno, zostały one umiesszczone w tablicy
		el.value = '' //czyścimy zawartość inputa
		clearError(el) //czyścimy błąd inputa
	})
})
