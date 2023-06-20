const inputCheck = document.querySelector('#modeDark')
const elemento = document.querySelector('body')
inputCheck.addEventListener('click', ()=>{
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute('data-bs-theme',modo);
})