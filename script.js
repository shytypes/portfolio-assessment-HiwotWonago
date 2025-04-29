document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    function handlesubmit(e) {
        e.preventDefault();

        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const phoneErrorSpan = document.querySelector('#phoneErrorSpan');
        const age = document.querySelector('#age').value;
        const resultUIView = document.querySelector('#result-view');
        const ageErrorSpan = document.querySelector('#ageErrorSpan');

        phoneErrorSpan.innerHTML = "";
        ageErrorSpan.innerHTML = "";

        if (age < 18) {
            const errorMsg = "You must be at least 18 years old to sign up.";
            ageErrorSpan.innerHTML = `<p style="color:red;">${errorMsg}</p>`;
            return;
        }

        if (phone.length < 10) {
            const errorMsg = "Phone number must be at least 10 digits long.";
            phoneErrorSpan.innerHTML = `<p style="color:red;">${errorMsg}</p>`;
            return;
        }

        const formData = {
            firstName,
            lastName,
            email,
            phone,
            age,
        };

        resultUIView.innerHTML = `<li>First Name =>  ${firstName}</li>
        <li>Last Name => ${lastName}</li>
        <li>Email => ${email}</li>
        <li>Phone => ${phone}</li>
        <li>Age  => ${age}</li>`;

        console.log(formData);
        alert(`Thank you for signing up, ${firstName} ${lastName}!\nEmail: ${email}\nAge: ${age}`);
    }

    form.addEventListener('submit', handlesubmit);
});
