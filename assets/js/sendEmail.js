function sendMail(contactForm) {
    emailjs.send("service_klkawbf","template_savnrya", {
        "from_name": contactForm.firstname.value, 
        "from_email": contactForm.emailaddress.value, 
        "game_message": contactForm.messagesummary.value
    })
    .then (
        function(response) {
            $("#alertModal").modal("show");
        }, 
        function(error) {
            $("#alertfailModal").modal("show");
        }
    );

    return false;
}