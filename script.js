document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector("#menu-button");
    const listOfOptions = document.querySelector("#list-of-options");
    const line1 = document.querySelector("#first-line");
    const line2 = document.querySelector("#second-line");
    const line3 = document.querySelector("#third-line");
  
    menuButton.addEventListener('click', function() {
      /*
      if (listOfOptions.style.display === 'block') {
        listOfOptions.style.display = 'none';
      } else {
        listOfOptions.style.display = 'block';
      }
      */
      if (line1.style.display === "none") {
        line1.style.display = "block";
      } else if (line2.style.display === "none") {
        line2.style.display = "block";
      } else if (line3.style.display === "none") {
        line3.style.display = "block";
      } else {
        line1.style.display = "none";
        line2.style.display = "none";
        line3.style.display = "none";
      }
    });
  
    // Optionally, you can add this to hide the options when clicking outside
    /*document.addEventListener('click', function(event) {
      if (!menuButton.contains(event.target) && !listOfOptions.contains(event.target)) {
        listOfOptions.style.display = 'none';
      }
    });*/
  });
  