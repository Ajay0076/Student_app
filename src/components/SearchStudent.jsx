import React, { useState } from 'react'
import StudentHeader from './StudentHeader'
import axios from 'axios'

const SearchStudent = () => {


    const[inputField,changeInputField]=useState(
        { 
         "admno": "" 
          }
         
        
      )

      const[result,changeresult]=useState([])
      const InputHandler=(event)=>{
          changeInputField({...inputField,[event.target.name]:event.target.value})
      }
  
      const readValue=()=>{
          console.log(inputField)
          axios.post("http://127.0.0.1:8000/api/search/",inputField).then(
            (response)=>{
                changeresult(response.data)

            }
          )
          
          
          }
  return (
    <div>
<StudentHeader/>
<div className="container">

<h2><center>Search Student</center></h2>
<div className="row">
    <div>
        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />

        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">admission no</label>
                <input type="text" className="form-control " name='admno' value={inputField.admno} onChange={InputHandler} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-success">Search</button>
            </div>
        </div>
    </div>
</div>

{result.map(
    (value,index)=>{
        return <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
    
                    <label htmlFor="" className="form-label">name</label>
                    <input type="text" className="form-control"  value={value.name} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
    
                <label htmlFor="" className="form-label">roll no</label>
                    <input type="text" className="form-control"  value={value.rollno}/>
    
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
    
                <label htmlFor="" className="form-label">adm no</label>
                    <input type="text" className="form-control"  value={value.admno}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
    
                <label htmlFor="" className="form-label">college</label>
                    <input type="text" className="form-control"  value={value.college} />
                </div>
            </div>
        </div>
    </div>
    }
)}
</div>
    </div>
  )
}

export default SearchStudent