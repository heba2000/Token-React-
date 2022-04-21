import './actions.css'
import tier from '../../Assets/tier.png'
// import logo from '../../Assets/icons8-security-shield.png'

function Actions() {
    return(
        <section className='bg actions-page'>
                <img src={tier} alt="tier rotation" className="tier"/>     
            <div className='container h-100'>
                <div className='row h-100'>
                    <div className='col-9 m-auto'> 
                       <div className='row actions-container p-4'> 
                       <h5 className='text-white py-1 text-center'> Choose Which Action to Perform</h5>
                        <div className='col-6'>
                            <button className="btn action-btn my-2 w-100 ">Set Manager</button>
                        </div>
                        <div className='col-6'>
                            <button className="btn action-btn my-2 w-100 ">Get Manager</button>
                        </div>
                        {/* <div className='col-3'>
                            <button className="btn action-btn my-2 w-100 ">Login</button>
                        </div>
                        <div className='col-3'>
                            <button className="btn action-btn my-2 w-100 ">Login</button>
                        </div> */}
                       </div> 
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default Actions;