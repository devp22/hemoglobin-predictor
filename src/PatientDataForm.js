import React,{useState} from "react";
import './PatientDataForm.css';
import axios from "axios";

function PatientDataForm() {
    const [formData,setFormData] = useState({
        age: '59',
        sex: 'Male',
        rbc: '3.41',
        pcv: '32.9',
        mcv: '96.5',
        mch: '29.9',
        mchc: '31',
        rdw: '16.7',
        tlc: '6.62',
        plt: '142'
    })

const [prediction,setPrediction] = useState('');

const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((previousData)=>({
        ...previousData,
        [name]: value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/predict',formData)
        .then((response)=>{
            setPrediction(response.data.prediction);
        })
        .catch((error)=>{
            alert("Error in making request: ",error);
        })
}




return(
  <div>
    <div>
      <h1>Hemoglobin Predictor</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Age:</label>
        <input type="number" name="age" defaultValue={28} value={formData.age} onChange={handleChange} />
      </div>
      <div>
        <label>Sex:</label>
        <select name="sex" value={formData.sex} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Male" defaultChecked>Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>RBC (Red Blood Cell count):</label>
        <input type="number" name="rbc" value={formData.rbc} onChange={handleChange} />
      </div>
      <div>
        <label>PCV (Packed Cell Volume):</label>
        <input type="number" name="pcv" value={formData.pcv} onChange={handleChange} />
      </div>
      <div>
        <label>MCV (Mean Cell Volume):</label>
        <input type="number" name="mcv" value={formData.mcv} onChange={handleChange} />
      </div>
      <div>
        <label>MCH (Mean Cell Hemoglobin):</label>
        <input type="number" name="mch" value={formData.mch} onChange={handleChange} />
      </div>
      <div>
        <label>MCHC (Mean cell hemoglobin concentration):</label>
        <input type="number" name="mchc" value={formData.mchc} onChange={handleChange} />
      </div>
      <div>
        <label>RDW (Red cell distribution width):</label>
        <input type="number" name="rdw" value={formData.rdw} onChange={handleChange} />
      </div>
      <div>
        <label>TLC (White blood cell count):</label>
        <input type="number" name="tlc" value={formData.tlc} onChange={handleChange} />
      </div>
      <div>
        <label>PLT /mm<sup>3</sup> (Platelet count):</label>
        <input type="number" name="plt" value={formData.plt} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
    {prediction &&(
    <div>
      <h3>Predicted Hemoglobin Level is: </h3>
      <input type="text" value={prediction} readOnly />
    </div>
    )}
  </div>
  
);

}

export default PatientDataForm;