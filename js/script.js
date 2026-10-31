const form = document.getElementById("formKontak");
const pesanSukses = document.getElementById("pesanSukses");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;

  pesanSukses.textContent = "Terima kasih, " + nama + "! Pesanmu sudah kami terima.";
  pesanSukses.className = "alert alert-success mt-3";

  form.reset();
});