document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Get the data from the form
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    
    // 2. Your Clinic's WhatsApp Number (Include country code, no '+' or spaces)
    const clinicNumber = "919980686188"; 

    // 3. Create the encoded message
    const message = `Hello Royal Dental Care! I would like to book an appointment.%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Patient Phone:* ${phone}%0A` +
                    `*Requested Date:* ${date}`;

    // 4. Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${clinicNumber}?text=${message}`;

    // 5. Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank').focus();

    // Optional: Show a success message on the page
    document.getElementById('confirmationMessage').innerText = "Opening WhatsApp to send your request...";
});

