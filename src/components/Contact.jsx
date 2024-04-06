import React from 'react'


function Contact() {
    

    return (
        <div className='mx-3' id='contact'>
            <div className='container my-5 bg-dark p-5 rounded shadow-lg text-white'>
                <h1 className='text-center text-light fw-bolder'>Contact Me</h1>
                <form className='mb-5'>
                    <div className='form-group'>
                        <label htmlFor='name' className='mb-2'>Name:</label>
                        <input type='text' className='form-control p-2 mb-2' id='name'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='mail' className='mb-2'>Email:</label>
                        <input type='email' className='form-control p-2 mb-2' id='mail'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message' className='mb-2'>Message:</label>
                        <textarea className='form-control p-2 mb-2' id='message'
                        />
                    </div>
                    <div className='text-center'>
                    <button className='btn btn-danger mt-4 px-5 'onClick={(e) => (e.preventDefault())}>SUBMIT</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default Contact
