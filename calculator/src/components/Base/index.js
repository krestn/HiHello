import './Base.css'
import Button from '../Button'
import Screen from '../Screen'



const Base = ({children}) => {
  return(

    <div className='perspective'>

    <div className='base'>
       {children}
    </div>
    </div>
  )
}

export default Base;
