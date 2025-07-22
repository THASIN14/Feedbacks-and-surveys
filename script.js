document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("responseMessage").innerText = 
        "Thank you for your feedback, " + document.getElementById("name").value + "!";
    this.reset();
});