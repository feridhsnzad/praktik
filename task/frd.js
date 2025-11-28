document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {

        // Əgər artıq açıqdısa — geri kart halına qayıtsın
        if (card.classList.contains("open")) {
            card.classList.remove("open");
            card.innerHTML = card.dataset.originalText;
            return;
        }

        // Kart yazısını yadda saxla
        card.dataset.originalText = card.innerHTML;

        let imgSrc = card.getAttribute("data-img");

        // Kartı şəkilə çevir
        card.classList.add("open");
        card.innerHTML = `<img src="${imgSrc}">`;
        



    });
});
