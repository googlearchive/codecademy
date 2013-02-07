
window.firebaseRef = null;
$(function() {
  var key = "firebase-codecademy";
  if (!localStorage.getItem(key)) {
    var hash = Math.random().toString(36).slice(2);
    localStorage.setItem("firebase-codecademy", hash);
  }
  var url = "https://" + localStorage.getItem(key) + ".firebaseio-demo.com";
  window.firebaseRef = new Firebase(url);
  $("#forge").html("<a target='_blank' href='" + url + "'>Click here for your Firebase Forge</a>");
});
