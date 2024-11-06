function formValidate(dialog) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var location = document.getElementById("location").value;

  const emailFormat = /^\w+([\.-]?\w+)*@(?:yahoo|gmail|outlook|iCloud|AOL|Protonmail)\.com$/i;

  if (name == "" || email == "" || !emailFormat.test(email) || message == "" || location == "sac") {
      dialog.dialog("option", "title", "Validation Error");
      dialog.html("Please ensure all fields are in the correct format and select a country.");
      dialog.dialog("open");
      return false;
  }

  dialog.dialog("option", "title", "Success");
  dialog.html("Thank you for your message!");
  dialog.dialog("open");
  return true;
}

$(function() {
  var dialog = $("#dialog").dialog({
      autoOpen: false,
      minWidth: 400,
      minHeight: 200,
      buttons: {
          Ok: function() {
              $(this).dialog("close");
              location.reload();
          }
      }
  });

  $("#formButton").on("click", function(event) {
      event.preventDefault();
      return formValidate(dialog); 
  });
});

