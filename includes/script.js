//AoS
AOS.init();

//Contact Form
function Mail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let title = document.getElementById("title").value;
  let reason = document.getElementById("reason").value;

  Email.send({
    SecureToken: "79a570fe-2676-4e0d-8efe-a9d5dc8eea53",
    To: "pbandola06@gmail.com",
    From: "pbandola06@gmail.com",
    Subject: "Email From Portfolio Contact Form",
    Body:
      "Name: " +
      name +
      "<br/><br/> Email: " +
      email +
      "<br/><br/> Title: " +
      title +
      "<br/><br/> Reason: " +
      reason,
  }).then((message) =>
    alert(
      "Thank you for sending your recommendation. We will be checking your recommendation as soon as possible and we hope you like our recommendations as well."
    )
  );
}
