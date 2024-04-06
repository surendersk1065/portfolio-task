import React from 'react'
import { FaCode } from "react-icons/fa";

function Protemp({ title, tech, body, link ,img }) {
    return (
        <>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6 my-5'>
                <div className='card bg-dark text-white h-100 p-5 shadow-lg'>
                    <img src={img} className='image-fluid rounded'/>
                    <div className='card-body'>
                        <span className='fs-1'><FaCode /></span>
                        <p className=' fw-bolder fs-3'>{title}</p>
                        <p className='bg-primary d-inline-block p-2 rounded mb-4'>{tech}</p>
                        <p>{body}</p>
                        <a href={link} target='_blank' className='d-inline-block text-white text-decoration-none bg-danger p-2 rounded'>Visit Project</a>
                    </div>
                </div>
            </div>
        </>    
    )
}

export default Protemp
