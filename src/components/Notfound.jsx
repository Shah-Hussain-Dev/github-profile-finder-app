import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className="text-center text-white">
    <h1>Oops! Page not found</h1>
    <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  )
}

export default Notfound