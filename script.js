// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// WhatsApp Booking Logic
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    
    const clinicNumber = "919980686188"; 
    const message = `Hello Royal Dental Care! I would like to book a premium appointment.%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Patient Phone:* ${phone}%0A` +
                    `*Requested Date:* ${date}`;

    const whatsappUrl = `https://wa.me/${clinicNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank').focus();
});
