console.log('Hey how are you?')
console.log(myName);

const boxOne = document.getElementsByClassName('.box-one');

// document.addEventListener('click', (event) => {
//   if(event.target.matches(boxOne)) {
//     console.log('fire')
//   }
// });

$(document).ready(function() {
  // Step one: Target
  // Step two: Add event listener
  // Step three: Effect

  // $('.box-two').on('click', () => {
  //   $('.box-one').css('background-color', 'green');
  // });

  $('.box-three').on('click', () => {
    $('.box-one').fadeOut(3000);
  });

  $('.box-two').on('click', () => {
    $('.box-one').slideDown();
  });

  $('.box-one').on('click', ()=> {
    const value = $('.box-one').text()
    console.log(value)
    $('.box-one').text('Some new text!')
  })


});