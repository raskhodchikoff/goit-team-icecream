(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-ol]'),
    closeModalBtn: document.querySelector('[data-modal-close-ol]'),
    modal: document.querySelector('[data-modal-ol]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open-ol');
    refs.modal.classList.toggle('is-hidden');
  }
})();
