function signup() {
  Swal.fire({
    title: 'Sign Up',
    html: `<input type="text" class="swal2-input" placeholder="Username" id="login">
    <input type="email" class="swal2-input" name="Mail" placeholder="johndoe@example.com" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
    <input type="text" class="swal2-input" placeholder="Category Ex. Technology" id="category">
    <input type="password" class="swal2-input" placeholder="Password" id="password">
    <input type="password" class="swal2-input" name="ConfirmPassword" placeholder="Confirm Password" id="con_password">`,
    confirmButtonText: 'Sign Up',
    focusConfirm: false,
    preConfirm: () => {
      //Variables of fields in sign up
      const username = Swal.getPopup().querySelector('#login').value
      const password = Swal.getPopup().querySelector('#password').value
      const email = Swal.getPopup().querySelector('#email').value
      const conpass = Swal.getPopup().querySelector('#con_password').value

      //Variables for proper characters
      var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
      var strongPass = /^[A-Za-z]\w{7,14}$/;

      //empty fields
      if(!username || !password || !email || !conpass) {

        Swal.showValidationMessage(`Please Fill in all the fields!`)
      } else if(!email.match(validRegex)) {

        Swal.showValidationMessage(`Please use a valid email!`)
      } else if (!password.match(strongPass)) {

        Swal.showValidationMessage(`Password must contain at least one NUMBER, one UPPERCASE and LOWERCASE letter, and at least 7 to 14 characters`)

      } else if (password != conpass) {
        Swal.showValidationMessage(`Passwords don't match!`)
      } 

      else {
        Swal.fire({
          icon: 'success',
          title: 'Registered Successfully!',
          text: 'You have signed up!',
          button: 'Continue'
        })
      }
    } 
  })
}