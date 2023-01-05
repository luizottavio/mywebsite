let btn = document.querySelector(".button-mostra");

btn.addEventListener("click", function() {
    let conteiner = document.querySelector(".conteiner-prnj-esconder");

    conteiner.classList.toggle("hide");
});
