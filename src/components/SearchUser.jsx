import {useState, useContext} from 'react'
import {Col} from 'react-bootstrap'
import {FcSearch} from 'react-icons/fc'
import Alert from './Alert';
import {ImCancelCircle} from 'react-icons/im'
import GithubContext from '../context/GithubContext'
import AlertContext from '../context/alert/AlertContext'

const SearchUser = () => {
    const [text, setText] = useState('')
    const {users, fetchUsers, clearUsers} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)
    const handleChange = (e) => setText(e.target.value)

    // search the data
    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === '') {
            setAlert('error', 'Please enter something')
        } else {
            fetchUsers(text)

            setText('')
        }
    }

    return (
        <Col md={8}
            className="mx-auto "
            lg={8}
            sm={11}>
            <Alert/>
            <form onSubmit={
                (e) => handleSubmit(e)
            }>
                <div className="p-1 bg-light rounded rounded-pill  mb-4 gradient-border">
                    <div className="input-group shadow-lg">
                        <input type="search"
                            value={text}
                            onChange={handleChange}
                            placeholder="Search Profile...."
                            aria-describedby="button-addon1"
                            className="form-control border-0 bg-light"/>
                        <div className="input-group-append">
                            <button id="button-addon1" type="submit" className="btn btn-link text-primary"><FcSearch className="github__icons"/></button>
                        </div>
                    </div>
                </div>
            </form>
            {
            users.length > 0 && (
                <div className="mx-auto text-center">
                    <button id="button-addon1 " onClick={clearUsers} type="submit" className="btn btn-outline-primary ">Clear Results <ImCancelCircle className="github__icons"
                            /></button>
                </div>
            )
        } </Col>
    )
}

export default SearchUser
