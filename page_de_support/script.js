document.addEventListener("DOMContentLoaded", function () {
        var dropdownElements = document.querySelectorAll(".dropdown-toggle");
        dropdownElements.forEach(function (dropdown) {
          new bootstrap.Dropdown(dropdown);
        });

        //affichage du formulaire
        const showFormButton = document.querySelector(".showForm");
        const contactForm = document.getElementById("contactForm");

   
        showFormButton.addEventListener("click", function () {
          if (
            contactForm.style.display === "none" ||
            contactForm.style.display === ""
          ) {
            contactForm.style.display = "block";
          } else {
            contactForm.style.display = "none";
          }
        });
      });
