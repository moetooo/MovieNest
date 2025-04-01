from flask import Flask, request, jsonify
from flask_cors import CORS  
import pickle
import re

app = Flask(__name__)
CORS(app)

with open('model/movies.pkl','rb') as file:
    movies=pickle.load(file)

with open('model/similarity.pkl','rb') as file:
    similarity=pickle.load(file)

@app.route('/predict', methods=['POST'])
def recommend():
    try:
        print("Request Data:", request.data)  # Debugging
        data = request.get_json(force=True)  # Ensures JSON parsing

        if not data or "title" not in data:
            return jsonify({"error": "Invalid JSON or missing 'title'"}), 400

        movie = data["title"]
        movie = re.sub(r'[^a-zA-Z]', '', movie).lower()
        # Check if movie exists in dataset
        if movie not in movies['clean_title'].values:
            return jsonify({"error": "Movie not found"}), 404

        # Find recommendations
        movie_index = movies[movies['clean_title'] == movie].index[0]
        difference = similarity[movie_index]
        movies_list = sorted(list(enumerate(difference)), reverse=True, key=lambda x: x[1])[1:6]
        recommended_movies = [movies.iloc[i[0]].title for i in movies_list]
        
        return jsonify({"movies": recommended_movies})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": "Internal server error"}), 500

if __name__ == "__main__":
    app.run(debug=True)
