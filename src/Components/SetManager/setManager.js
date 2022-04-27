import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const SetManager = ()=>{
    const [data,setData] = useState('')
    const[errMsg,setErrMsg] = useState(null)
    const [areaShown,setShown] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        axios.post('http://localhost:5000/api/token/check').then(resp=>{
            if(resp.data.inserted){
                axios.post('http://localhost:5000/api/token/login' , {
                    pin : `${localStorage.getItem('pin')}`
                }).then(res =>{
                    if(res.data.pin) setShown(true)
                    else {
                        setErrMsg(res.data.message)
                        setShown(false)
                    }
                }).catch(error =>{
                    alert('something went wrong !!')
                    navigate('/login')
                })
            }else setErrMsg(resp.data.message)
        }).catch(err =>{
            alert('something went wrong !!')
            navigate('/login')
        })
    },[])
    return(

        <section className='bg py-5'>
      <div className="container">    
      <div className='row'>
          <div className='col-3 py-2'>
              <h4 className='text-center'> Title : </h4>
          </div>
            <textarea style={{
               height: '500px',
               width: '50%',
               backgroundColor: 'transparent',
               color: 'black',
               margin: '50px auto',
               display:  `${areaShown ? 'block' :'none'}` ,
            }} initialvalue={data}/>
        / </div>
        </div>
        </section> 
    )
}

export default SetManager