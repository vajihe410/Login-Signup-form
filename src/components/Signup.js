import React,{useState} from 'react';

const Signup = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false,
    })
    const changeHandler=(event)=>{
        if(event.target.name === "isAccepted"){
            setData({...data,[event.target.name]:event.target.checkd})
        }
        else{
            setData({...data,[event.target.name]:event.target.value})
        }
    }
    return (
        <div>
            <h1>Signup</h1>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={data.name}  onChange={changeHandler}/>
            </div>
            <div>
                <label>email</label>
                <input type="text" name="email" value={data.email}  onChange={changeHandler}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={data.password} onChange={changeHandler} />
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} />
            </div>
            <div>
                <label>I accepted terms of privacy policy</label>
                <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} />
            </div>
            <div>
                <a href='#'>Login</a>
                <button type='submit'>Sign up</button>
            </div>
        </div>
    );
};

export default Signup ;