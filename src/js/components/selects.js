const selects = document.querySelectorAll('.form-field__select');
selects.forEach(el => {
   new Choices(el, {
      shouldSold: false,
      position: 'bottom',
      searchEnabled: false,
   });
});