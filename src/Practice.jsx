// import React, { useState } from 'react'

// function Practice(){
//     var[name,setName]=useState("")
//     var[email,setEmail]=useState("")
//     var[password,setPassword]=useState("")

//     function handleName(a){
//         setName(a.target.value)
//         console.log(name);
//     }

//     function handleEmail(a){
//         setEmail(a.target.value)
//         console.log(email);
//     }

//     function handlePassword(a){
//         setPassword(a.target.value)
//         console.log(password);
        
//     }

//     async function handleAccount(){
//         var formData ={
//             myName : name,
//             myEmail : email,
//             myPassword : password
//         }
//         try{
//         var result = await fetch("",{
//             method : "POST",
//             headers : {
//                 "content-Type": "application/json"
//             },
//             body : JSON.stringify(formData)

//         })
//         if(result.ok){
//             alert("Account Created Successfully")
//             setName("")
//             setEmail("")
//             setPassword("")
//         }
//         else{
//             alert("failed to create account")
//         }
//     }
//         catch(error){
//             console.log("error:",error);
            
//         }
//     }

//     return(
//         <div>
//             <h1>Create an Account</h1>
//             <label htmlFor="">Enter Name</label>
//             <input onChange={handleName} value={name} type="text" />
//             <label htmlFor="">Enter E-mail</label>
//             <input onChange={handleEmail} value={email} type="email" />
//             <label htmlFor="">Enter Password</label>
//             <input onChange={handlePassword} value={password} type="password" />
//             <button onClick={handleAccount}>Create Account</button>

//         </div>
//     )
// }
// export default Practice



import React from 'react'

function Login(){
    return(
        <div>
            <h1>Login Page</h1>
            <label htmlFor="">Enter Email</label>
            <input type="email" />
            <label htmlFor="">Enter Password</label>
            <input type="password" />
            

        </div>
    )
}
export default App


























