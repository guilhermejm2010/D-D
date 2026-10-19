window.addEventListener("scroll", function () {
    const header = document.querySelector("#header")

    header.classList.toggle("scrolled", window.scrollY > 50);

});

window.addEventListener("scroll", function () {
    const logo = document.querySelector("#img-logo")

    logo.classList.toggle("scrolled", window.scrollY > 50);

});

window.addEventListener("scroll", function () {
    const li = document.querySelectorAll("#header li")
    li.forEach(i => {
        i.classList.toggle("scrolled", window.scrollY > 50);
    })


});

let botao = document.getElementById("Button1");

botao.addEventListener("click" , function() {

    window.scrollBy({
        top: 800,
        behavior: "smooth"

    });

});
