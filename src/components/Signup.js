import React,{useState , useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//function
import { validate } from './validate';
import {notify} from './toast'
//style
import styles from './Signup.module.css';

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
            setData({...data,[event.target.name]:event.target.checked})
        }
        else{
            setData({...data,[event.target.name]:event.target.value})
        }
    }

    const focusHandler=(event)=>{
        setTouched({...touched,[event.target.name]:true})
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("you signed successful","success")
        }
        else{
            notify("invalid error","error")
            setTouched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true,
            })
            
        }
        
    }
    return (
       <div className={styles.container}>
             <form onSubmit={submitHandler} className={styles.formContainer }>
            <h1 className={styles.header}>SignUp</h1>
            <div className={styles.formField}>
                <label>Name</label>
                <input type="text" name="name" value={data.name}  onChange={changeHandler} onFocus={focusHandler} className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}/>
                {errors.name && touched.name && <span>{errors.name}</span>}
            </div>
            <div className={styles.formField}>
                <label>Email</label>
                <input type="text" name="email" value={data.email}  onChange={changeHandler} onFocus={focusHandler} className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}/>
                {errors.email && touched.email && <span>{errors.email}</span>}
            </div>
            <div className={styles.formField}>
                <label>Password</label>
                <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}/>
                {errors.password && touched.password && <span>{errors.password}</span>}
            </div>
            <div className={styles.formField}>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler} className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput} />
                {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>
            <div className={styles.formField}>
                <div className={styles.checkBoxContainer}>
                <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler} />
                    <label>I accepted terms of privacy policy</label>
                    
                </div>

                {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
            </div>
            <div className={styles.formButtons}>
                <a href='#'>Login</a>
                <button type='submit'>Sign up</button>
            </div>
        </form>
        <ToastContainer />
       </div>
    );
};

export default Signup ;