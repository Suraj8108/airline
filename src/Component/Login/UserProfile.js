import React, { useEffect, useState } from "react"
import { logoutUser, userDetails } from "../../Service/AuthService"
import SearchResult from "../Search/SearchResult"
import "./UserProfile.css"
const UserProfile = (props) => {

    const [userProfile, setUserProfile] = useState({})

    const logout = () => {

        logoutUser();

        window.location = "/";

    }

    useEffect(()=>{
        if(localStorage.getItem("token")){
          userDetails(localStorage.getItem("token")).then(response=>{            
            console.log(response)
            setUserProfile(response)
        }
          ).catch(error=>
            window.location="/"
          )
        }
        else{
            window.location="/"
        }
      },[])

    return (
        <div>
           <nav class="navbar navbar1 navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="" href="/"><img className="ms-4 navlogo" alt="" src="/assets/images/logo.png" /> <br /><span class="ms-1 logotext">BROWNFIELD</span> </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class=" navbar-list navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="w-50">
                                </li>

                            </ul>
                            {
                                props.login ?
                                    <>
                                        <span className="navbar-text">
                                            <div class="collapse navbar-collapse" id="navbar-list-4" style={{ paddingRight: "40px" }}>

                                                <ul class="navbar-nav">
                                                    <button type="button" class="btn me-2 btn-outline-light" data-bs-toggle="modal" data-bs-target="#CheckIn">Check In</button>
                                                    <button type="button" className="btn me-2 btn-outline-light" onClick={() => document.getElementById('footer').scrollIntoView()}>Contact us</button>
                                                    <li class="nav-item dropdown">

                                                        <a class="a nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                                            My Profile

                                                        </a>

                                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                                            <a class="dropdown-item" href="/">Dashboard</a>

                                                            <a class="dropdown-item" href="/UserProfile">View Profile</a>

                                                            <a class="dropdown-item" href="#" onClick={logout}>Log Out</a>

                                                        </div>

                                                    </li>

                                                </ul>

                                            </div>
                                        </span>
                                    </>
                                    :
                                    <>
                                        <span class="navbar-text">
                                            <button type="button" class="btn me-2 btn-outline-dark" data-bs-toggle="modal" data-bs-target="#CheckIn">Check In</button>
                                            <button type="button" className="btn me-2 btn-outline-dark" onClick={() => document.getElementById('footer').scrollIntoView()}>Contact us</button>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn me-2 btn-outline-dark">Login</button>
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#Register" class="btn  me-2 btn-outline-dark">Register</button>
                                        </span>
                                    </>
                            }


                        </div>
                    </div>
                </nav>
            <div className="user-profile">
                <h1 className="mt3 tc">Welcome {userProfile.firstName}</h1>
                <div className="cf">
                    <div className="pl5 section1 fl w-100-m w-100-ns w-50-l bg-white pv3">
                        <h3 className="tc">User Details</h3>
                        <div class="cf w-100 center">
                            <div class="fl w-20 tc pv3 bg-white">
                                First Name:
                            </div>
                            <input id="firstName" class="info fl w-60 tc pv3 bg-white" value={userProfile.firstName} disabled />
                        </div>
                        <div class="cf w-100 center">
                            <div class=" fl w-20 tc pv3 bg-white">
                                Last Name :
                            </div>
                            <input id="lastName" class="info fl w-60 tc pv3 bg-white" value={userProfile.lastName} disabled />
                        </div>
                        <div class="cf w-100 center">
                            <div class=" fl w-20 tc pv3 bg-white">
                                Phone Number :
                            </div>
                            <input id="phoneNo" class="info fl w-60 tc pv3 bg-white" value={userProfile.phoneNumber} disabled />
                        </div>
                        <div class="cf w-100 center">
                            <div class=" fl w-20 tc pv3 bg-white">
                                Email Id :
                            </div>
                            <input id="email" class="info fl w-60 tc pv3 bg-white" value={userProfile.emailId} disabled />
                        </div>
                    </div>
                    <div className="center fr-l mr5 loyalty-card w-40-l w-80 pv5 w-100-m">
                        <h3 className="tc mb4">Check Your Loyalty points here</h3>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="/assets/images/loyalty.jpg" alt="Avatar" style={{ "width": "100%", "height": "100%", }} />
                                </div>
                                <div class="flip-card-back">
                                    <h3>Loyalty Points
                                    </h3>
                                    <h1 className="pv4">{userProfile.loyalty}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Flights">
                    <p className="pl5 fw7 f3  w-50-m w-50-l w-100-s ">Flights Scheduled : <img src="/assets/images/departure.png" className="w-10" /></p>
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                </div>
            </div>
        </div>
    )
}
export default UserProfile