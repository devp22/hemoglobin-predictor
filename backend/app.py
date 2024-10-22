from flask import Flask,request,jsonify,send_from_directory
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)


model=joblib.load('hemoglobin-predictor-model.pkl')

@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')
@app.route("/predict",methods=['POST'])
def predict():
    data = request.json
    RBC=float(data.get('rbc'))
    PCV=float(data.get('pcv'))
    MCV=float(data.get('mcv'))
    MCH=float(data.get('mch'))
    MCHC=float(data.get('mchc'))
    RDW=float(data.get('rdw'))
    TLC=float(data.get('tlc'))
    PLT=float(data.get('plt'))
    
    input_features = np.array([[RBC,PCV,MCV,MCH,MCHC,RDW,TLC,PLT]])

    prediction = model.predict(input_features)[0]


    print("Received data: ",data)
    print("json data: ",jsonify(data))
    response = {
        'prediction': round(prediction,2)
    }
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)