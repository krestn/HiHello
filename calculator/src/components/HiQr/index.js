import qr from '../../images/Work.png'
import './HiQr.css'

function HiQr({showModal, setShowModal}) {



  return (
      <>

          {showModal && (

                      <img src={qr} className='qr' onClick={() => setShowModal(false)}></img>
                    
          )}
      </>
  )
}
 



export default HiQr;
