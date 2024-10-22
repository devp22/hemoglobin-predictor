import React,{useState} from "react";

function DataForm() {
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
    alert("Form ubmitted");
}



return(
    <form onSubmit={handleChange}>
        <div>
            <label>Age: </label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>
    </form>
);

}

export default DataForm;