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

<section id="location">
    <h2>Visit Our Clinic</h2>
    <p>Petla Burz Rd, Doctors Lane, Raichur, Karnataka 584101</p>
    
    <div class="map-container">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.334460454321!2d77.3600!3d16.2120!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8ade339999999%3A0x7777777777777777!2sRoyal%20Dental%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
    
    <div class="directions-btn">
        <a href="https://www.google.com/maps/dir//Royal+Dental+Care,+Petla+Burz+Rd,+Raichur,+Karnataka+584101" target="_blank">
            Get Directions
        </a>
    </div>
</section>
