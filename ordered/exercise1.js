
window.firebaseRef = null;
$(function() {
  var key = "firebase-codecademy";
  if (!localStorage.getItem(key)) {
    var hash = Math.random().toString(36).slice(2);
    localStorage.setItem("firebase-codecademy", hash);
  }
  var url = "https://" + localStorage.getItem(key) + ".firebaseio-demo.com";
  window.firebaseRef = new Firebase(url).child("ordered");
  firebaseRef.once("child_added", function(snap) {
    if (snap.val()) {
      $("#result").html("You added " + JSON.stringify(snap.val()) + " to the list!");
    } else {
      $("#result").html("You haven't added anything to the list yet, make sure to call push()!");
    }
  });
});
