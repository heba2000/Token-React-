
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../Assets/icons8-security-shield.png'
import tier from '../../Assets/tier.png'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login (){
    const [incorrectPass , setIncorrectPass] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault() 
        axios.post('http://localhost:5000/api/token/login' , {
            pin : '123456789'
        }).then(resp =>{
            if(resp.data.correct) navigate('/actions')
            else setIncorrectPass('Incorrect Pin')
        }).catch(err =>{
            setIncorrectPass('something went wrong !!')
        })
    }
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
                            <input  className="form-control " placeholder="Pin"/>
                        </div>
                        {
                            (
                                incorrectPass &&  <p style={{
                                    color : 'red' , 
                                    textAlign : 'center'
                                }}></p>
                            )
                            
                        }
                        <button onClick={handleSubmit} type="submit" className="btn my-2 w-100 ">Login</button>
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