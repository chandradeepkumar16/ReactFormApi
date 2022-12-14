import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>hey there</p>
//       </header>
//     </div>
//   );
// }

// const Signup = () => {

//   const [user,userState]=useState({
//     name:"" , email:"" , phone:"" , age:"" , date:"" , batchtiming:"" , payment:""
//   });
function Signup() {
  const submitHandler = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const age = event.target.age.value;
    const date = event.target.date.value;
    const timing = event.target.timing.value;
    const payment = event.target.payment.value;

    axios
      .post("http://localhost:3000/newdb", {
        name,
        email,
        phone,
        age,
        date,
        timing,
        payment,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    date: "",
    timings: "",
    payment: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
    // console.log(name, value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#B5BEF8",
          width: "190vh",
          minHeight: "500px",
          padding: "40px 50px 20px 30px",
        }}
      >
        <h2
          style={{ padding: "10px 20px", textAlign: "center", color: "white" }}
        >
          Yoga Classes
        </h2>
        <section className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="signup-form">
                <h2
                  style={{
                    padding: "10px 20px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Fill this form to enroll into classes ....
                </h2>
                <form
                  className="register-form"
                  id="register-form"
                  // onSubmit={submitHandler}
                  onSubmit={handleForm}
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      placeholder="Name"
                      value={user.name}
                      onChange={handleInputs}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Email"
                      value={user.email}
                      onChange={handleInputs}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="Phone">
                      <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      placeholder="Phone"
                      value={user.phone}
                      onChange={handleInputs}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="Age">
                      <i className="zmdi zmdi-album material-icons-name"></i>
                    </label>

                    <input
                      type="number"
                      id="age"
                      name="age"
                      placeholder="Your age must be between 18-65"
                      autoComplete="off"
                      min="18"
                      max="65"
                      value={user.age}
                      onChange={handleInputs}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="Date">
                      <i className="zmdi zmdi-calendar material-icons-name"></i>
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      autoComplete="off"
                      placeholder="Date"
                      value={user.date}
                      onChange={handleInputs}
                    ></input>
                  </div>

                  <div className="form-group">
                    <i className="zmdi zmdi-reader"></i>
                    <label>
                      Batch timing:
                      <select
                        name="timings"
                        value={user.timings}
                        onChange={handleInputs}
                      >
                        <option value="0">Choose your batch</option>
                        <option value="6-7 AM">6-7 AM</option>
                        <option value="7-8 AM">7-8 AM</option>
                        <option value="8-9 AM">8-9 AM</option>
                        <option value="5-6 AM">5-6 PM</option>
                      </select>
                    </label>
                  </div>

                  <div className="form-group">
                    <i className="zmdi zmdi-money"></i>
                    <label>
                      Payment:
                      <select
                        name="payment"
                        value={user.payment}
                        onChange={handleInputs}
                      >
                        <option value="0">Money</option>
                        <option value="500 Rs">500 Rs</option>
                      </select>
                    </label>
                  </div>

                  <div className="form-group form button">
                    <input
                      type="submit"
                      name="submit"
                      id="signup"
                      className="form-submit"
                      value="register"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Signup;
