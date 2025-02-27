const toggle_Button = document.getElementsByClassName("toggle_Button")[0];
const nav_Links = document.getElementsByClassName("nav_Links")[0];

toggle_Button.addEventListener("click", () => {
  nav_Links.classList.toggle("active");
});

let input = document.getElementById('password');
let Ward = document.getElementById('Wardpass');
Ward.addEventListener('click', function () {
    if (input.type === 'password') {
        input.type = 'text';
        Ward.textContent = '';
    } else {
        input.type = 'password';
        Ward.textContent = '';
    }
})