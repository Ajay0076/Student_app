import React from 'react'
import StudentHeader from './StudentHeader'

const DeleteStudent = () => {
  return (
    <div>
<StudentHeader/>
<div className="container">

<h2><center>DELETE STUDENT</center></h2>
<div className="row">
    <div>
        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />

        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">Delete</button>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default DeleteStudent