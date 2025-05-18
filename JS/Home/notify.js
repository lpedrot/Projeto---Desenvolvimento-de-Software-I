function notify() {

    document.getElementById("notify").innerText = "Assinado!";
    document.getElementById("notify").classList.add("destaque");


}

window.onscroll = function () {
    document.getElementById("voltarTopo").style.display =
        window.scrollY > 200 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
