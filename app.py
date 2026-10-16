from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from PIL import Image
import torch
import torchvision.transforms as transforms
from model import CNNModelV0

app = Flask(__name__, static_folder='./frontend/build', static_url_path='/')
CORS(app)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# Model setup
model = CNNModelV0(input_shape=3, hidden_units=16, output_shape=4)
model.load_state_dict(torch.load("cnn_model.pth", map_location=torch.device("cpu")))
model.to(device)
model.eval()

class_names = ['glioma', 'meningioma', 'notumor', 'pituitary']

# Home page
@app.route('/')
def index():
    return app.send_static_file('index.html')

# Serve React App
@app.route('/<path:path>')
def serve_react(path):
    return app.send_static_file(path)

# API endpoint for prediction
@app.route('/api/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image = Image.open(request.files['image']).convert("RGB")

    transform = transforms.Compose([
        transforms.Resize((150, 150)),
        transforms.ToTensor()
    ])
    input_tensor = transform(image).unsqueeze(0).to(device)

    with torch.no_grad():
        outputs = model(input_tensor)
        _, predicted = torch.max(outputs, 1)
        class_label = class_names[predicted.item()]

        # Get confidence scores
        probabilities = torch.nn.functional.softmax(outputs, dim=1)[0]
        confidence = probabilities[predicted].item() * 100

    return jsonify({
        'prediction': class_label,
        'confidence': f"{confidence:.2f}%",
        'class_names': class_names,
        'probabilities': [float(p) * 100 for p in probabilities.tolist()]
    })

if __name__ == '__main__':
    app.run(debug=True)
