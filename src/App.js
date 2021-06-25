import './App.css';
import RegistrationForm from "./components/form/RegistrationForm";
import LocationDetails from "./components/location/Details";
import AppFooter from "./components/footer/AppFooter";
import AppMap from "./components/location/Map";

function App() {
    return (
        <>
            <div className="container-sm mt-4">
                <h1 className="text-center">Contacts</h1>
                <p className="text-muted text-center m-4" style={{fontSize: '14px'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and
                    scrambled it to make a type specimen book.
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
            <AppFooter/>
        </>
    );
}

export default App;
