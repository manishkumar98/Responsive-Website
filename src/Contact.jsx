import React,{useState} from "react"
const Contact = () => {

    const [data,setData]= useState({
      fullName:"",
      phone:"",
      email:"",
      message:"",
    });

    const InputEvent=(event)=>{
      const {name,value}=event.target;
      setData((prevVal)=>{
        return{
          ...prevVal,
          [name]:value
        }
      })
    }
    const formSubmit=(e)=>{
      e.preventDefault();
      alert(`Name:${data.fullName}
        Phone:${data.phone} 
        Email:${data.email}
        Message:${data.message}
      `);
    }

  return (
    <>
      <div className="my-5">

        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" 
    name="fullName"
    value={data.fullName}
    onChange={InputEvent}
    id="exampleFormControlInput1" placeholder="Enter your name"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" class="form-control" 
     name="phone"
     value={data.phone}
     onChange={InputEvent}
    
    id="exampleFormControlInput1" placeholder="Mobile number"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control"
     name="email"
     value={data.email}
     onChange={InputEvent}
      id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  
 
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" 
     name="message"
     value={data.message}
     onChange={InputEvent}
    id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
 
  <div class="col-auto">

      <button type="submit" class="btn btn-primary mb-2">
        Submit</button>
    </div>
</form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
