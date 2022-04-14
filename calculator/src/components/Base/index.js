import './Base.css'



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
