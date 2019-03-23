import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faComments, faTimes
// } from '@fortawesome/free-solid-svg-icons';

import '../PatientFormContainer/PatientFormContainer.scss';

import AppLoggedInHeader from '../../Components/AppLoggedInHeader/AppLoggedInHeader';

class PatientFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header_title: 'MY PATIENT FORM',
            ID: '',
            FirstName: '',
            LastName: '' ,
            Birthdate: '',
            SSN: '',
            Address: '',
            City: '',
            State: '',
            Zip: '',
            Employer: '',
            Occupation: '',
            HomePhone: '',
            CellPhone: '',
            WorkPhone: '',
            Email: '',
            // EmergencyContactInfo: {
            EmergencyContactInfoFullName: '',
            EmergencyContactInfoRelationship: '',
            EmergencyContactInfoWorkPhone: '',
            EmergencyContactInfoHomePhone: '',
            EmergencyContactInfoCellPhone: '',
            // },
            // InsuredPerson: {
                InsuredRelationship: '',
                InsuredBirthdate: '',
                InsuredSSN: '',
            // },
            // Insurance: [{
                InsuranceID: 2,
                GroupNumber: '',
                EmployeeNumber: '',
                PlanName: ''
            // }]
        };

        this.onCheckStateAndProps = this.onCheckStateAndProps.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onCheckStateAndProps = () => {
        console.log(this.state);
        console.log(this.props);
    };

    onFillForm = () => {
        this.setState({
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
        });
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
            EmergencyContactInfo: {
                FullName: this.state.EmergencyContactInfoFullName,
                Relationship: this.state.EmergencyContactInfoRelationship,
                WorkPhone: this.state.EmergencyContactInfoWorkPhone,
                HomePhone: this.state.EmergencyContactInfoHomePhone,
                CellPhone: this.state.EmergencyContactInfoCellPhone
            }
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
                    <button
                        id="prefill-btn"
                        onClick={() => this.onFillForm()}
                        className="btn btn-info">Prefill Form</button>
                    <br/>
                    <Link to="/patient-info" className="data-navigate-views">View My Patient Data</Link>
                    <span>Last updated: 03/22/2019 00:00</span>
                </div>
                <form
                    onSubmit={this.onSubmitForm}
                    className="form-group app-form-group">
                    <div className="app-form-div">
                        <label
                            className="app-form-label form-label-bold">
                            Patient Info
                        </label>
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.FirstName}
                            onChange={event => this.setState({ FirstName: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.LastName}
                            onChange={event => this.setState({ LastName: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Birthdate</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.Birthdate}
                            onChange={event => this.setState({ Birthdate: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">SSN</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.SSN}
                            onChange={event => this.setState({ SSN: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Address</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.Address}
                            onChange={event => this.setState({ Address: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">City</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.City}
                            onChange={event => this.setState({ City: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <div className="app-form-inner-div">
                            <label className="app-form-label">State</label>
                            <input
                                type="text"
                                className="form-control app-form-input"
                                value={this.state.State}
                                onChange={event => this.setState({ State: event.target.value })}
                            />
                        </div>
                        <div className="app-form-inner-div">
                            <label className="app-form-label">Zip</label>
                            <input
                                type="text"
                                className="form-control app-form-input"
                                value={this.state.Zip}
                                onChange={event => this.setState({ Zip: event.target.value })}
                            />
                        </div>
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Employer</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.Employer}
                            onChange={event => this.setState({ Employer: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Occupation</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.Occupation}
                            onChange={event => this.setState({ Occupation: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Home Phone</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.HomePhone}
                            onChange={event => this.setState({ HomePhone: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Cell Phone</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.CellPhone}
                            onChange={event => this.setState({ CellPhone: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">WorkPhone</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.WorkPhone}
                            onChange={event => this.setState({ WorkPhone: event.target.value })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Email</label>
                        <input
                            type="email"
                            className="form-control app-form-input"
                            value={this.state.Email}
                            onChange={event => this.setState({ Email: event.target.value })}
                        />
                    </div>

                    <div className="app-form-div">
                        <label
                            className="app-form-label form-label-bold">
                            Emergency Contact Info
                        </label>
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.EmergencyContactInfoFullName}
                            onChange={event => this.setState({
                                EmergencyContactInfoFullName: event.target.value
                            })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Relationship</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.EmergencyContactInfoRelationship}
                            onChange={event => this.setState({
                                EmergencyContactInfoRelationship: event.target.value
                            })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Work Phone</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.EmergencyContactInfoWorkPhone}
                            onChange={event => this.setState({
                                EmergencyContactInfoWorkPhone: event.target.value
                            })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Home Phone</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.EmergencyContactInfoHomePhone}
                            onChange={event => this.setState({
                                EmergencyContactInfoHomePhone: event.target.value
                            })}
                        />
                    </div>
                    <div className="app-form-div">
                        <label className="app-form-label">Cell Phone</label>
                        <input
                            type="text"
                            className="form-control app-form-input"
                            value={this.state.EmergencyContactInfoCellPhone}
                            onChange={event => this.setState({
                                EmergencyContactInfoCellPhone: event.target.value
                            })}
                        />
                    </div>
                    <div className="app-form-div">
                        <input
                            type="submit"
                            value="COMPLETE"
                            className="form-control btn btn-primary app-form-submit bg-color-dark-salmon"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default PatientFormContainer;
