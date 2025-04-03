document.addEventListener('DOMContentLoaded', async () => {
  await loadComponents();
});

async function loadComponents() {
  const headerElement = document.getElementById("header");
  if (headerElement) {
      try {
          const response = await fetch("header.html", { cache: "no-store" });
          const headerHTML = await response.text();
          headerElement.innerHTML = headerHTML;
          initializeDropdown();
          attachGenreEventListeners(); // Attach event listeners after loading
      } catch (error) {
          console.error("Error loading header:", error);
      }
  }
}

function initializeDropdown() {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', function () {
          this.querySelector('.dropdown-content').style.display = 'block';
      });
      dropdown.addEventListener('mouseleave', function () {
          this.querySelector('.dropdown-content').style.display = 'none';
      });
  });
}

function attachGenreEventListeners() {
  const genreLinks = document.querySelectorAll('.dropdown-content a');
  genreLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const genre = this.getAttribute("onclick").match(/'([^']+)'/)[1];
          window.location.href = `genre.html?genre=${genre}`;
      });
  });
}
