/* VARIÁVEIS QUE PEGAM O INPUT CHECKBOX E O BODY */
const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

/* EVENTO DE CLIQUE A PARTIR DO INPUT */
inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute('data-bs-theme', modo)
})