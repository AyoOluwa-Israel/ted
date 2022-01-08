const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");
burger.addEventListener("click", function () {
  burger.classList.toggle("change");
  navMenu.classList.toggle("open");
});

// const submitSponsor = document.getElementById("submitSponsor");
// submitSponsor.addEventListener("click", function () {
//   e.preventDefault();
// });

var sponsorsForm = document.getElementById("sponsorsForm");
sponsorsForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  // var message = document.getElementById("message").value;
  var business_name = document.getElementById("business_name").value;

  fetch("https://tedxfuta.herokuapp.com/partners_form", {
    method: "POST",
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      // message: message,
      business_name: business_name,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "X-CSRFToken":
        "iAiX7PfFfpMhPcbz9712GdBnk08A9oljxChVjad8Ku5OxjdgQjpqwJHXEcoM0fw3",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.data);
			alert("You have successfully submitted the form")
    });

		sponsorsForm.reset();
});

//Paymet integration for Flutterwave

// const payNow = (e) => {
//   e.preventDefault();

//   FlutterwaveCheckout({
//     public_key: "",
//     tx_ref: "tedxfuta_" + Math.floor(Math.random() * 10000000 + 1),
//     amount: document.getElementById("amount").value,
//     currency: "NGN",
//     customer: {
//       email: document.getElementById("email").value,
//       phonenumber: document.getElementById("phoneNumber").value,
//       name: document.getElementById("fullname").value,
//     },
//     callback: function (data) {
//       // console.log(data)

//       const refrence = data.tx_ref;
//       alert("Payment was successfully Completed" + refrence);
//     },
//     customization: {
//       title: "TEdxFUTA Ticketing Payments",
//       description: "Fullterwave paym,ent integration for TedxFuta",
//     },
//   });
// };
