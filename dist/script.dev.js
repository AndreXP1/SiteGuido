"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var apiURL = "https://script.google.com/macros/s/AKfycbyDTNfilZAwrRnnbLJeuM-5RfHN08wCdEPgobvvDC1hStijWEN5OA53D1yA-uErP9Rk/exec"; 

  var buttons = document.querySelectorAll(".rating-btn");
  var resultDiv = document.getElementById("result");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var nota = button.getAttribute("data-value");
      fetch(apiURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "nota=" + encodeURIComponent(nota)
      }).then(function () {
        resultDiv.textContent = "Obrigado pela sua avaliação!";
      })["catch"](function () {
        resultDiv.textContent = "Erro ao enviar avaliação.";
      });
    });
  });
});
