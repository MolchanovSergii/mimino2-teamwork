// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };
//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);
//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open123]'),
    closeModalBtn: document.querySelector('[data-modal-close123]'),
    modal: document.querySelector('[data-modal123]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
