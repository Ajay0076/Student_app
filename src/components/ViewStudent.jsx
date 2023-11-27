import React, { useEffect, useState } from 'react'
import StudentHeader from './StudentHeader'
import axios from 'axios'

const ViewStudent = () => {

    const [data, changedata] = useState([])
    const fetchData =()=>{
        axios.post("http://127.0.0.1:8000/api/viewall/").then(
            (response)=>{
                changedata(response.data)
            }
        )
    }
useEffect(()=>{fetchData()},[])

    return (
        <div>

            <StudentHeader/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map((value, index) => (
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={index}>
                                    <div className="card border-dark mb-3">
                                        <div className="card-header">
                                            Name: {value.name}
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Admission Number: {value.admno}</li>
                                            <li className="list-group-item">Roll Number: {value.rollno}</li>

                                            <li className="list-group-item">College: {value.college}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewStudent