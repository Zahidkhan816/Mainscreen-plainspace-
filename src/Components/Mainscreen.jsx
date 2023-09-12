import React from 'react';
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
            <div className='row main-heading'>
                <div className='booking-container'>
                    <img src={plainspace} alt="" className='booking-image' />
                </div>
                <div className='headings'>
                    <h3 className='center-bold-text'>Please Fill in the required information</h3>
                    <h6 className='center-bold-text'>Please fill in the details to confirm your order</h6>
                </div>
            </div>
            <div className='row Select-Event'>
                <h3 className='Select'>Event Type</h3>
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
                <h5 className='center-heading' style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Select Available Room</h5>
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
                            <div className="card-body">
                                <label>4 Packegs</label>
                                <input type="radio" value="package1" />
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
                            <div className="card-body">
                                <label>4 Packegs</label>
                                <input type="radio" value="package2" />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="card" style={{ width: '16rem' }}>
                            <img src={rooms} className="card-img-top" alt="..." />
                            <h5 className="card-title" style={{ fontWeight: "bold" }}>Room3</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                            <div className="card-body">
                                <label>4 Packegs</label>
                                <input type="radio" value="package3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row select-Packges1'>
                <h3 className='Select'>Select Packegs</h3>
                <div className='select-container'>
                    <label htmlFor="Select">Package</label>
                    <select className='select-button'>
                        <option value="">Select</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <hr className='mt-4' />
            </div>
            <div className='row select-Packges'>
                <h2 className='center-heading'>Select Package</h2>
                <div classname="row text-center">
                    <div className="card mb-3" style={{ maxWidth: 815 }}>
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <img src={rooms} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Simple Packge</h5>
                                    <p className="card-text">This Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, unde? is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
                    <p>Total Package Cost</p>
                    <p>$ 4.000</p>
                </div>
            </div>
            <div className='row select-flowers'>
                <h5 className='center-heading'>Additional Services</h5>
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
                                        <img src={list1} className="img-fluid rounded-start" alt="Service Image" />
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
                                        <img src={list2} className="img-fluid rounded-start" alt="Service Image" />
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
        </>
    );
}

export default Mainscreen;