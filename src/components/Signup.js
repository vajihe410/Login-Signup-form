import React,{useState , useEffect} from 'react';
//function
import { validate } from './validate';

const Signup = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false,
    })

    const [errors,setErrors]=useState({});

    const [touched,setTouched]=useState({});

    useEffect(()=>{
        setErrors(validate(data))
    },[data,touched])

    const changeHandler=(event)=>{
        if(event.target.name === "isAccepted"){
            setData({...data,[event.target.name]:event.target.checkd})
        }
        else{
            setData({...data,[event.target.name]:event.target.value})
        }
    }

    const focusHandler=(event)=>{
        setTouched({...touched,[event.target.name]:true})
    }

    const submitHandler=()=>{
        
    }
    return (
        <form onSubmit={submitHandler}>
            <h1>Signup</h1>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={data.name}  onChange={changeHandler} onFocus={focusHandler}/>
                {errors.name && touched.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>email</label>
                <input type="text" name="email" value={data.email}  onChange={changeHandler} onFocus={focusHandler}/>
                {errors.email && touched.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                {errors.password && touched.password && <span>{errors.password}</span>}
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} />
                {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>
            <div>
                <label>I accepted terms of privacy policy</label>
                <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} />
                {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
            </div>
            <div>
                <a href='#'>Login</a>
                <button type='submit'>Sign up</button>
            </div>
        </form>
    );
};

export default Signup ;