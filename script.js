async function searchMovie() {
    let inputData = document.getElementById("movieInput").value.trim();

    if (!inputData) {
        document.getElementById("result").innerText = "Please enter a movie name.";
        return;
    }

    try {
        let response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: inputData }) 
        });

        let data = await response.json();

        if (data.error) {
            document.getElementById("result").innerText = "Error: " + data.error;
        } else {

            // document.getElementById("result").innerText = "Recommended Movies: " + data.movies.join(", ");
            m=data.movies
            let queryString = encodeURIComponent(JSON.stringify(m));
            window.location.href = `result.html?m=${queryString}`;
            
        }
    } catch (error) {
        document.getElementById("result").innerText = "An error occurred while fetching data.";
        console.error("Error:", error);
    }
    
}


// // Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//     // Get the theme toggle button
//     const themeToggle = document.getElementById('theme-toggle');
    
//     // Check if user has previously selected a theme
//     const savedTheme = localStorage.getItem('theme');
    
//     // Apply saved theme or default to dark
//     if (savedTheme) {
//         document.documentElement.setAttribute('data-theme', savedTheme);
//     } else {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
    
//     // Toggle theme when button is clicked
//     themeToggle.addEventListener('click', function() {
//         // Get current theme
//         const currentTheme = document.documentElement.getAttribute('data-theme');
        
//         // Switch to opposite theme
//         const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
//         // Apply new theme
//         document.documentElement.setAttribute('data-theme', newTheme);
        
//         // Save theme preference
//         localStorage.setItem('theme', newTheme);
//     });
    

// });

function redirectToGenre(genre) {
    if (!genre) {
        alert("Please select a genre!");
        return;
    }

    let queryString = encodeURIComponent(genre); // Encode genre for URL
    window.location.href = `genre.html?genre=${queryString}`; // Redirect to selected genre
}

