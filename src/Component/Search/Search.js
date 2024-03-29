import React, { useEffect } from "react";
import logo from "./logo.png";
import "./Search.css"
import arrivaldate from "./arrivaldate.png"
import arrival from "./arrival.png"
import date from "./date.png"
import departure from "./departure.png"
import { useState } from "react";
import Select from 'react-select'
import "tachyons";
import SearchResult from "./SearchResult";
import { Navigate, useNavigate } from "react-router";
import { ToastContainer,toast } from "react-toastify";

const Search = (props) => {

    const navigate=useNavigate();
    const [search,setSearch]=useState({})
    const [count,setCount]=useState(0)

    const options = [
        {

            value: "Agatti Island Airport",
            label: "Agatti Island"
        },
        {

            value: "Ahmedabad Airport",
            label: "Ahmedabad"
        },
        {

            value: "Aizawl Airport",
            label: "Aizawl"
        },
        {

            value: "Akola Airport",
            label: "Akola"
        },
        {

            value: "Along Airport",
            label: "Along"
        },
        {

            value: "Amausi Airport",
            label: "Lucknow"
        },
        {

            value: "Amritsar Airport",
            label: "Ludhiana"
        },
        {

            value: "Bagdogra Airport",
            label: "Bagdogra"
        },
        {

            value: "Bajpe Airport",
            label: "Mangalore"
        },
        {

            value: "Bakula Rimpoche Airport",
            label: "Leh"
        },
        {

            value: "Balurghat Airport",
            label: "Balurghat"
        },
        {

            value: "Bamrauli Airport",
            label: "Allahabad"
        },
        {

            value: "Barapani Airport",
            label: "Shillong"
        },
        {

            value: "Bareli Airport",
            label: "Bareli"
        },
        {

            value: "Bellary Airport",
            label: "Bellary"
        },
        {

            value: "Bengaluru International Airport",
            label: "Bangalore"
        },
        {

            value: "Bhatinda Airport",
            label: "Bhatinda"
        },
        {

            value: "Bhavnagar Airport",
            label: "Bhavnagar"
        },
        {

            value: "Bhopal Airport",
            label: "Bhopal"
        },
        {

            value: "Bhubaneswar Airport",
            label: "Bhubaneswar"
        },
        {

            value: "Bikaner Airport",
            label: "Bikaner"
        },
        {

            value: "Bilaspur Airport",
            label: "Bilaspur"
        },
        {

            value: "Birsa Munda International Airport",
            label: "Ranchi"
        },
        {

            value: "Borjhar Airport",
            label: "Guwahati"
        },
        {

            value: "Car Nicobar Airport",
            label: "Car Nicobar"
        },
        {

            value: "Chandigarh Airport",
            label: "Chandigarh"
        },
        {

            value: "Chennai International Airport",
            label: "Chennai"
        },
        {

            value: "Chhatrapati Shivaji International Airport",
            label: "Mumbai"
        },
        {

            value: "Chikkalthana Airport",
            label: "Aurangabad"
        },
        {

            value: "Cochin International Airport",
            label: "Kochi"
        },
        {

            value: "Cooch Behar Airport",
            label: "Cooch Behar"
        },
        {

            value: "Cuddapah Airport",
            label: "Cuddapah"
        },
        {

            value: "Dabok Airport",
            label: "Udaipur"
        },
        {

            value: "Dabolim Airport",
            label: "Goa"
        },
        {

            value: "Daman Airport",
            label: "Daman"
        },
        {

            value: "Daparizo Airport",
            label: "Daparizo"
        },
        {
            "value": "Darjeeling Airport",
            label: "Darjeeling"
        }, {

            value: "Dehra Dun Airport",
            label: "Dehra Dun"
        },
        {
            "value": "Deparizo Airport",
            label: "Deparizo"
        }, {

            value: "Devi Ahilyabai Holkar Airport",
            label: "Indore"
        },
        {

            value: "Dhanbad Airport",
            label: "Dhanbad"
        },
        {

            value: "Dibrugarh Airport",
            label: "Dibrugarh"
        },
        {

            value: "Dimapur Airport",
            label: "Dimapur"
        },
        {

            value: "Diu Airport",
            label: "Diu"
        },
        {

            value: "Gaggal Airport",
            label: "Dharamsala"
        },
        {

            value: "Gandhinagar Airport",
            label: "Nasik"
        },
        {

            value: "Gaya Airport",
            label: "Gaya"
        },
        {

            value: "Gorakhpur Airport",
            label: "Gorakhpur"
        },
        {

            value: "Govardhanpur Airport",
            label: "Jamnagar"
        },
        {

            value: "Guna Airport",
            label: "Guna"
        },
        {

            value: "Gwalior Airport",
            label: "Gwalior"
        },
        {

            value: "Hissar Airport",
            label: "Hissar"
        },
        {

            value: "Hubli Airport",
            label: "Hubli"
        },
        {

            value: "Hyderabad International Airport",
            label: "Hyderabad"
        },
        {

            value: "Indira Gandhi International Airport",
            label: "New Delhi"
        },
        {

            value: "Jabalpur Airport",
            label: "Jabalpur"
        },
        {
            "value": "Jagdalpur Airport",
            label: "Jagdalpur"
        }, {

            value: "Jaisalmer Airport",
            label: "Jaisalmer"
        },
        {

            value: "Jeypore Airport",
            label: "Jeypore"
        },
        {

            value: "Jodhpur Airport",
            label: "Jodhpur"
        },
        {

            value: "Kailashahar Airport",
            label: "Kailashahar"
        },
        {

            value: "Kamalpur Airport",
            label: "Kamalpur"
        },
        {

            value: "Kandla Airport",
            label: "Kandla"
        },
        {

            value: "Kanpur Airport",
            label: "Kanpur"
        },
        {

            value: "Keshod Airport",
            label: "Keshod"
        },
        {

            value: "Khajuraho Airport",
            label: "Khajuraho"
        },
        {

            value: "Kheria Airport",
            label: "Agra"
        },
        {

            value: "Khowai Airport",
            label: "Khowai"
        },
        {

            value: "Kolhapur Airport",
            label: "Kolhapur"
        },
        {

            value: "Kota Airport",
            label: "Kota"
        },
        {

            value: "Kozhikode Airport",
            label: "Kozhikode"
        },
        {

            value: "Kullu Manali Airport",
            label: "Bhuntar Kullu."
        },
        {

            value: "Kumbhirgram Airport",
            label: "Silchar"
        },
        {

            value: "Lilabari Airport",
            label: "Lilabari"
        },
        {

            value: "Lohegaon Airport",
            label: "Pune"
        },
        {

            value: "Madurai Airport",
            label: "Madurai"
        },
        {

            value: "Malda Airport",
            label: "Malda"
        },
        {

            value: "Mohanbari Airport",
            label: "Mohanbari"
        },
        {

            value: "Municipal Airport",
            label: "Imphal"
        },
        {
            "value": "Muzaffarnagar Airport",
            label: "Muzaffarnagar"
        }, {

            value: "Muzaffarpur Airport",
            label: "Muzaffarpur"
        },
        {

            value: "Mysore Airport",
            label: "Mysore"
        },
        {

            value: "Nanded Airport",
            label: "Nanded"
        },
        {

            value: "Netaji Subhash Chandra Bose International Airport",
            label: "Kolkata"
        },
        {

            value: "Neyveli Airport",
            label: "Neyveli"
        },
        {
            "value": "Osmanabad Airport",
            label: "Osmanabad"
        }, {

            value: "Pantnagar Airport",
            label: "Pantnagar"
        },
        {

            value: "Pasighat Airport",
            label: "Pasighat"
        },
        {

            value: "Pathankot Airport",
            label: "Pathankot"
        },
        {

            value: "Patna Airport",
            label: "Patna"
        },
        {

            value: "Peelamedu Airport",
            label: "Coimbatore"
        },
        {

            value: "Pondicherry Airport",
            label: "Pondicherry"
        },
        {

            value: "Porbandar Airport",
            label: "Porbandar"
        },
        {

            value: "Port Blair Airport",
            label: "Port Blair"
        },
        {
            "value": "Puttaparthi Airport",
            label: "Puttaparthi"
        }, {

            value: "Raipur Airport",
            label: "Raipur"
        },
        {

            value: "Raja Sansi Airport",
            label: "Amritsar"
        },
        {

            value: "Rajahmundry Airport",
            label: "Rajahmundry"
        },
        {

            value: "Rajkot Airport",
            label: "Rajkot"
        },
        {
            "value": "Rajouri Airport",
            label: "Rajouri"
        }, {
            "value": "Ramagundam Airport",
            label: "Ramagundam"
        }, {

            value: "Ratnagiri Airport",
            label: "Ratnagiri"
        },
        {
            "value": "Rewa Airport",
            label: "Rewa"
        }, {

            value: "Rourkela Airport",
            label: "Rourkela"
        },
        {

            value: "Rowriah Airport",
            label: "Jorhat"
        },
        {

            value: "Rudra Mata Airport",
            label: "Bhuj"
        },
        {

            value: "Rupsi Airport",
            label: "Rupsi"
        },
        {

            value: "Salem Airport",
            label: "Salem"
        },
        {

            value: "Salonibari Airport",
            label: "Tezpur"
        },
        {

            value: "Sambre Airport",
            label: "Belgaum"
        },
        {

            value: "Sanganeer Airport",
            label: "Jaipur"
        },
        {

            value: "Satna Airport",
            label: "Satna"
        },
        {

            value: "Satwari Airport",
            label: "Jammu"
        },
        {

            value: "Sholapur Airport",
            label: "Sholapur"
        },
        {

            value: "Simla Airport",
            label: "Simla"
        },
        {

            value: "Singerbhil Airport",
            label: "Agartala"
        },
        {

            value: "Sonari Airport",
            label: "Jamshedpur"
        },
        {

            value: "Sonegaon Airport",
            label: "Nagpur"
        },
        {

            value: "Srinagar Airport",
            label: "Srinagar"
        },
        {

            value: "Surat Airport",
            label: "Surat"
        },
        {

            value: "Tezu Airport",
            label: "Tezu"
        },
        {

            value: "Thanjavur Airport",
            label: "Thanjavur"
        },
        {

            value: "Thiruvananthapuram International Airport",
            label: "Trivandrum"
        },
        {

            value: "Tirupati Airport",
            label: "Tirupati"
        },
        {

            value: "Trichy Airport",
            label: "Trichy"
        },
        {
            "value": "Tuticorin Airport",
            label: "Tuticorin"
        }, {

            value: "Vadodara Airport",
            label: "Vadodara"
        },
        {

            value: "Varanasi Airport",
            label: "Varanasi"
        },
        {

            value: "Vijayawada Airport",
            label: "Vijayawada"
        },
        {

            value: "Vishakhapatnam Airport",
            label: "Vishakhapatnam"
        },
        {

            value: "Warangal Airport",
            label: "Warangal"
        },
        {

            value: "Zero Airport",
            label: "Zero"
        }
    ]

    const [tripType, setTripType] = useState("One-way");
    const [tripclass, setTripClass] = useState("Economy");
    const [noOfPassengers, setNoOfPassengers] = useState(1);

    const tripTypeHandler = (e) => {
        setTripType(e.target.id);
    }

    const tripClassHandler = (e) => {
        setTripClass(e.target.id);
    }
    const tripSeatHandler = (e) => {
        setNoOfPassengers(e.target.id);
    }

    const resultHandler=(e)=>{
        console.log("time")
        console.log(document.getElementById(e.target.id));
        if(count===0 && document.getElementById(e.target.id).style.backgroundColor==="white"){
                document.getElementById(e.target.id).style.backgroundColor="#3A0210"
                document.getElementById(e.target.id).style.color="white"
                setCount(1)
                console.log("hello")
            }
        else if(count===1 && document.getElementById(e.target.id).style.backgroundColor==="white"){
                toast.error("flight already selected")
                toast.info("please Deselect to continue")
                console.log("hell")
        }
        else{
            document.getElementById(e.target.id).style.backgroundColor="white"
            document.getElementById(e.target.id).style.color="#3A0210"
            console.log("hel")
            setCount(0)
        }
        
    }
    useEffect(()=>{
        if(localStorage.getItem("searchDetails")){
            console.log(JSON.parse(localStorage.getItem("searchDetails")))
            setSearch(JSON.parse(localStorage.getItem("searchDetails")))
            console.log(search)
        }
        else{
            navigate("/")
            toast.error("Please enter search details")
        }
    },[])


    return (
        <div className="background">
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
            <article class=" bookcard1 center w-90 br4 hidden mv4">
                <div class="pa3">
                    <div class="cf">
                        <div class="fl w-100 w-20-ns tl pv1">
                            <div class="firstrow">
                                <div class="">
                                    <div class="w-10  ">
                                        <button class="f5 triptype dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {tripType}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item" id="One-way" onClick={tripTypeHandler}>One Way</li>
                                            <li class="dropdown-item" id="Round Trip" onClick={tripTypeHandler}>Round Trip</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="ml3">
                                    <div class="" >
                                        <button class="f5 triptype dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {noOfPassengers}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item" id="1" onClick={tripSeatHandler}>1</li>
                                            <li class="dropdown-item" id="2" onClick={tripSeatHandler}>2</li>
                                            <li class="dropdown-item" id="3" onClick={tripSeatHandler}>3</li>
                                            <li class="dropdown-item" id="4" onClick={tripSeatHandler}>4</li>
                                            <li class="dropdown-item" id="5" onClick={tripSeatHandler}>5</li>
                                            <li class="dropdown-item" id="6" onClick={tripSeatHandler}>6</li>
                                            <li class="dropdown-item" id="7" onClick={tripSeatHandler}>7</li>
                                            <li class="dropdown-item" id="8" onClick={tripSeatHandler}>8</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="w-10 ml3">
                                    <div class="dropdown">
                                        <button class="dropdown-toggle f5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {tripclass}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item" id="Economy" onClick={tripClassHandler}>Economy</li>
                                            <li class="dropdown-item" id="Business" onClick={tripClassHandler}>Business</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" row2 mt-2 fl w-50-ns w-25-l pr2 tc pv1 ">
                            <img className="departure-image" src="/assets/images/departure.png" alt="" /><br />
                            <Select
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        border: "1px solid #3A0210",
                                    }),
                                    menu: (baseStyles, state) => ({
                                        ...baseStyles,
                                        color: "#3A0210",
                                       borderTop: "2px solid black"
                                    }),
                                    menuList: (baseStyles, state) => ({
                                        ...baseStyles,
                                        height: "30vh",
                                        textAlign: "left"
                                    })

                                }}
                                options={options}
                                value={{label:search.departureAirport,value:search.departureAirport}} />
                        </div>
                        <div class="row2 mt-2 fl w-50-ns w-25-l pr2 tc pv1 ">
                            <img className="departure-image" src="assets/images/arrival.png" alt="" /><br />
                            <Select
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        border: "1px solid #3A0210 ",
                                    }),
                                    menu: (baseStyles, state) => ({
                                        ...baseStyles,
                                        color: "#3A0210",

                                    }),
                                    menuList: (baseStyles, state) => ({
                                        ...baseStyles,
                                        height: "30vh",
                                        textAlign: "left"
                                    })
                                }}
                                options={options}
                                value={{label:search.arrivalAirport,value:search.arrivalAirport}} />
                        </div>
                        <div class="row2  mt-2 fl w-50-ns w-25-l pr2 tc pv1 ">
                            <img src="/assets/images/date.png" className="departure-image" />
                            <input className="dates w-100 tc " id="depart" type="date" value={search.departureDate} />
                        </div>
                        <div class="row2 mt-2 fl w-50-ns w-25-l tc pv1 ">
                            <img src="/assets/images/arrivaldate.png" className="departure-image" />
                            <input className="dates w-100 tc " disabled id="return" type="date" value={search.returnDate}/>

                        </div>
                        <div class="fl mt-2 w-100 w-20-ns tc pv2">
                            <button class="f5 fw5 search grow w-20 ba no-underline ph3 pv2 mb2 dib white " href="#0">Modify</button>
                        </div>
                    </div>
                </div>
            </article>
            <div class="search-results">
                <div class="departing mb4">
                    <p className="ml5"> Deparating Flights <img src="/assets/images/departure.png" className="search-image"/></p>
                    <h3 className="mb2 ml5"> {search.departureAirport} to {search.arrivalAirport} <span class="pl3 f4">{new Date(search.departureDate).toDateString() }</span></h3> 
                    <SearchResult id={"1"} departureTime={"11:50"} departureAirport={search.departureAirport} arrivalAirport={search.arrivalAirport} arrivalTime={"13:05"} totalFare={"Rs 45"} totalTime={"1hr 15min"} flightNumber={"BF"+"1134"} resultHandler={resultHandler}/>
                    <SearchResult id={"1"} departureTime={"11:50"} departureAirport={search.departureAirport} arrivalAirport={search.arrivalAirport} arrivalTime={"13:05"} totalFare={"Rs 45"} totalTime={"1hr 15min"} flightNumber={"BF"+"1133"} resultHandler={resultHandler}/>
                </div>
                <div id="arrival">
                    <p className="ml5"> Returning Flights <img src="/assets/images/arrival.png" className="search-image"/></p>
                    <h3 className="mb2 ml5"> Delhi to Kochi <span>30 January</span></h3> 
                    <SearchResult/>
                    <SearchResult/>
                    <SearchResult/>
                    <SearchResult/>
                </div>
                <div className="tc pb5">
                    <button className="btn btn-primary">Continue to booking</button>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
            />
            <footer></footer>
        </div>)
}

export default Search;