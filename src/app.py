from flask import Flask,request,jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/predict",methods=['POST'])
def predict():
    data = request.json
    print("Received data: ",data)
    print("json data: ",jsonify(data))
    response = {
        'prediction': 'Hud Hud Dabangg'
    }
    return response

if __name__ == '__main__':
    app.run(debug=True)