# backend/app.py
from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Initialiser le pipeline pour une tâche d'analyse de texte
# Vous pouvez utiliser un modèle de classification comme 'bert-base-uncased' pour la détection de sentiments
classifier = pipeline("text-classification", model="nlptown/bert-base-multilingual-uncased-sentiment")

@app.route('/prediction', methods=['POST'])
def analyze_depression():
    try:
        # Obtenir le texte depuis la requête
        data = request.get_json()
        user_text = data.get('form10', '')

        if not user_text:
            return jsonify({"error": "No text provided"}), 400

        # Analyser le texte avec le modèle
        result = classifier(user_text)
        
        # Déterminer si l'état est de la dépression ou non
        # Par exemple, on peut utiliser un seuil simple sur les scores
        depression_threshold = 0.5  # Vous pouvez ajuster ce seuil
        is_depressed = result[0]['score'] > depression_threshold

        response = {
            "result": "Depression detected" if is_depressed else "No depression detected",
            "score": result[0]['score']
        }
        return jsonify(response)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5987)
