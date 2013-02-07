
window.firebaseRef = null;
$(function() {
  var key = "firebase-codecademy";
  if (!localStorage.getItem(key)) {
    var hash = Math.random().toString(36).slice(2);
    localStorage.setItem("firebase-codecademy", hash);
  }
  var url = "https://" + localStorage.getItem(key) + ".firebaseio-demo.com";
  window.firebaseRef = new Firebase(url).child("basics/exercise2");
  firebaseRef.on("value", function(snap) {
    if (snap.val()) {
      var obj = snap.val();
      var text = "You wrote the following object:<ul>";
      for (var key in obj) {
        text += "<li>" + key + ": " + obj[key] + "</li>";
      }
      $("#result").html(text + "</ul>");
    } else {
      $("#result").html("You haven't written any data yet, make sure to call set()!");
    }
  });
});
