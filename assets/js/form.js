class ContactFormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.phoneInput = document.getElementById("phone");

        // intl-tel-input init
        this.iti = window.intlTelInput(this.phoneInput, {
            initialCountry: "ch",
            geoIpLookup: function (callback) {
                fetch('https://ipinfo.io/json?token=<your_token>')
                    .then(resp => resp.json())
                    .then(resp => callback(resp.country))
                    .catch(() => callback('us'));
            },
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.6/build/js/utils.js"
        });

        const emailPattern = /^[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+(?:\.[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+)*@([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]/;

        this.fields = {
            firstName: {
                element: document.getElementById("firstName"),
                error: document.getElementById("firstNameError"),
                validate: value => value !== '',
                message: "First name is required."
            },
            lastName: {
                element: document.getElementById("lastName"),
                error: document.getElementById("lastNameError"),
                validate: value => value !== '',
                message: "Last name is required."
            },
            email: {
                element: document.getElementById("email"),
                error: document.getElementById("emailError"),
                validate: value => emailPattern.test(value),
                message: "Enter a valid email address."
            },
            message: {
                element: document.getElementById("message"),
                error: document.getElementById("messageError"),
                validate: value => value !== '',
                message: "Message is required."
            }
        };

        this.phoneError = document.getElementById("phoneError");

        this.form.addEventListener("submit", this.handleSubmit.bind(this));

        this.registerRealtimeValidation();
    }

    clearErrors() {
        for (let key in this.fields) {
            this.fields[key].error.innerText = "";
        }
        this.phoneError.innerText = "";
    }

    validateField(key) {
        const field = this.fields[key];
        const value = field.element.value.trim();
        if (!field.validate(value)) {
            field.error.innerText = field.message;
            return false;
        } else {
            field.error.innerText = "";
            return true;
        }
    }

    validatePhone() {
        if (!this.iti.isValidNumber()) {
            this.phoneError.innerText = "Enter a valid phone number.";
            return false;
        } else {
            this.phoneError.innerText = "";
            return true;
        }
    }

    registerRealtimeValidation() {
        // Text/email/message inputs
        for (let key in this.fields) {
            this.fields[key].element.addEventListener("input", () => {
                this.validateField(key);
            });
        }

        // Phone input validation
        this.phoneInput.addEventListener("input", () => {
            this.validatePhone();
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.clearErrors();

        let isValid = true;

        for (let key in this.fields) {
            if (!this.validateField(key)) {
                isValid = false;
            }
        }

        if (!this.validatePhone()) {
            isValid = false;
        }

        if (isValid) {
            // Show spinner and disable button
            const submitBtn = document.getElementById("submitButton");
            const btnText = submitBtn.querySelector(".btn-text");
            const spinner = submitBtn.querySelector(".spinner");

            submitBtn.disabled = true;
            btnText.style.display = "none";
            spinner.style.display = "inline-block";


            setTimeout(() => {
                const formData = new FormData(this.form);
                const data = {};
                formData.forEach((value, key) => {
                    data[key] = value;
                });
                data.phone = this.iti.getNumber();

                console.log("Form data submitted:", data);

                // Reset form and phone input
                this.form.reset();
                this.iti.setNumber("");
                this.phoneError.innerText = "";

                // Hide spinner, show button text again
                spinner.style.display = "none";
                btnText.style.display = "inline";
                submitBtn.disabled = false;

                // Show modal
                this.showSuccessModal();
            }, 1000);
        }
    }


    showSuccessModal() {
        const modal = document.getElementById("successModal");
        const closeBtn = document.getElementById("closeModal");

        modal.style.display = "block";

        closeBtn.onclick = () => {
            modal.style.display = "none";
        };

        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }


}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");
    new ContactFormValidator("contactForm");
});

