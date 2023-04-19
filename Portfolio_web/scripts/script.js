// const nav = document.querySelector('.nav')
// const nav_small = document.querySelector('.nav-small')
// const close = document.querySelector('.close')
// nav_small.addEventListener("click", () => {
//     nav.classList.remove('.disabled')
//     nav.classList.add('.active')}
// )
// close.addEventListener("click", ()=> {
//     nav.classList.remove('.active')
//     nav.classList.add('.disabled')
// })

const handleMenu = () => {
    console.log('menu')
    document.getElementById('nav_panel').classList.toggle('nav__show');
    document.getElementById('close_btn').classList.toggle('close_active');
}