import React, { useState } from "react";
import "./popup.scss";

function Popup() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div className="wrapper">
        <button onClick={() => setShow(!show)}>Submit</button>
        {show && (
          <>
            <div className="from-design">
              <div className="fromcontant">
                <div className="left-side">
                  <img
                    src={`https://static.vecteezy.com/system/resources/previews/002/794/133/original/young-woman-working-on-laptop-freelance-or-studying-concept-cute-trendy-illustration-in-flat-style-free-vector.jpg`}
                    style={{ width: "100%", height: "230px" }}
                  />
                </div>
                <div className="right-side">
                  <h1>
                    Email Newsletter<br></br>Subscription Form
                  </h1>
                  <p>
                    Please fill this from and we will notify you about the
                    newest updates!
                  </p>
                </div>
              </div>
              <hr></hr>

              <div className="input-part">
                <p className="nameclass"> Name</p>
                <div className="name-part">
                  <div className="left-s">
                    <input
                      style={{ width: "150%", height: "25px" }}
                      type="text"
                    />
                  </div>
                  <div className="right-s">
                    <input
                      style={{ width: "150%", height: "25px" }}
                      type="text"
                    />
                  </div>
                </div>
                <div className="input-name">
                  <p
                    className="f-side"
                    style={{
                      margin: "0px",
                      marginRight: "260px",
                      marginLeft: "80px",
                    }}
                  >
                    First Name
                  </p>
                  <p className="l-side" style={{ margin: "0px" }}>
                    Last Name
                  </p>
                </div>

                <p className="emailname">Email</p>
                <div className="email-input">
                  <input type="text" style={{ width: "37%", height: "25px" }} />
                </div>
                <h5 className="emailadrees">example@example.com</h5>

                <p className="phonecall">Phone Number</p>
                <input className="input-call" type="text" placeholder="(000) 000-0000"
                style={{ width: "33%", height: "25px" }} />

                <p className="companyname">Company Name</p>
                <input className="input-name" type="text"
                  style={{ width: "33%", height: "25px" }}></input>




                  <p className="redio-name">Newsletter type</p>
                  <div className="redio-button">
                  <input className="redio-left" type="radio" value="Male" name="gender" /> Hourly Newsletter

                  <input className="redio-right" type="radio" value="Male" name="gender" /> Daily Newsletter


           
                  </div>
                  <hr></hr>

                  <div className="submit-button">Submit</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Popup;
