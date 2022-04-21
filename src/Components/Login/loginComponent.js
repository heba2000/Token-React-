
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../Assets/icons8-security-shield.png'
import tier from '../../Assets/tier.png'

function Login (){
    return(
        <section className='bg loginPage'>
        <img src={tier} alt="tier rotation" className="tier"/>     
        <div className='container h-100'>
            <div className='row form-row'>
                <div className='col-md-5 form-div'> 
                    <form>
                            <h4> Enter Pin and Name to Login </h4>
                        <div className="my-3 pin-input">
                            <FontAwesomeIcon icon="lock" className='icon icon-lock' />   
                            <input type="number" className="form-control " placeholder="Pin"/>
                        </div>
                        <div className="my-3 name-input">
                            <FontAwesomeIcon icon="user" className='icon icon-name'/>   
                            <input type="text" className="form-control "  placeholder="Name"/>
                        </div>
                        <button type="submit" className="btn my-2 w-100 ">Login</button>
                    </form>
                </div>
                <div className='col-md-7 text-center'>
                    <div className="gaurd-icon">
                        <img src={logo} alt="security sheild"/>  
                        <h1 className='text my-3'>Hardware Token </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login ;