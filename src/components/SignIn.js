import React from 'react'
import { useState, useEffect } from 'react'
// import { useNavigate, Link } from 'react-router-dom'

const SignIn=()=> {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [area, setArea] = useState("");

const PostData = ()=>{
    
    fetch("https://newbackend-i2ml.onrender.com/signup", {
        method : "post",
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            dob,
            area

        })
    }).then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.error){
                alert("something went wrong")
            }
            else{
                alert("successfully saved")
                //Navigate('/home')
            }
        }).catch(err => {
            console.log(err)
       })
}

    return (
        <div className='mycard' >
           <form >
            <h1>Details</h1>
               
          <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"> Email address </label>
          <input
            type="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>

                <div>
                <input type='text'
                className="form-control"
                    placeholder='email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div>
                <input type='text'
                className="form-control"
                    placeholder='dob'
                    value={dob}
                    onChange={(e)=> setDob(e.target.value)}
                    />
                </div>

                <div>
                <input type='text'
                    placeholder='area'
                    value={area}
                    className="form-control"
                    onChange={(e)=> setArea(e.target.value)}
                    />
                </div>
                
                <button type="submit" className="btn btn-success" onClick={() => PostData()}>  Submit </button>
        </form> 
        </div>
    )
}

export default SignIn


// import React, { useState } from 'react'
// // import { Link, useNavigate } from 'react-router-dom';


// const Signup = () => {
// //   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [area, setArea] = useState("");

//   //Make a Network Request 
//   const PostData = () => {
//     // eslint-disable-next-line
//     // if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
//     //   alert("Invalid email")
//     //   return
//     // }
//     fetch("/api/signup", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         dob,
//         area

//       })
//     }).then(res => res.json())
//       .then(data => {
//         // console.log(data);
//         if (data.error) {
//           alert("Something went wrong plz try again ")
//         } else {
//           // M.toast({html: data.message, classes: '#c62828 green darken-1'})
//           alert("sucessfully done ")
        
//         }
//       }).catch(err => {
//         //   console.log(err)
//       })
//   }
//   return (
//     // <div style={{ backgroundImage: `url("https://media.istockphoto.com/id/1020849376/photo/silver-glitter-texture-white-sparkling-shiny-wrapping-paper-background-for-christmas-holiday.jpg?b=1&s=170667a&w=0&k=20&c=uFNVSG_Vn05tdZL_r9wVUrOfwpRnZ7lLiKkpS0K10eg=")` }}>
//     <div className='mycard' >
//       <div className='container'>
//           <h2>GoFood</h2>

//           <div className="mb-3">
//             <label htmlFor="exampleInputName" className="form-label"> Name </label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-control"
//             />
//           </div>



//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label"> Email address </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//             />
//           </div>



//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label"> DOB </label>
//             <input
//               type="text"
//               value={dob}
//               onChange={(e) => setDob(e.target.value)}
//               className="form-control"
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label"> area </label>
//             <input
//               type="text"
//               value={area}
//               onChange={(e) => setArea(e.target.value)}
//               className="form-control"
//             />
//           </div>


//           <button type="submit" className="btn btn-success" onClick={() => PostData()}>  Submit </button>





//         </div>
//       </div>
//     //   </div>
//   )
// }

// export default Signup

