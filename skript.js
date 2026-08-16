/* =========================
   BOX DETAILS
========================= */

function openBox(title, items) {

    const modal = document.getElementById("boxModal");

    const boxTitle = document.getElementById("boxTitle");

    const boxItems = document.getElementById("boxItems");


    boxTitle.textContent = title;


    boxItems.innerHTML = "";


    items.forEach(function(item, index) {

        const div = document.createElement("div");

        div.className = "box-item";

        div.textContent = item;


        div.style.animationDelay =
            (index * 0.05) + "s";


        boxItems.appendChild(div);

    });


    modal.style.display = "flex";


    requestAnimationFrame(function() {

        modal.classList.add("show");

    });


    document.body.style.overflow = "hidden";

}


/* =========================
   CLOSE BOX
========================= */

function closeBox() {

    const modal = document.getElementById("boxModal");


    modal.classList.remove("show");


    setTimeout(function() {

        modal.style.display = "none";

    }, 300);


    document.body.style.overflow = "";

}


/* =========================
   CLICK OUTSIDE MODAL
========================= */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("boxModal");


    if (
        event.target === modal
    ) {

        closeBox();

    }

});


/* =========================
   ESC CLOSE
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeBox();

    }

});