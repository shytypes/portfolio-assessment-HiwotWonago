const form = document.querySelector('form');

function handlesubmit(e){
    e.preventDefault(); // Prevent the default form submission behavior
    
        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value;
        const email = document.querySelector('#email').value;
        const age = document.querySelector('#age').value;
        const resultUIView = document.querySelector('#result-view');
        const ageErrorSpan = document.querySelector('#ageErrorSpan');

        if (age < 18) {
            const errorMsg = "You must be at least 18 years old to sign up."; 
            ageErrorSpan.innerHTML = '<p style= "color:red;"> ${errorMsg} </p>'; // Display the error message
        }
            //store data in object
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
    };
    resultUIView.innerHTML = `<li>First Name =>  ${firstName}</li>
    <li>Last Name => ${lastName}</li>
    <li>Email => ${email}</li>
    <li>Age  => ${age}</li>`;        
    console.log(formData); // Log the form data to the console
        alert(`Thank you for signing up, ${firstName} ${lastName}!\nEmail: ${email}\nAge: ${age}`);
}
form.addEventListener('submit', handlesubmit); // Attach the event listener to the form submit event
    
    