import React from 'react';
import {Link} from 'react-router-dom';

import globalFunctions from '../../services/globalFunctions';

import './AppNav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

let username = localStorage.getItem('patient_username');

if (!username) {
    username = 'Pat Foreman';
}

const onCloseNavModal = () => {
    const navModal = document.querySelector('#app-nav-modal');
    navModal.classList.remove('show-element');
};

const AppNav = () => {
    // console.log(props);

    return (
        <section id="app-nav-modal" className="app-nav-modal-wrapper">
            <div className="app-nav-inner-wrap">
                <div
                    onClick={() => onCloseNavModal()}
                    className="app-nav-close-wrap">
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <div className="app-nav-user-block">
                    <img
                        src="https://www.fillmurray.com/g/410/410"
                        alt={username}/>
                    <span>{username}</span>
                </div>
                <nav className="app-nav-block">
                    <ul className="app-nav-ul">
                        <li className="app-nav-li">
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li className="app-nav-li">
                            <Link to="/patient-form">Patient Form</Link>
                        </li>
                        <li className="app-nav-li">
                            <Link to="/patient-info">Patient Info</Link>
                        </li>
                        <li className="app-nav-li">
                            <span
                                onClick={() => globalFunctions.logout()}>
                                Log Out
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="app-nav-tint">-</div>
        </section>
    );
};

export default AppNav;
