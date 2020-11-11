var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
});

$('.btn-back').click(function (e) {
  swiper.slidePrev();
})

$('#main_form').submit(function (e) {
  e.preventDefault();
  swiper.slideNext();
})

$('#department_form').submit(function (e) {
  e.preventDefault();

  var name = $('#name').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var department = $('input[name="department"]:checked').val()

  window.parent.postMessage({
    type: "SET_NAME",
    name: name
  }, "*");
  window.parent.postMessage({
    type: "SET_EMAIL",
    email: email
  }, "*");
  window.parent.postMessage({
    type: "SET_PHONE",
    phone: phone
  }, "*");
  window.parent.postMessage({
    type: "ADD_CUSTOM_DATA",
    name: "department",
    value: department
  }, "*");
  window.parent.postMessage({
    type: "ENQUEUE"
  }, "*");
});

window.addEventListener('message', msg => console.debug(msg.data, 'msg.data'), false);

$('#getlanguage').click(function (e) {
  e.preventDefault();
  console.debug('GET_MLUVII_LANGUAGE')
  window.parent.postMessage({
    type: "GET_MLUVII_LANGUAGE",
  }, "*");
});
