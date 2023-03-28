import React from 'react'
import img from '../assets/imgs/desafiol.jpg'
const Home = () => {
  return (
    <div className='text-center bg-warning p-4 m-4 rounded bg-gradient '>
        <div className='ContainerHome'>
        <div className=''>
        <h1>Bienvenido a mi mundo</h1>
        <h2>Donde todo es de colores</h2>
        <p className='display-1'>👺</p>
        <h2>No dudes en cotizar un hermoso cuadro para tu hogar</h2>
        </div>
        <img className='rounded border border-dark' src={img} alt="yo" />
        </div>
    </div>
  )
}

export default Home