import React from 'react';
import { useState } from 'react';
import plainspace from '../Components/Assets/PLAINSPACE.png';
import rooms from '../Components/Assets/Frame 60842.png'
import list1 from '../Components/Assets/fi-sr-database.png'
import list2 from '../Components/Assets/Vector.png'
import list3 from '../Components/Assets/fi-sr-user-add.png'
import list4 from '../Components/Assets/fi-rr-dollar.png'
import list5 from '../Components/Assets/fi-sr-apps.png'

const Mainscreen = () => {
    return (
        <>
            <div className='row main-heading mt-3' style={{ backgroundColor: "#FFFFFF" }}>
                <div className='booking-container'>
                    <img src={plainspace} alt="" className='booking-image' />
                </div>
                <div className='headings mt-5'>
                    <h3 className='center-bold-text'>Please Fill in the required information</h3>
                    <h6 className='center-bold-text'>Please fill in the details to confirm your order</h6>
                </div>
            </div>
            <div style={{ backgroundColor: "##F0F1F3" }}>
                <div className='row Select-Event' >
                    <h3 className='service-heaing'>Event Type</h3>
                    <div className='select-container'>
                        <label htmlFor="Select">Select Event Type</label>
                        <select className='select-button'>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
                <div className='row select-Rooms'>
                    <h3 className='service-heaing' style={{fontFamily: "sans-serif" }}>Select Available Rooms</h3>
                    <div className='row '>
                        <div className='col-lg-4'>
                            <div className="card" style={{ width: '16rem' }}>
                                <img src={rooms} className="card-img-top" alt="..." />
                                <h5 className="card-title" style={{ fontWeight: "bold" }}>Room1</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                                <div className="Room-packags">
                                    <i className="fas fa-shopping-bag bag-icon"><label className="package-label">4 Packages</label></i> {/* Bag icon */}
                                    <input className='radio-input' type="radio" value="package3" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="card" style={{ width: '16rem' }}>
                                <img src={rooms} className="card-img-top" alt="..." />
                                <h5 className="card-title" style={{ fontWeight: "bold" }}>Room2</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                                <div className="Room-packags">
                                    <i className="fas fa-shopping-bag bag-icon"><label className="package-label">4 Packages</label></i> {/* Bag icon */}
                                    <input className='radio-input' type="radio" value="package3" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="card" style={{ width: '16rem' }}>
                                <img src={rooms} className="card-img-top" alt="..." />
                                <h5 className="card-title" style={{ fontWeight: "bold" }}>Room3</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item  <span>luxry</span></li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                                <div className="Room-packags">
                                    <i className="fas fa-shopping-bag bag-icon"><label className="package-label">4 Packages</label></i> {/* Bag icon */}
                                    <input className='radio-input' type="radio" value="package3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row Select-Date'>
                    <h3 className='service-heaing'>Select Date</h3>
                    <div className='select-container'>
                        <input type="Date" />
                    </div>
                </div>
                <div className='row Select-Time'>
                    <h3 className='service-heaing'>Select Time</h3>
                    <div className='select-container'>
                        <input type="time" />
                    </div>
                </div>
                <div className='row select-Packges1'>
                    <h3 className='service-heaing'>Select Packegs</h3>
                    <div className='select-container'>
                        <label htmlFor="Select">Package</label>
                        <select className='select-button'>
                            <option value="">Select</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <hr className='mt-3' />
                </div>
                <div className='row select-Packges'>
                    <h3 className='service-heaing'>Select Package</h3>
                    <div classname="row text-center">
                        <div className="card mb-3" style={{ maxWidth: 815 }}>
                            <div className="row g-0">
                                <div className="col-lg-4">
                                    <img src={rooms} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title" >Simple Packge</h4>
                                        <p className="card-text">This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, unde? is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row ms-5'>
                                <div className='col-md-6'>
                                    <p>Day Availability
                                        <span>
                                            <p>Wednesday, Thursday, Friday</p>
                                        </span>
                                    </p>
                                </div>
                                <div className='col-md-6'>
                                    <p>Package Length
                                        <span>
                                            <p>Hours</p>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Services'>
                        <h3 className='service-heaing'>Services</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="round-div">
                                    <img src={list1} alt="" style={{ height: "18px", width: "18px", borderRadius: "50%" }} />
                                </div>
                                <h5>Flowers</h5>
                            </li>
                            <li className="list-group-item">
                                <div className="round-div">
                                    <img src={list5} alt="" style={{ height: "18px", width: "18px", borderRadius: "50%" }} />
                                </div>
                                <h5>Backup Groom</h5>
                            </li>
                            <li className="list-group-item">
                                <div className="round-div">
                                    <img src={list2} alt="" style={{ height: "18px", width: "18px", borderRadius: "50%" }} />
                                </div>
                                <h5>Backup Bride</h5>
                            </li>
                            <li className="list-group-item">
                                <div className="round-div">
                                    <img src={list3} alt="" style={{ height: "18px", width: "18px", borderRadius: "50%" }} />
                                </div>
                                <h5>Photography</h5>
                            </li>
                            <li className="list-group-item">
                                <div className="round-div">
                                    <img src={list2} alt="" style={{ height: "18px", width: "18px", borderRadius: "50%" }} />
                                </div>
                                <h5>lunch</h5>
                            </li>
                        </ul>
                    </div>
                    <div className='T-cost'>
                        <p className="cost-label">Total Package Cost</p>
                        <p className="cost-value">$ 4.00</p>
                    </div>
                </div>
                <div className='row select-flowers'>
                    <h3 className='service-heaing'>Additional Services</h3>
                    <div className='row'>
                        <div className="card col-lg-4 mb-4" style={{ maxWidth: 440 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <input type="checkbox" />
                                    <label htmlFor="checkbox">Select</label>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="">
                                            <img src={list5} className="img-fluid rounded-start" alt="Service Image" />
                                        </div>
                                        <h5 className="card-title">Flowers</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-lg-4 mb-4" style={{ maxWidth: 440 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <input type="checkbox" />
                                    <label htmlFor="checkbox">Select</label>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="">
                                            <img src={list5} className="img-fluid rounded-start" alt="Service Image" />
                                        </div>
                                        <h5 className="card-title">Backup Groom</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-lg-4 mb-4" style={{ maxWidth: 440 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <input type="checkbox" />
                                    <label htmlFor="checkbox">Select</label>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="">
                                            <img src={list5} className="img-fluid rounded-start" alt="Service Image" />
                                        </div>
                                        <h5 className="card-title">Backup Bride</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Nextbtn'>
                    <button>Next</button>
                </div>
            </div>
        </>
    );
}

export default Mainscreen;