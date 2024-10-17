import React,{useState} from "react";
import './PatientDataForm.css';
import axios from "axios";

function PatientDataForm() {
    const [formData,setFormData] = useState({
        age: '',
        sex: '',
        rbc: '',
        pcv: '',
        mcv: '',
        mch: '',
        mchc: '',
        rdw: '',
        tlc: '',
        plt: ''
    })

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
            alert("Prediction = "+response.data.prediction);
        })
        .catch((error)=>{
            alert("Error in making request: ",error);
        })
}




return(
    <form onSubmit={handleSubmit}>
    <div>
      <label>Age:</label>
      <input type="number" name="age" value={formData.age} onChange={handleChange} />
    </div>
    <div>
      <label>Sex:</label>
      <select name="sex" value={formData.sex} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div>
      <label>RBC:</label>
      <input type="number" name="rbc" value={formData.rbc} onChange={handleChange} />
    </div>
    <div>
      <label>PCV:</label>
      <input type="number" name="pcv" value={formData.pcv} onChange={handleChange} />
    </div>
    <div>
      <label>MCV:</label>
      <input type="number" name="mcv" value={formData.mcv} onChange={handleChange} />
    </div>
    <div>
      <label>MCH:</label>
      <input type="number" name="mch" value={formData.mch} onChange={handleChange} />
    </div>
    <div>
      <label>MCHC:</label>
      <input type="number" name="mchc" value={formData.mchc} onChange={handleChange} />
    </div>
    <div>
      <label>RDW:</label>
      <input type="number" name="rdw" value={formData.rdw} onChange={handleChange} />
    </div>
    <div>
      <label>TLC:</label>
      <input type="number" name="tlc" value={formData.tlc} onChange={handleChange} />
    </div>
    <div>
      <label>PLT /mm<sup>3</sup>:</label>
      <input type="number" name="plt" value={formData.plt} onChange={handleChange} />
    </div>
    <button type="submit">Submit</button>
  </form>
);

}

export default PatientDataForm;