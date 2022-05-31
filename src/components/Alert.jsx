import {useContext} from 'react'
import AlertContext from '../context/alert/AlertContext'
import {ImCancelCircle} from 'react-icons/im'
const Alert = () => {
    const {alert} = useContext(AlertContext)
  return alert !==null && (
      <p>{alert === 'error' &&(
<ImCancelCircle/>
      )}
      <p className="text-danger "><strong><ImCancelCircle className="mr-2 ml-3"/>{alert.msg}</strong></p>
      </p>
  )
}

export default Alert