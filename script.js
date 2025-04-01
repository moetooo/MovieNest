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


