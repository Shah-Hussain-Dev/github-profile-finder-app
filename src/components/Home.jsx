import React from 'react'
import { Row} from 'react-bootstrap'

import SearchUser from './SearchUser'
import SingleCard from './SingleCard'

const Home = () => {
    return (
        <div className="mx-5">
            <div className="hero__banner text-center">
        <h1  className="hero__text">GitHub Profile Search</h1>             
            </div>
            <Row>
               <SearchUser/>
            </Row>
            <Row className="justify-content-between">
                <SingleCard/>
            </Row>
        </div>
    )
}

export default Home
