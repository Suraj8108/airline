import React, { useEffect, useState } from "react";
import logo from "./logo.png"
import arrow from "./arrow.png"
import "./CheckInPage.css"
import Seat from "./Seat";
import SearchResult from "../Search/SearchResult";
import Passenger from "./Passenger";
import TermsAndConditions from "./TermsAndConditions";
import confirm from "./confirm.png"

const CheckInPage = (props) => {

    const [state, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const [passengerSeats, setPassengerSeats]= useState([]);
    const [count, setCount]= useState(-1);
    const [passengerList,setPassengerList]=useState(props.passengerList);
    const [temporaryData, setTemporaryData]=useState(props.passengerList)

    const checkAcknowlegdement=(yes)=>{
        console.log(yes)
        if(yes){
            document.getElementById("acknowledgement").style.display="inline-flex";
        }
        else{
            document.getElementById("acknowledgement").style.display="none";
        }
    }

    const seatConfirmHandler=(e)=>{
        document.getElementById("seat-image").style.display="inline-flex";
        setTemporaryData([])
        setTemporaryData(passengerList)
        console.log(temporaryData)
        forceUpdate()
        
    }

    const CheckinHandler=(values)=>{
        console.log(values)
        let data=props.passengerList
        let count=0
         data.forEach(element => {
          console.log(element)
          element.seat=values[count]
          count+=1
         });
         setPassengerList(data)
         
         
        
         
      }

    return (
        <div>
            <nav class="navbar navbar1 navbar-expand-lg">
                <div class="container-fluid">
                    <a class="" href="/"><img className="ms-4 navlogo" alt="" src={logo} /> <br /><span class="ms-1 logotext">BROWNFIELD</span> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class=" navbar-list navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="w-50">
                            </li>

                        </ul>
                        <span class="navbar-text">
                            <a href="/" className="a me-4">About us</a>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn me-2 btn-outline-light">Login</button>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#Register" class="btn  me-2 btn-outline-light">Register</button>
                        </span>
                    </div>
                </div>
            </nav>
            <div className="Checkin bg-black-05">
                <div class="cf ">
                    <div class="section1 fl w-100-m w-70-l pv3 ">
                        <SearchResult />
                        <div class="card card-body mb4">
                            {
                                temporaryData.map(function (passenger) {
                                    console.log(passenger)
                                    return  <div class="cf w-100 center">
                                    <div class=" central fl w-10 tc pv3 bg-white">
                                        Passenger Details:
                                    </div>
                                    <div class="info fl w-30 tc pv3 bg-white">
                                        {passenger.firstName.toUpperCase() + " " + passenger.lastName.toUpperCase()}
                                    </div>
                                    <div class="info fl w-30 tc pv3 bg-white">
                                        {passenger.gender}
                                    </div>
                                    <div class="info fl w-10 tc pv3 bg-white" id={count}>
                                        {passenger.seat}
                                    </div>
                                </div> 
                                })
                            }
                        </div>
                        <h6 className="tc pv2">Complete the steps below to complete Check-in!</h6>
                        <p className="w-100 bg-white">
                            <button class=" btn bg-white w-20" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                Select your Seat <img className="carousel-arrow" src={arrow} />
                            </button>
                            <img src={confirm} id="seat-image" className="w2" />

                        </p>
                        <div class="collapse" id="collapseExample2">
                            <div class="card  card1 card-body mb-4">

                                <Seat seatsBooked={props.seatsBooked} passengers={props.passengers} type={props.type} checkin={CheckinHandler}/>
                                <button className="w-100 btn btn-primary" onClick={seatConfirmHandler} data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample"> Confirm</button>
                            </div>
                        </div>
                        <p className="w-100 bg-white">
                            <button class="w-20 btn bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                Acknowledge T&C's<img className="carousel-arrow" src={arrow} />
                            </button>
                            <img src={confirm} id="acknowledgement" className="w2" />
                        </p>
                        <div class="collapse" id="collapseExample3">
                            <div class="card card-body">
                                <TermsAndConditions check={checkAcknowlegdement} />
                            </div>
                        </div>
                    </div>
                    <div class="fare fl w-100-ns w-100-m w-30-l tc ">
                        <article class="center w-90 br3 hidden ba b--black-10 ">
                            <h1 class="f4 br3 bg-white br--top mv0 pv2 ph3">Total Check In Fare</h1>
                            <div class="  pa3 bg-white f4 bt b--black-10 br4">
                                <div class="cf">
                                    <div class="fl w-50 tc pv1 bg-black-05 ">
                                        Seat Fare:
                                    </div>
                                    <div class="fl w-20 tr pv1 bg-black-025 ">
                                        Rs 300
                                    </div>
                                </div>
                                <div class="cf">
                                    <div class="fl w-50 tc pv1 bg-black-05 ">
                                        Central GST
                                    </div>
                                    <div class="fl w-20 tr pv1 bg-black-025">
                                        Rs 54
                                    </div>
                                </div>
                                <div class="cf">
                                    <div class="fl w-50 tc pv1 bg-black-05">
                                        State GST
                                    </div>
                                    <div class="fl w-20 tr pv1 bg-black-025">
                                        Rs 54
                                    </div>
                                </div>
                                <hr/>
                                <div class="cf">
                                    <div class="fl w-50 tc pv1 bg-black-05">
                                       Total Payable 
                                    </div>
                                    <div class="fl w-20 tr pv1 bg-black-025">
                                        Rs 408
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckInPage