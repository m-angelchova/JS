function toggle() {
    const content = document.querySelector('#extra')
    const button = document.querySelector('.button')
    
    // if(button.textContent === 'More'){
    //     content.style.display = 'block'
    //     button.textContent = 'Less'
    // }else{
    //     content.style.display = 'none'
    //     button.textContent = 'More'
    // }

    content.style.display = content.style.display === 'block' ? 'none' : 'block'
    button.textContent = button.textContent === 'More' ? 'Less' : 'More'
}