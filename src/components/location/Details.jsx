import React from 'react'
import {Avatar} from "antd";

const LocationDetails = (props) => {
    return (
        <div className="col-md">
            <div className="row m-2">
                <div className="col-2 ml-0 mr-md-3">
                    <Avatar size={47} style={{backgroundColor: '#d5ebcc'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5c8a4a"
                             className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path
                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                    </Avatar>
                </div>
                <div className="col-9 ml-0">
                    <h5 className="p-0">
                        Location: <br/>
                        <small className="p-0 text-muted" style={{fontSize: '14px'}}>Cameroon, Douala</small>
                    </h5>
                </div>
            </div>
            <div className="row m-2">
                <div className="col-2 ml-0  mr-md-3">
                    <Avatar size={47} style={{backgroundColor: '#d5ebcc'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5c8a4a"
                             className="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path
                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                        </svg>
                    </Avatar>
                </div>
                <div className="col-9 ml-0">
                    <h5 className="p-0">
                        Email: <br/>
                        <small className="p-0 text-muted" style={{fontSize: '14px'}}>info@hotmail.com</small>
                    </h5>
                </div>
            </div>
            <div className="row m-2">
                <div className="col-2 ml-0 mr-md-3">
                    <Avatar size={47} style={{backgroundColor: '#d5ebcc'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5c8a4a"
                             className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                    </Avatar>
                </div>
                <div className="col-9 ml-0">
                    <h5 className="p-0">
                        Call: <br/>
                        <small className="p-0 text-muted" style={{fontSize: '14px'}}>+237 81 81 81 81</small>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default LocationDetails
