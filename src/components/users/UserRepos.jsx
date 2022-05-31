import React from 'react'
import { Col } from 'react-bootstrap'
import UserRepoItem from './UserRepoItem'
const UserRepos = ({repos}) => {
  return (
    <Col md={12} lg={12} sm={12} >
      <div>
        <h3 className="text-white mb-3">Latest Repository</h3>
      </div>
      {repos.map((repo)=>(
       <UserRepoItem key={repo.id} repo={repo}/>
      ))}
    </Col>
  )
}

export default UserRepos