import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faComments, faTimes, faSearch, faPlus
} from '@fortawesome/free-solid-svg-icons';

import './DashboardContainer.scss';

import AppLoggedInHeader from '../../Components/AppLoggedInHeader/AppLoggedInHeader';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header_title: 'MY CARE BOARD',
            search_modal_active: false,
            doctors_search_list: [
                {
                    DoctorID: 0,
                    DoctorName: 'Rhonda Millsly',
                    DoctorAddress: '919 West Indiana',
                    DoctorCity: 'Elkhart',
                    DoctorState: 'IN',
                    DoctorZip: '46516',
                    DoctorRating: '4',
                    DoctorReviews: [{
                        DoctorRating: 2,
                        DoctorReview: ''
                    }],
                    AcceptedInsurance: [{
                        InsuranceID: 3
                    }]
                },
                {
                    DoctorID: 1,
                    DoctorName: 'LaTonya Jackson',
                    DoctorAddress: '12 Alpine Street',
                    DoctorCity: 'Rogers City',
                    DoctorState: 'VA',
                    DoctorZip: '38383',
                    DoctorRating: '4',
                    DoctorReviews: [{
                        DoctorRating: 4,
                        DoctorReview: ''
                    }],
                    AcceptedInsurance: [{
                        InsuranceID: 2
                    }]
                },
                {
                    DoctorID: 2,
                    DoctorName: 'Edward Pinker',
                    DoctorAddress: '23 Jomer Lane',
                    DoctorCity: 'Chicago',
                    DoctorState: 'IL',
                    DoctorZip: '33882',
                    DoctorRating: '5',
                    DoctorReviews: [{
                        DoctorRating: 3,
                        DoctorReview: ''
                    }],
                    AcceptedInsurance: [{
                        InsuranceID: 3
                    }]
                },
                {
                    DoctorID: 3,
                    DoctorName: 'John Anderson',
                    DoctorAddress: '334 Dundee Street',
                    DoctorCity: 'Pittsburg',
                    DoctorState: 'PA',
                    DoctorZip: '99823',
                    DoctorRating: '5',
                    DoctorReviews: [{
                        DoctorRating: 5,
                        DoctorReview: ''
                    }],
                    AcceptedInsurance: [{
                        InsuranceID: 3
                    }]
                }
            ],
            doctors_list: [
                {
                    DoctorID: 0,
                    DoctorName: 'Jeffery Logan',
                    DoctorAddress: '205 Park Avenue',
                    DoctorCity: 'Elkhart',
                    DoctorState: 'IN',
                    DoctorZip: '46516',
                    DoctorRating: '5',
                    DoctorReviews: [{
                        DoctorRating: 2,
                        DoctorReview: ''
                    }],
                    AcceptedInsurance: [{
                        InsuranceID: 3
                    }]
                },
                {
                    DoctorID: 1,
                    DoctorName: 'Evelyn Rogers',
                    DoctorAddress: '876 Rikes Blvd',
                    DoctorCity: 'New York',
                    DoctorState: 'NY',
                    DoctorZip: '38383',
                    DoctorRating: '4',
                    DoctorReviews: [{
                        DoctorRating: 4,
                        DoctorReview: ''
                    }],
                    AcceptedInsurance: [{
                        InsuranceID: 2
                    }]
                },
                {
                    DoctorID: 2,
                    DoctorName: 'William H. Terns',
                    DoctorAddress: '8080 Billards Place',
                    DoctorCity: 'Chicago',
                    DoctorState: 'IL',
                    DoctorZip: '33882',
                    DoctorRating: '5',
                    DoctorReviews: [{
                        DoctorRating: 3,
                        DoctorReview: ''
                    }],
                    AcceptedInsurance: [{
                        InsuranceID: 3
                    }]
                }
            ]
        };

        this.onCheckStateAndProps = this.onCheckStateAndProps.bind(this);
        this.imageHelperMethod = this.imageHelperMethod.bind(this);
        this.onAddDoctor = this.onAddDoctor.bind(this);
        this.onRenderDoctorsList = this.onRenderDoctorsList.bind(this);
        this.onRenderDoctorsSearchList = this.onRenderDoctorsSearchList.bind(this);
        // this.onRenderSearchDoctorsModal = this.onRenderSearchDoctorsModal.bind(this);
        this.onToggleSearchDoctorsModal = this.onToggleSearchDoctorsModal.bind(this);
        this.onAddDoctorToList = this.onAddDoctorToList.bind(this);
    }

    imageHelperMethod = arg => {
        return `https://loremflickr.com/150/150/person?random=${arg}`;
    };

    onCheckStateAndProps = () => {
        console.log(this.state);
        console.log(this.props);
    };

    onRenderDoctorsList = () => {
        return this.state.doctors_list.map(item => {
            return (
                <div
                    key={item.DoctorID}
                    className="app-dashboard-item-wrap">
                    <div className="dashboard-item-controls">
                        <FontAwesomeIcon icon={faComments} />
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                    <div className="dashboard-item-content-wrap">
                        <img
                            src={this.imageHelperMethod(item.DoctorID)}
                            alt="doctor pic"
                            className="dashboard-item-image"/>
                        <div className="dashboard-item-content-right">
                            <span className="care-type">
                                Primary Care
                            </span>
                            <span className="doctors-name">
                                {item.DoctorName}
                            </span>
                            <span className="address-1">
                                    <b>Address: </b>
                                {item.DoctorAddress}
                                </span>
                            <span className="address-2">
                                {item.DoctorCity},
                                {item.DoctorState} {item.DoctorZip}
                                </span>
                            <span className="phone-number">
                                    <b>Phone: </b>
                                    (574) 295-7404
                                </span>
                        </div>
                    </div>
                    <div className="dashboard-item-bg-wrap">
                        <div className="dashboard-bg-top">-</div>
                    </div>
                </div>
            );
        });
    };

    onRenderDoctorsSearchList = () => {
        return this.state.doctors_search_list.map(item => {
            return (
                <div
                    key={item.DoctorID}
                    onClick={() => this.onAddDoctorToList(item)}
                    className="search-doctor">
                    <FontAwesomeIcon icon={faPlus} />
                    <span className="search-care-type">
                            Primary Care
                        </span>
                    <span className="search-doctors-name">
                            {item.DoctorName}
                        </span>
                </div>
            );
        });
    };

    onToggleSearchDoctorsModal = () => {
        const modal = document.querySelector('#app-search-doctors-modal');

        if (this.state.search_modal_active) {
            this.setState({
                search_modal_active: false
            });
            modal.classList.remove('show-element');
        } else {
            this.setState({
                search_modal_active: true
            });
            modal.classList.add('show-element');
        }
    };

    onAddDoctorToList = doctor => {
        const modal = document.querySelector('#app-search-doctors-modal');
        const newDoctorsList = [];

        for (let i = 0; i < this.state.doctors_list.length; i++) {
            // console.log(this.state.doctors_list[i]);
            newDoctorsList.push(this.state.doctors_list[i]);
        }

        doctor.DoctorID = this.state.doctors_list.length + 1;

        newDoctorsList.push(doctor);
        this.setState({
            doctors_list: newDoctorsList,
            search_modal_active: false
        });
        modal.classList.remove('show-element');
    };

    onAddDoctor = () => {
        return (
            <div
                id="app-search-doctors-modal"
                className="app-search-doctors-modal">
                <div className="search-doctors-in-area">
                    Search doctors in my area
                </div>
                <div className="search-doctors-wrap">
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-doctors-input"/>
                </div>
                <div className="search-doctors-list">
                    {this.onRenderDoctorsSearchList()}
                </div>
                <div className="search-cancel-wrap">
                    <button
                        onClick={() => this.onToggleSearchDoctorsModal()}
                        className="btn btn-default">
                        Cancel
                    </button>
                </div>
                <div className="search-modal-tint">-</div>
            </div>
        );
    };

    // onRenderSearchDoctorsModal = () => {
    //
    // };

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
                {this.onAddDoctor()}
                <div className="app-dashboard-container">
                    {this.onRenderDoctorsList()}
                    <div className="dashboard-add-doctor-wrap">
                        <span
                            onClick={() => this.onToggleSearchDoctorsModal()}
                            className="add-doctor-btn">
                            Add My Doctor
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardContainer;
