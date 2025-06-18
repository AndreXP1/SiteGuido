document.addEventListener("DOMContentLoaded", function () {
const apiURL = "https://script.google.com/macros/s/AKfycbyDTNfilZAwrRnnbLJeuM-5RfHN08wCdEPgobvvDC1hStijWEN5OA53D1yA-uErP9Rk/exec"; // Substitua por sua URL real

const buttons = document.querySelectorAll(".rating-btn");
const resultDiv = document.getElementById("result");

buttons.forEach(button => {
button.addEventListener("click", () => {
    const nota = button.getAttribute("data-value");

    fetch(apiURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "nota=" + encodeURIComponent(nota)
        }).then(() => {
                resultDiv.textContent = "Obrigado pela sua avaliação!";
        }).catch(() => {
                resultDiv.textContent = "Erro ao enviar avaliação.";
            });
        });
    });
});
