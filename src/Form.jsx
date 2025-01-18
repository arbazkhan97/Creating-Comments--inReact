import { useState } from "react"

export default function Form(){

    // state variable

    const [FormData,setFormData]=useState(
        {
            userName:"",
            password:'',
            email:'',

            
        });

        // input data and new value handler

    function handlerAllInput (event){

        let element=event.target.name;
        
        let value=event.target.value;
       
        setFormData((curData)=>{
            return {...curData,[element]:value

            }
        })
    }

    // submit handler

    let submitHandler=(event)=>{
       event.preventDefault();
       console.log(FormData)

       setFormData({

        userName:'',
        password:'',
        email:'',
    

        
       })




    }
    

    return(

        <form onSubmit={submitHandler}>
            <label htmlFor="userName"> name:</label>
            <input type="text" id="userName" name="userName" value={FormData.userName}
             onChange={handlerAllInput} placeholder="enter your username " />
            <br />

            <label htmlFor="password"> password:</label>
            <input type="password" id="password" name="password" value={FormData.password}
             onChange={handlerAllInput} placeholder="enter yourpassword " />
            <br />

            <label htmlFor="email"> email:</label>
            <input type="email" id="email" name="email" value={FormData.email}
             onChange={handlerAllInput} placeholder="enter your email " />
             <br />

            



            
            <button >Submit</button>
        </form>
    )
}