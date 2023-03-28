import React from 'react'

const Contact = () => {
    return (
        <div className='container bg-warning  rounded bg-gradient mt-4 mb-4 '>
            <div className="mb-3">
                <label htmlFor='exampleFormControlInput1' className="form-label text-white">Correo Electronico</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor='exampleFormControlTextarea1' className="form-label text-white">Requerimiento</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
                <button className='bg-dark p-2 rounded text-white m-2'>Enviar</button>
            </div>
        </div>

    )
}

export default Contact