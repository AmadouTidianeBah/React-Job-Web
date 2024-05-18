import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className='text-yellow-400 text-6xl  md-4'/>
        <h1 className="text-6xl font-bold mb-4">
            404 Not Found
        </h1>
        <p className="text-xl mb5">
            This page does not exist
        </p>
        <Link to='/' className='text-white bg-indigo-700 hover:bg-indigo-900 rounded px-3 py-2 mt-4'>
            Go back
        </Link>
    </section>
  )
}

export default NotFoundPage