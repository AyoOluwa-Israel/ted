const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");
burger.addEventListener("click", function () {
  burger.classList.toggle("change");
  navMenu.classList.toggle("open");
});





var partnersForm = document.getElementById('partnersForm')
form.addEventListener('submit', function(e) {
	e.preventDefault();
	var name = document.getElementById("contact-name").value
	var email = document.getElementById("contact-email").value
	var phone = document.getElementById("contact-phone").value
	var message = document.getElementById("contact-message").value


	fetch( 'https://tedxfuta.herokuapp.com/partners_form', {
		method: 'POST',
		body: JSON.stringify({
			first_name: first_name,
			email: email,
			phone: phone,
			message: message
		}), 
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
      "X-CSRFToken": "iAiX7PfFfpMhPcbz9712GdBnk08A9oljxChVjad8Ku5OxjdgQjpqwJHXEcoM0fw3"
			}
	},
	)
		.then( response => response.json() )
		.then( response => {
				console.log(response.data)
		});


		form.reset();


})