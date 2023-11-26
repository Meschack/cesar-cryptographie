import { cesarCryptography } from './cesarCryptography.ts'

const input = document.querySelector<HTMLInputElement>('#sentence')
const select = document.querySelector<HTMLSelectElement>('#action')
const messageContainer = document.querySelector<HTMLDivElement>('.messageContainer')
const resultAnnounceSentence = document.querySelector<HTMLSpanElement>('.messageContainer span')
const messageShowElement = document.querySelector<HTMLParagraphElement>('.display')

type ActionType = 'encrypt' | 'decrypt'

let action: ActionType = 'encrypt'

const updateUI = (input: string, action: ActionType = 'encrypt') => {
    if (messageContainer) {
        if (input.length === 0) {
            messageContainer.style.display = 'none'
        } else {
            messageContainer.style.display = 'block'
        }

        if (messageShowElement) {
            console.log(input, action === 'decrypt')
            messageShowElement.textContent = cesarCryptography(input, action === 'decrypt')
        }
    }
}

const handleInput = () => {
    if (input) updateUI(input?.value)
}

const handleChange = (event: Event) => {
    const element = event.target as HTMLSelectElement

    if (element.value === 'encrypt' || element.value === 'decrypt') {
        action = element.value

        if (resultAnnounceSentence) {
            resultAnnounceSentence.textContent = action === 'encrypt' ? 'Résultat du cryptage' : 'Résultat du cryptage'
        }

        if (input) updateUI(input?.value, action)
    }
}

if (input) {
    input.addEventListener('input', handleInput)
}

if (select) {
    select.addEventListener('change', (event) => handleChange(event))
}
