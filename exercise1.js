
window.firebaseRef = null;
$(function() {
  var key = "firebase-codecademy";
  if (!localStorage.getItem(key)) {
    var hash = Math.random().toString(36).slice(2);
    localStorage.setItem("firebase-codecademy", hash);
  }
  var url = "https://" + localStorage.getItem(key) + ".firebaseio-demo.com";
  window.firebaseRef = new Firebase(url).child("exercise1");
  firebaseRef.child.on("value", function(snap) {
    if (snap.val()) {
      $("#result").html("You wrote " + JSON.stringify(snap.val()) + " into exercise1!");
    } else {
      $("#result").html("You haven't written any data yet, make sure to call set()!");
    }
  });
});
