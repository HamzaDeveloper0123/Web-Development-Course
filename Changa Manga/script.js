/* JavaScript used by the three retained pages: registration form only. */
var booking = document.getElementById("bookingForm");
if (booking) {
  var range = document.getElementById("satisfaction");
  var out = document.getElementById("satisfactionVal");

  range.addEventListener("input", function () {
    out.textContent = range.value + " / 10";
  });

  booking.addEventListener("submit", function (e) {
    e.preventDefault();
    var msg = document.getElementById("bookingMsg");
    msg.textContent = "Booking request received. We will confirm by email.";
    msg.className = "form-msg ok";
    booking.reset();
    out.textContent = "5 / 10";
  });
}

var pkg = document.getElementById("package");
if (pkg) {
  var qty = document.getElementById("members");
  var total = document.getElementById("total");

  var update = function () {
    var price = Number(pkg.options[pkg.selectedIndex].dataset.price);
    var n = Math.max(1, Number(qty.value) || 1);
    total.textContent = "Rs. " + (price * n).toLocaleString("en-US");
  };

  pkg.addEventListener("change", update);
  qty.addEventListener("input", update);
  booking.addEventListener("reset", function () {
    setTimeout(update, 0);
  });
}
