
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../Assets/icons8-security-shield.png'
function Login (){
    return(
        <section className='loginPage'>
        <div className='container h-100'>
            <div className='row form-row'>
                <div className='col-md-5 form-div'> 
                    <form>
                        <div className="my-3 ">
                            <FontAwesomeIcon icon="search" className='text-white mx-2' />   
                            <FontAwesomeIcon icon="user" className='text-white'/>     
                            <input type="number" className="form-control" placeholder="Pin"/>
                        </div>
                        <div className="my-3">
                            <input type="text" className="form-control "  placeholder="Name"/>
                        </div>
                        <button type="submit" className="btn my-2 w-100 ">Login</button>
                    </form>
                </div>
                <div className='col-md-7 text-center'>
                    <div className="gaurd-icon">
                        <img src={logo} alt="security sheild"/>  
                    </div>
                    <h3 className='text py-3'>Hardware Token </h3>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login ;