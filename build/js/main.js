const initApp =() =>{
    const hamburgerBtn = document.getElementById('hamburger-btn')
    const mobilemenu =document.getElementById('moblie-menu')

    const ToggleEvent=()=>{
        mobilemenu.classList.toggle('hidden')
        mobilemenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener("click", ToggleEvent)
    mobilemenu.addEventListener("click", ToggleEvent)
}

document.addEventListener('DOMContentLoaded',initApp)