function notify() {
    let notifyButton = document.getElementById("notify");

    if (notifyButton.innerText === "Assinado!") {
        notifyButton.innerText = "Clique Aqui!";
        notifyButton.classList.remove("destaque");
        alert("Cancelado com sucesso!")
    } else {
        notifyButton.innerText = "Assinado!";
        notifyButton.classList.add("destaque");
        alert("Assinado com sucesso!")
    }
}

window.onscroll = function () {
    document.getElementById("voltarTopo").style.display =
        window.scrollY > 200 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
