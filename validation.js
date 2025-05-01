document.addEventListener("DOMContentLoaded", function () {
    const donationForm = document.getElementById("donationForm");
    const joinForm = document.getElementById("joinForm");
    const contactForm = document.getElementById("contactForm");

    if (donationForm) {
        donationForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let isValid = true;

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const amount = document.getElementById("amount");
            const method = document.getElementById("method");

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const phoneError = document.getElementById("phoneError");
            const amountError = document.getElementById("amountError");
            const methodError = document.getElementById("methodError");

            nameError.textContent = "";
            emailError.textContent = "";
            phoneError.textContent = "";
            amountError.textContent = "";
            methodError.textContent = "";

            if (name.value.trim() === "") {
                nameError.textContent = "Please enter your name.";
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
                emailError.textContent = "Please enter a valid email.";
                isValid = false;
            }
            

            if (phone.value.trim() === "") {
                phoneError.textContent = "Please enter your phone number.";
                isValid = false;
            }

            if (amount.value.trim() === "") {
                amountError.textContent = "Please enter a valid amount.";
                isValid = false;
            }

            if (parseFloat(amount.value) < 1) {
                amountError.textContent = "Amount must be at least RM1.00.";
                isValid = false;
            }            

            if (method.value.trim() === "") {
                methodError.textContent = "Please select a method.";
                isValid = false;
            }

            if (isValid) {
                alert("Thank you for your donation!");
            }
        });
    }

    if (joinForm) {
        joinForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let isValid = true;

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const involment = document.getElementById("involment");

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const phoneError = document.getElementById("phoneError");
            const involmentError = document.getElementById("involmentError");

            nameError.textContent = "";
            emailError.textContent = "";
            phoneError.textContent = "";
            involmentError.textContent = "";

            if (name.value.trim() === "") {
                nameError.textContent = "Please enter your name.";
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
                emailError.textContent = "Please enter a valid email.";
                isValid = false;
            }

            if (phone.value.trim() === "") {
                phoneError.textContent = "Please enter your phone number.";
                isValid = false;
            }

            if (involment.value.trim() === "") {
                involmentError.textContent = "Please select an option.";
                isValid = false;
            }

            if (isValid) {
                alert("Thank you for joining us!");
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let isValid = true;

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const subject = document.getElementById("subject");
            const message = document.getElementById("message");

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const phoneError = document.getElementById("phoneError");
            const subjectError = document.getElementById("subjectError");
            const messageError = document.getElementById("messageError");

            nameError.textContent = "";
            emailError.textContent = "";
            phoneError.textContent = "";
            subjectError.textContent = "";

            if (name.value.trim() === "") {
                nameError.textContent = "Please enter your name.";
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
                emailError.textContent = "Please enter a valid email.";
                isValid = false;
            }

            if (phone.value.trim() === "") {
                phoneError.textContent = "Please enter your phone number.";
                isValid = false;
            }

            if (subject.value.trim() === "") {
                subjectError.textContent = "Please enter a subject.";
                isValid = false;
            }

            if (message.value.trim() === "") {
                messageError.textContent = "Please enter a message.";
                isValid = false;
            }

            if (isValid) {
                alert("Your message has been sent. We’ll get back to you soon.");
            }
        });
    }
});
