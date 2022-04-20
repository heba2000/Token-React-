import './actions.css'

function Actions() {
    return(
        <section className='actions-page'>
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