console.log("from script file");
document.addEventListener("DOMContentLoaded", function() {

    const bookingForm = document.getElementById("bookingForm");

    const checkin = document.getElementById("checkin");

    const checkout = document.getElementById("checkout");

    bookingForm.addEventListener("submit", function(event) {

        // Prevent form submission if check-out date is before check-in date

        if (checkin.value && checkout.value && checkout.value <= checkin.value) {

            event.preventDefault();

            alert("Check-Out date must be after the Check-In date.");

        } else {

            alert("Booking submitted successfully!");

        }

    });

});