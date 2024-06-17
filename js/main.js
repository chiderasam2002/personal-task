function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "topNnav") {
      x.className += " responsive";
    } else {
      x.className = "";
    }
  }