const count = document.querySelector('.count');
const btnWrapper = document.querySelector('.btnWrapper');
const btns = btnWrapper.querySelectorAll('.btn');


btnWrapper.addEventListener('click', (e) => {
    const id = e.target.id;

    btns.forEach((btn) => {
        if (btn.id === id) {
            btn.classList.add('active');
            btn.textContent = 'Нажата!'
        } else {
            btn.classList.remove('active');
            btn.textContent = 'Нажми меня'
        }
    })

    count.textContent = Number(count.textContent) + 1;
})
