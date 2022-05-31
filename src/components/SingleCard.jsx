import {useContext}from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import GithubContext from '../context/GithubContext'
import Spinner from './Spinner'

const SingleCard = () => {
    const {users,loading,} = useContext(GithubContext)
 

    if(!loading){
        return (
          <>
          {users.map((user,i) =>(
              <Col className="my-3 mx-auto profile__container  " md={6} lg={3} sm={11} key={i}>
              <div className="profile__card glass-container ">
                  <div className="profile_body shadow-lg p-3 d-flex">
                      <div className="profile__img shadow-lg">
                          <img  className="shadow-lg" src={user.avatar_url} alt="profile"/>
                      </div>
                      <div className="profile__text  w-100">
                          <h5>{user.login}</h5>
                          <Link to={`/user/${user.login}`} className="btn btn-primary btn-sm">View Profile</Link>
                      </div>
                  </div>
              </div>
           </Col>
          ))}
          </>
        )
    }else{
        return (
            <Spinner/>
        )
    }
}

export default SingleCard