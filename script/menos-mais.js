let btn = document.querySelector(".button-mostra");

btn.addEventListener("click", function() {
    let conteiner = document.querySelector(".conteiner-prnj-esconder");

    conteiner.classList.toggle("hide");

    if (conteiner.classList.contains("hide") != true) {
        return btn.textContent = "mostrar menos";
    } else {
        return btn.textContent = "mostrar mais";
    }
});