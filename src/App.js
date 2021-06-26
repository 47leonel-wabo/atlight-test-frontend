import './App.css';
import React from 'react'
import RegistrationForm from "./components/form/RegistrationForm";
import LocationDetails from "./components/location/Details";
import AppFooter from "./components/footer/AppFooter";
import AppMap from "./components/location/Map";
import BackendService from "./service/client/BackendService";
import AppNotification from "./service/notification/AppNotification";

class App extends React.Component {

    state = {
        errorResponseObject: {},
    }

    fetchDataFromBackend = () => {
        BackendService.countRecords()
            .then(response => {
                // AppNotification.infoOperation("Backend connection", "Successfully connected with Java")
                if (response.data) {
                    // Once component load show backend record numbers
                    BackendService.countRecords()
                        .then(response => {
                            AppNotification.infoOperation(
                                "Number of records",
                                response.data + " Records")
                        })
                        .catch(error => console.log(error))
                }
            })
            .catch(error => {
                // If any error happened, notify user about
                if (error.response) {
                    this.setState({errorResponseObject: error.response.data,});
                    console.log(error.response.data)
                }
                const status = this.state.errorResponseObject.httpStatus;
                const message = this.state.errorResponseObject.message;

                // Error notification
                AppNotification.errorOperation(
                    status ? status : error.name,
                    message ? message : error.message
                );
            })
    }

    componentDidMount() {
        this.fetchDataFromBackend()
    }

    render = () => {
        return (
            <>
                <div className="container">
                    <div className="container mt-4">
                        <h1 className="text-center">Contacts</h1>
                        <p className="text-muted text-center m-4" style={{fontSize: '14px'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of
                            type and scrambled it to make a type specimen book.
                        </p>
                        <div className="row mt-4">
                            <div className="col-md-5">
                                <div className="p-0 shadow-sm">
                                    <LocationDetails/>
                                    <AppMap/>
                                </div>
                            </div>
                            <div className="col-md-7 shadow-sm">
                                <div className="p-1">
                                    <RegistrationForm/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <AppFooter/>
            </>
        );
    }
}

export default App;
