(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-se]'),
    closeModalBtn: document.querySelector('[data-modal-close-se]'),
    modal: document.querySelector('[data-modal-se]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open-se');
    refs.modal.classList.toggle('is-hidden');
  }
})();
