// Make sure terms and conditions have been opened before allowing signup

//file name --> register-form.php

const	alertMessage = 'Please read the terms and conditions before continuing',
      signupCheck = document.querySelector('.signup-checkbox>.signup-check'),
      elems = [signupCheck, document.querySelector('.signup-submit')];


    elems.forEach(elem => {

  //listen for clicks on submit button or checkbox
      elem.addEventListener('click', function(e){

  //if the value of signup check is unread.....
        if (signupCheck.value === 'unread') {

  //prevent devault action of element that was clicked
          e.preventDefault();

          alert(alertMessage);
        };
      });
    });

  /* if the terms and conditions link is actually clicked on
    the value of signupCheck is set to ok, allowing the form to be submitted */
  document.querySelector('.terms-link').addEventListener('click', function(){
    signupCheck.value = "ok";

});
