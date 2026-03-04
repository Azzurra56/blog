function showModal(el) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalDesc = document.getElementById("modal-desc");
  
  if (modal) modal.style.display = "block";
  if (modalImg && el.dataset.img) modalImg.src = el.dataset.img;
  if (modalDesc && el.dataset.desc) modalDesc.innerText = el.dataset.desc;

  // Allow closing by clicking the overlay (outside the content)
  if (modal && !modal.dataset.boundOverlayClose) {
    modal.addEventListener("click", (evt) => {
      if (evt.target === modal) closeModal();
    });
    modal.dataset.boundOverlayClose = "true";
  }

  // Allow closing with Escape key while modal is open
  if (!document.body.dataset.boundEscClose) {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") closeModal();
    });
    document.body.dataset.boundEscClose = "true";
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
}

window.showModal = showModal;
window.closeModal = closeModal;
  