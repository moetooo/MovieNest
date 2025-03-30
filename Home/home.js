// Mock data for films
const filmsData = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 4.5,
        poster: "/placeholder.svg?height=300&width=200"
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        rating: 4.8,
        poster: "/placeholder.svg?height=300&width=200"
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        rating: 4.5,
        poster: "/placeholder.svg?height=300&width=200"
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        rating: 4.4,
        poster: "/placeholder.svg?height=300&width=200"
    },
    {
        id: 5,
        title: "Fight Club",
        year: 1999,
        rating: 4.3,
        poster: "/placeholder.svg?height=300&width=200"
    },
    {
        id: 6,
        title: "Inception",
        year: 2010,
        rating: 4.4,
        poster: "/placeholder.svg?height=300&width=200"
    },
    {
        id: 7,
        title: "The Matrix",
        year: 1999,
        rating: 4.3,
        poster: "/placeholder.svg?height=300&width=200"
    },
    {
        id: 8,
        title: "Goodfellas",
        year: 1990,
        rating: 4.4,
        poster: "/placeholder.svg?height=300&width=200"
    },
    {
        id: 9,
        title: "The Silence of the Lambs",
        year: 1991,
        rating: 4.3,
        poster: "/placeholder.svg?height=300&width=200"
    },
    {
        id: 10,
        title: "Interstellar",
        year: 2014,
        rating: 4.3,
        poster: "/placeholder.svg?height=300&width=200"
    },
    {
        id: 11,
        title: "The Lord of the Rings",
        year: 2001,
        rating: 4.4,
        poster: "/placeholder.svg?height=300&width=200"
    },
    {
        id: 12,
        title: "Parasite",
        year: 2019,
        rating: 4.5,
        poster: "/placeholder.svg?height=300&width=200"
    }
  ];
  
  // Function to create film cards
  function createFilmCard(film) {
    const filmCard = document.createElement('div');
    filmCard.className = 'film-card';
    
    filmCard.innerHTML = `
        <div class="film-rating">${film.rating}</div>
        <img src="${film.poster}" alt="${film.title}" class="film-poster">
        <div class="film-overlay">
            <h3 class="film-title">${film.title}</h3>
            <p class="film-year">${film.year}</p>
        </div>
    `;
    
    return filmCard;
  }
  
  // Function to populate film sections
  function populateFilmSection(sectionId, films) {
    const section = document.getElementById(sectionId);
    
    films.forEach(film => {
        const filmCard = createFilmCard(film);
        section.appendChild(filmCard);
    });
  }
  
  // Search functionality
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        return;
    }
    
    // In a real application, this would make an API call
    console.log(`Searching for: ${searchTerm}`);
    
    // Clear the search input
    searchInput.value = '';
    
    // Here you would typically navigate to a search results page
    alert(`Searching for: ${searchTerm}`);
  }
  
  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
  });
  
  // Genre item click handler
  const genreItems = document.querySelectorAll('.genre-item');
  genreItems.forEach(item => {
    item.addEventListener('click', () => {
        const genre = item.querySelector('span').textContent;
        alert(`You clicked on ${genre} genre`);
        // In a real app, this would navigate to a genre-specific page
    });
  });
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', () => {
    // Shuffle the films array to simulate different recommendations
    const shuffledFilms = [...filmsData].sort(() => 0.5 - Math.random());
    
    // Populate trending films section with first 6 films
    populateFilmSection('trending-films', filmsData.slice(0, 6));
    
    // Populate AI recommendations section with different 6 films
    populateFilmSection('ai-recommendations', shuffledFilms.slice(0, 6));
  });