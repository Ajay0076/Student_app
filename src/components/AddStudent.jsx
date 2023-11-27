import React, { useState } from 'react'
import StudentHeader from './StudentHeader'
import axios from 'axios'

const AddStudent = () => {

    const [inputfield, changeInputfield] = useState(
        { 
        
            "name": "",
            "admno": "",
            "rollno": "",
            "college": ''
            
        
         }
    )

const inputHandler=(event)=>{
    changeInputfield({...inputfield,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(inputfield)
    axios.post("http://127.0.0.1:8000/api/add/",inputfield).then(
        (response)=>{
            alert(response.data.status)
        }
    )
    
}
  return (
    <div>
<StudentHeader/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">name</label>
                            <input type="text" className="form-control" name='name' value={inputfield.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">adm no</label>
                            <input type="text" className="form-control" name='admno' value={inputfield.admno} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">roll no</label>
                            <input type="text" className="form-control" name='rollno' value={inputfield.rollno} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          
                          <label htmlFor="" className="form-label">college</label>
                            <input type="text" className="form-control"name='college' value={inputfield.college} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button onClick={readValue} className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent