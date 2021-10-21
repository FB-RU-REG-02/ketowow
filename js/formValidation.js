"use strict";

(function () {
  var $form = document.querySelector('.js-orderform');
  var $nameField = $form.querySelector('input[name="order[name]"]');
  var $emailField = $form.querySelector('input[name="order[email]"]');
  var reName = /^[а-яА-Я]{2}|[a-zA-Z]{2}$/;
  var reEmail = /^((([0-9A-Za-z]{1}[\x2D\.0-9A-z]+[0-9A-Za-z]{1})|([0-9\u0410-\u044F]{1}[\x2D\.0-9\u0410-\u044F]+[0-9\u0410-\u044F]{1}))@([\x2DA-Za-z]+\.){1,2}[\x2DA-Za-z]{2,})$/;
  validateFormField($nameField, reName, 'Пожалуйста, введите корректное имя');
  validateFormField($emailField, reEmail, 'Пожалуйста, введите корректный e-mail');
  /**
   *
   * @param {Node} field
   * @param {RegExp} re
   * @param {String} message
   */

  function validateFormField(field, re) {
    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Пожалуйста, введите корректные данные';
    field.addEventListener('input', function (evt) {
      var fieldValue = field.value.trim();

      if (fieldValue && re.test(fieldValue)) {
        field.setCustomValidity('');
      } else {
        field.setCustomValidity(message);
      }
    });
  }
})();