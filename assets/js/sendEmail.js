/*
Sends email using emailjs and uses modals to display the message to the user
*/
function sendMail(contactForm) {
    emailjs.send("service_klkawbf","template_savnrya", {
        "from_name": contactForm.firstname.value, 
        "from_email": contactForm.emailaddress.value, 
        "game_message": contactForm.messagesummary.value
    })
    .then (
        function(response) {
            $("#alertModal").modal("show");
            // Resets inputs of form if message is sent successfully
            contactForm.reset();
        }, 
        function(error) {
            $("#alertfailModal").modal("show");
        }
    )
    // Manually close the contact-us modal
    $("#contactModal").modal("hide"); 
    // Stops page from refreshing
    return false;
}

$(document).ready(function(){
    $("#contact-us-form").on("submit", function(e){
        e.preventDefault(); // Stops page from refreshing
        sendMail(this);
    });
});