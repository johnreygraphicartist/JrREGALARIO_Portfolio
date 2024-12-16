function toggleMenu() {
  const overlay = document.getElementById('overlay');
  overlay.classList.toggle('show');
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

function showDetails(detailsId) {
  const details = document.getElementById(detailsId);
  if (details.style.display === "block") {
      details.style.display = "none";
  } else {
      details.style.display = "block";
  }
}




