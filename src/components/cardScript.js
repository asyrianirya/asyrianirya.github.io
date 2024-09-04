const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    const radio = card.querySelector('input[type="radio"]');
    radio.addEventListener("change", function () {
        cards.forEach((c) => {
            c.style.backgroundColor = "";
            c.style.border = "";
            c.ondblclick = null;
        });
        if (radio.checked) {
            card.style.backgroundColor = "aquamarine";
            card.style.border = "1px solid aqua";
            card.ondblclick = () => {
                console.log("dbl");
            };
        }
    });
});
