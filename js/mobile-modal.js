// window-modal-mobile
(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-mobile-modal-open'),
    modal: document.querySelector('.js-mobile-modal'),
    body: document.querySelector('#body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('mobile-modal-is-open');
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
