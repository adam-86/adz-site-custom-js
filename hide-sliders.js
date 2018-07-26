// scripts hiding contract range sliders

//file location wp-content/themes/my-listing/js/custom.js
window.onload = function(){

//billingOptions refers to actual checkboxes, sliders refers to range sliders
const billingOptions = document.querySelectorAll('input[type=checkbox]'),
      sliders = document.querySelectorAll('.range-slider');

//create array from slider nodes and apply hidden class to each one on page load
Array.from(sliders).forEach(slider => {

  slider.classList.add('hidden');

});

//create array from the billing Options
  Array.from(billingOptions).forEach(option => {

  //listen for click on options
      option.addEventListener('click', function() {

    //check values of clicked option and toggle hidden class on matching slider
            if(this.value == '1 Month') {

            sliders[0].classList.toggle( 'hidden' );

          }

            if(this.value == "3 Months") {

              sliders[1].classList.toggle( 'hidden' );

          }

            if(this.value == "6 Months") {

              sliders[2].classList.toggle( 'hidden' );

          }

            if(this.value == "12 Months") {

              sliders[3].classList.toggle( 'hidden' );

          }
      });
    });
};
