const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

// Open modal
openBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

// Close modal (button)
closeBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// Close modal when clicking outside
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});
