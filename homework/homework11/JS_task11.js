let buttons = document.querySelectorAll('.btn');
let highlightedBtn = null;

document.addEventListener('keydown', (e) => {
    buttons.forEach(button => {
        if (button.name === e.key){
            if (highlightedBtn != null) {
                highlightedBtn.style.backgroundColor = 'black';
            }
            button.style.backgroundColor = 'blue';
            highlightedBtn = button;
        }
    })
})

