import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faComments, faTimes
// } from '@fortawesome/free-solid-svg-icons';

import '../PatientFormContainer/PatientFormContainer.scss';

import AppLoggedInHeader from '../../Components/AppLoggedInHeader/AppLoggedInHeader';

class PatientDataContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header_title: 'MY PATIENT INFO',
            ID: 0,
            FirstName: 'John',
            LastName: 'Candy' ,
            Birthdate: '10/31/1950',
            SSN: '0003337777',
            Address: '120 Ready Lane',
            City: 'Elkhart',
            State: 'IN',
            Zip: '46516',
            Employer: 'Beyer Corp.',
            Occupation: 'Chemist',
            HomePhone: '5742957404',
            CellPhone: '5743378847',
            WorkPhone: '5748837746',
            Email: 'johncandy98@gmail.com',
            EmergencyContactInfoFullName: 'Rosemary Hobor',
            EmergencyContactInfoRelationship: 'Wife',
            EmergencyContactInfoWorkPhone: '5743785832',
            EmergencyContactInfoHomePhone: '5743328847',
            EmergencyContactInfoCellPhone: '5748844473'
        };

        this.onCheckStateAndProps = this.onCheckStateAndProps.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onCheckStateAndProps = () => {
        console.log(this.state);
        console.log(this.props);
    };

    onSubmitForm = e => {
        e.preventDefault();

        const dataObject = {
            endpoint: `user/authenticate`,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Birthdate: this.state.Birthdate,
            SSN: this.state.SSN,
            Address: this.state.Address,
            City: this.state.City,
            State: this.state.State,
            Zip: this.state.Zip,
            Employer: this.state.Employer,
            Occupation: this.state.Occupation,
            HomePhone: this.state.HomePhone,
            CellPhone: this.state.CellPhone,
            WorkPhone: this.state.WorkPhone,
            Email: this.state.Email,
            EmergencyContactInfoFullName: this.state.EmergencyContactInfoFullName,
            EmergencyContactInfoRelationship: this.state.EmergencyContactInfoRelationship,
            EmergencyContactInfoWorkPhone: this.state.EmergencyContactInfoWorkPhone,
            EmergencyContactInfoHomePhone: this.state.EmergencyContactInfoHomePhone,
            EmergencyContactInfoCellPhone: this.state.EmergencyContactInfoCellPhone
        };
        console.log(dataObject);

        // appXHRService.onPOSTData(dataObject)
        //     .then(response => {
        //         console.log(response);
        //         return response;
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         return err;
        //     });
    };

    componentDidMount() {
        // this.onCheckStateAndProps();
    }

    componentDidUpdate() {
        // this.onCheckStateAndProps();
    }

    render() {
        return (
            <div className="app-container-wrapper">
                <AppLoggedInHeader
                    header_title={this.state.header_title}
                />
                <div className="app-info-wrap">
                    <Link to="/patient-form" className="data-navigate-views">Edit My Patient Form</Link>
                    <span>Last updated: 03/22/2019 00:00</span>
                </div>
                <div className="app-patient-info-data-tabular">
                    <h4>My Info:</h4>
                    <ul className="app-data-ul">
                        <li className="app-data-li"><b>First Name:</b><br/> {this.state.FirstName}</li>
                        <li className="app-data-li"><b>Last Name:</b><br/> {this.state.LastName}</li>
                        <li className="app-data-li"><b>Birthdate:</b><br/> {this.state.Birthdate}</li>
                        <li className="app-data-li"><b>SSN:</b><br/> {this.state.SSN}</li>
                        <li className="app-data-li"><b>Address:</b><br/> {this.state.Address}</li>
                        <li className="app-data-li"><b>City:</b><br/> {this.state.City}</li>
                        <li className="app-data-li"><b>State:</b><br/> {this.state.State}</li>
                        <li className="app-data-li"><b>Zip:</b><br/> {this.state.Zip}</li>
                        <li className="app-data-li"><b>Employer:</b><br/> {this.state.Employer}</li>
                        <li className="app-data-li"><b>Occupation:</b><br/> {this.state.Occupation}</li>
                        <li className="app-data-li"><b>Email:</b><br/> {this.state.Email}</li>
                        <li className="app-data-li"><b>Home Phone:</b><br/> {this.state.HomePhone}</li>
                        <li className="app-data-li"><b>Cell Phone:</b><br/> {this.state.CellPhone}</li>
                        <li className="app-data-li"><b>Work Phone:</b><br/> {this.state.WorkPhone}</li>
                    </ul>
                    <h4>Emergency Contact Info:</h4>
                    <ul>
                        <li className="app-data-li"><b>Full Name:</b><br/> {this.state.EmergencyContactInfoFullName}</li>
                        <li className="app-data-li"><b>Relationship:</b><br/> {this.state.EmergencyContactInfoRelationship}</li>
                        <li className="app-data-li"><b>Work Phone:</b><br/> {this.state.EmergencyContactInfoWorkPhone}</li>
                        <li className="app-data-li"><b>Home Phone:</b><br/> {this.state.EmergencyContactInfoHomePhone}</li>
                        <li className="app-data-li"><b>Cell Phone:</b><br/> {this.state.EmergencyContactInfoCellPhone}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PatientDataContainer;
