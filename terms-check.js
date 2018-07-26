// Make sure terms and conditions have been opened before allowing signup

//variables....
const termsLink = document.querySelector('.terms-link'),
      signupCheck = document.querySelector('.signup-check'),
      signupSubmit = document.querySelector('.signup-submit');

//listen for clicks on the terms and conditions link..
  termsLink.addEventListener('click', function(){

// if clicked, set the signupCheck checked to true (false by default)
    signupCheck.checked = true;

  })

  signupSubmit.addEventListener('click', function(e){

// if submit is clicked without first clicking on terms link....
    if (signupCheck.checked == false) {

// prevent form from submitting
      e.preventDefault();

// alert message inform them to read the terms.
      alert('You must read the terms and conditions before signing up');
    }
});
