//your JS code here. If required.
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted
    event.preventDefault();
    
    // Get the form data
    var firstName = document.querySelector('input[name="First Name"]').value;
    var lastName = document.querySelector('input[name="Last Name"]').value;
    var phoneNumber = document.querySelector('input[name="Phone Number"]').value;
    var emailId = document.querySelector('input[name="Email ID"]').value;
    
    // Create the alert message
    var message = 'First Name: ' + firstName + '\n' +
                  'Last Name: ' + lastName + '\n' +
                  'Phone Number: ' + phoneNumber + '\n' +
                  'Email ID: ' + emailId;
    
    // Display the alert
    alert(message);
});