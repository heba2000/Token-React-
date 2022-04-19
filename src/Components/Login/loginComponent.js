// import {useFormik} from 'formik'

import './login.css'


function Login (){
    return(
        <section className='loginPage'>
        <div className='container h-100'>
            <div className='row form-row'>
                <div className='col-md-5'> 
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control"  />
                        </div>
                        <button type="submit" className="btn btn-primary my-2 px-4">Sign In</button>
                    </form>
                </div>
                <div className='col-md-7'>
                    <div className="gaurd-icon">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login ;