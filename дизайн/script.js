/* =========================
   TABS
========================= */

const buttons = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".section");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        sections.forEach(sec => sec.classList.remove("active"));

        button.classList.add("active");

        const id = button.dataset.tab;

        document.getElementById(id).classList.add("active");

    });

});

/* =========================
   GLOBAL SEARCH
========================= */

const searchInputs = document.querySelectorAll(".search");

searchInputs.forEach(input => {

    input.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const tableCard = this.closest(".table-card");

        const rows = tableCard.querySelectorAll("tbody tr");

        rows.forEach(row => {

            const rowText = row.innerText.toLowerCase();

            if (rowText.includes(value)) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

});